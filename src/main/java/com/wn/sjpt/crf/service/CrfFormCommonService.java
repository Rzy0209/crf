package com.wn.sjpt.crf.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.domain.CrfSubjectResField;
import com.wn.sjpt.crf.dto.es.CrfForm;
import com.wn.sjpt.crf.es.dto.CrfEsDto;
import com.wn.sjpt.crf.es.service.ElasticSearchService;
import com.wn.sjpt.crf.repository.CrfSubjectResFieldRespsitory;
import com.wn.sjpt.crf.util.CommonUtils;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Decoder;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.DecimalFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import static com.wn.sjpt.crf.util.exception.ErrorCode.PARAM_NOT_FOUND;


/**
 * 公共service层
 *
 * @author wzy
 */
@Service
public class CrfFormCommonService {
    @Autowired
    private ElasticSearchService esService;
    @Autowired
    private CrfSubjectResFieldRespsitory crfSubjectResFieldRespsitory;

    // 上传本地路径
    @Value("${dir.upload.url:}")
    public String loadPath;
    /**
     * 定义B字节数
     */
    private final static long FILE_SIZE_B = 1024;
    /**
     * 定义KB字节数
     */
    private final static long FILE_SIZE_KB = 1048576;
    /**
     * 定义MB字节数
     */
    private final static long FILE_SIZE_MB = 1073741824;
    public String getDataStrEs(String crfId, String formCode) throws Exception {
        JSONObject js = esService.findOne(crfId);
        if (CommonUtils.isEmpty(js)) {
            return null;
        }
        JSONObject json = js.getJSONObject(formCode);
        String formDataStr = JSONObject.toJSONStringWithDateFormat(json, "yyyy-MM-dd HH:mm:ss");
        return formDataStr;
    }

    public String delEs(String crfId) {
        esService.delete(crfId);
        return "删除成功";
    }

    public boolean upload(String crfId, List<MultipartFile> files, String localhostPath, String subjectId, String typeId) throws Exception {
        BufferedOutputStream bos = null;
        BufferedInputStream bis = null;
        CrfSubjectResField csrf = crfSubjectResFieldRespsitory.findBySubIdAndIdAndDisabledFalse(subjectId, typeId);
        if (CommonUtils.isEmpty(csrf)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有课题关联");
        }
        // 新建本地文件夹
        String subCode = csrf.getCode();
        String zipPath = toCreateFdir(crfId, localhostPath, subjectId, subCode);
        String zipDir = "";
        //遍历文件夹
        for (MultipartFile mf : files) {
            String originalFilename = mf.getOriginalFilename();
            // 建文件夹
            String[] patharr = originalFilename.split("/");
            zipDir = patharr[0];
            toMarkDirs(zipPath, patharr);
            //读取文件
            bis = new BufferedInputStream(mf.getInputStream());
            //指定存储的路径
            FileOutputStream localStream = new FileOutputStream(zipPath + "/" + originalFilename);
            bos = new BufferedOutputStream(localStream);
            int len = 0;
            byte[] buffer = new byte[10240];
            while ((len = bis.read(buffer)) != -1) {
                bos.write(buffer, 0, len);
            }
            //刷新此缓冲的输出流，保证数据全部都能写出
            bos.flush();
            localStream.close();
        }
        bis.close();
        bos.close();
        //压缩
        JSONObject js = esService.findOne(crfId);
        if (CommonUtils.isEmpty(js)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
        }
        CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
        CrfForm crfForm = crfEsDto.getCrfForm();
        // 对上传的文件名字进行_分割 确定删除影响类型 CT OR MRI
        String[] groupAndName = zipDir.split("_");
        //删除原有文件
        File oldZipFile = new File(zipPath + "/" + zipDir + ".zip");
        if (oldZipFile.exists()) {
            oldZipFile.delete();
            // 如果删除原来文件 则需要对统计数量上减1
            if (CommonUtils.isNotEmpty(groupAndName)) {
                // 分组类型
                String groupj = groupAndName[0];
                Map<String, Integer> tjminus = crfForm.getTj();
                if(CommonUtils.isNotEmpty(tjminus)){
                    for (Map.Entry<String, Integer> entry : tjminus.entrySet()) {
                        if(entry.getKey().equals(groupj)){
                            if(entry.getValue() > 0){
                                int finalVal = entry.getValue()-1;
                                tjminus.put(entry.getKey(),finalVal);
                            }
                        }
                    }
                }
            }
        }
        toZip(zipPath + "/" + zipDir, zipPath + "/" + zipDir);
        // 压缩完成删除原有文件
        delFolder(zipPath + "/" + zipDir);
        // 压缩完成需要对统计上加1
        if (CommonUtils.isNotEmpty(groupAndName)) {
            // 分组类型
            String groupadd = groupAndName[0];
            Map<String, Integer> tjadd = crfForm.getTj();
            if(CommonUtils.isNotEmpty(tjadd)){
                if(tjadd.containsKey(groupadd)){
                    for (Map.Entry<String, Integer> entry : tjadd.entrySet()) {
                        if(entry.getKey().equals(groupadd)){
                            if(entry.getValue() > 0){
                                int finalVal = entry.getValue()+1;
                                tjadd.put(entry.getKey(),finalVal);
                            }
                        }
                    }
                }else{
                    tjadd.put(groupadd,1);
                }
            }else {
                Map<String, Integer> newAdd = new HashMap<>();
                newAdd.put(groupadd,1);
                crfForm.setTj(newAdd);
            }
        }
        //更新数据记录
        crfForm.setUploadPath(zipPath);
        crfEsDto.setCrfForm(crfForm);
        JSONObject result = (JSONObject) JSONObject.toJSON(crfEsDto);
        esService.update(result, crfEsDto.getId());
        return true;
    }

    /**
     * 删除文件
     */
    public static void delFolder(String folderPath) {
        try {
            //删除完里面所有内容
            delAllFile(folderPath);
            String filePath = folderPath;
            filePath = filePath;
            java.io.File myFilePath = new java.io.File(filePath);
            myFilePath.setWritable(true);
            myFilePath.delete(); //删除空文件夹
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     * 删除指定文件夹下所有文件
     *
     * @param path 文件夹完整绝对路径
     * @return
     */
    public static boolean delAllFile(String path) {
        boolean flag = false;
        File file = new File(path);
        if (!file.exists()) {
            return flag;
        }
        if (!file.isDirectory()) {
            return flag;
        }
        String[] tempList = file.list();
        File temp = null;
        for (int i = 0; i < tempList.length; i++) {
            if (path.endsWith(File.separator)) {
                temp = new File(path + tempList[i]);
            } else {
                temp = new File(path + File.separator + tempList[i]);
            }
            if (temp.isFile()) {
                temp.delete();
            }
            if (temp.isDirectory()) {
                //先删除文件夹里面的文件
                delAllFile(path + "/" + tempList[i]);
                //再删除空文件夹
                delFolder(path + "/" + tempList[i]);
                flag = true;
            }
        }
        return flag;
    }


    /**
     * 压缩
     *
     * @param zipDir
     */
    private void toZip(String zipDir, String zipName) throws Exception {
        //创建zip输出流
        FileOutputStream fileOutputStream = new FileOutputStream(zipName + ".zip");
        ZipOutputStream out = new ZipOutputStream(fileOutputStream);
        //创建缓冲输出流
        BufferedOutputStream bos = new BufferedOutputStream(out);
        File sourceFile = new File(zipDir);
        //调用函数
        compress(out, bos, sourceFile, sourceFile.getName());
        bos.close();
        out.close();
        fileOutputStream.close();
        System.out.println("压缩完成");
    }

    public void compress(ZipOutputStream out, BufferedOutputStream bos, File sourceFile, String base) throws Exception {
        //如果路径为目录（文件夹）
        if (sourceFile.isDirectory()) {
            //取出文件夹中的文件（或子文件夹）
            File[] flist = sourceFile.listFiles();
            //如果文件夹为空，则只需在目的地zip文件中写入一个目录进入点
            if (flist.length == 0) {
                System.out.println(base + "/");
                out.putNextEntry(new ZipEntry(base + "/"));
            } else//如果文件夹不为空，则递归调用compress，文件夹中的每一个文件（或文件夹）进行压缩
            {
                for (int i = 0; i < flist.length; i++) {
                    compress(out, bos, flist[i], base + "/" + flist[i].getName());
                }
            }
        } else//如果不是目录（文件夹），即为文件，则先写入目录进入点，之后将文件写入zip文件中
        {
            out.putNextEntry(new ZipEntry(base));
            FileInputStream fos = new FileInputStream(sourceFile);
            BufferedInputStream bis = new BufferedInputStream(fos);
            int tag;
            System.out.println(base);
            //将源文件写入到zip文件中
            while ((tag = bis.read()) != -1) {
                out.write(tag);
            }
            bis.close();
            fos.close();

        }
    }

    /**
     * 创建文件夹
     *
     * @param zipPath
     * @param patharr
     */
    private void toMarkDirs(String zipPath, String[] patharr) {
        StringBuffer nowPath = new StringBuffer();
        nowPath.append(zipPath)
                .append("/");
        for (int i = 0; i < patharr.length - 1; i++) {
            String s = patharr[i];
            File file = new File(nowPath + s);
            if (!file.exists()) {
                file.mkdirs();
            }
            nowPath.append(s).append("/");
        }
    }

    /**
     * 上传图片
     * @return
     */
    public boolean uploadPic(String crfId, List<MultipartFile> files, String localhostPath, String subjectId, String typeId) throws Exception{
        BufferedOutputStream bos = null;
        BufferedInputStream bis = null;
        CrfSubjectResField csrf = crfSubjectResFieldRespsitory.findBySubIdAndIdAndDisabledFalse(subjectId, typeId);
        if (CommonUtils.isEmpty(csrf)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有课题关联");
        }
        // 新建本地文件夹
        String subCode = csrf.getCode();
        String zipPath = toCreateFdir(crfId, localhostPath, subjectId, subCode);
        // 获取数据
        JSONObject js = esService.findOne(crfId);
        if (CommonUtils.isEmpty(js)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
        }
        CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
        CrfForm crfForm = crfEsDto.getCrfForm();
        for (MultipartFile mf : files) {
            String originalFilename = mf.getOriginalFilename();
            // 建文件夹
            String[] patharr = originalFilename.split("/");
            //删除原有文件
            File oldZipFile = new File(zipPath + "/" + patharr[patharr.length-1]);
            if (oldZipFile.exists()) {
                oldZipFile.delete();
                // 如果删除原来文件 则需要对统计数量上减1
                if (CommonUtils.isNotEmpty(crfForm.getTj())) {
                    Map<String, Integer> map = crfForm.getTj();
                    if(CommonUtils.isNotEmpty(map)){
                        for (Map.Entry<String, Integer> entry : map.entrySet()) {
                            if(entry.getKey().equals("img")){
                                if(entry.getValue() > 0){
                                    int finalVal = entry.getValue()-1;
                                    map.put(entry.getKey(),finalVal);
                                }
                            }
                        }
                    }
                }
            }
            //读取文件
            bis = new BufferedInputStream(mf.getInputStream());
            //指定存储的路径
            FileOutputStream localStream = new FileOutputStream(zipPath + "/" + patharr[patharr.length-1]);
            bos = new BufferedOutputStream(localStream);
            int len = 0;
            byte[] buffer = new byte[10240];
            while ((len = bis.read(buffer)) != -1) {
                bos.write(buffer, 0, len);
            }
            //刷新此缓冲的输出流，保证数据全部都能写出
            bos.flush();
            localStream.close();
        }
        bis.close();
        bos.close();
        // 图片统计
        if (CommonUtils.isNotEmpty(crfForm.getTj())) {
            // 分组类型
            Map<String, Integer> tjMap = crfForm.getTj();
            if(CommonUtils.isNotEmpty(tjMap)){
                if(tjMap.containsKey("img")){
                    for (Map.Entry<String, Integer> entry : tjMap.entrySet()) {
                        if(entry.getKey().equals("img")){
                            int finalVal = entry.getValue()+1;
                            tjMap.put(entry.getKey(),finalVal);
                        }
                    }
                }else{
                    tjMap.put("img",1);
                }
            }
        }else {
            Map<String, Integer> newAdd = new HashMap<>();
            newAdd.put("img",1);
            crfForm.setTj(newAdd);
        }
        // 更新数据记录
        crfForm.setUploadPath(zipPath);
        crfEsDto.setCrfForm(crfForm);
        JSONObject result = (JSONObject) JSONObject.toJSON(crfEsDto);
        esService.update(result, crfEsDto.getId());
        return true;
    }

    public JSONArray findList(String crfId) throws Exception{
        JSONArray result = new JSONArray();
        // 获取数据
        JSONObject js = esService.findOne(crfId);
        if (CommonUtils.isEmpty(js)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
        }
        CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
        CrfForm crfForm = crfEsDto.getCrfForm();
        String uploadPath = crfForm.getUploadPath();
        if(CommonUtils.isEmpty(uploadPath)){
            uploadPath=loadPath+"/"+crfEsDto.getSubjectId()+"/"+crfEsDto.getFieldTypeId()+"/"+crfEsDto.getCrfId();
        }
        if(CommonUtils.isEmpty(uploadPath)){
            throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
        }else {
            File files = new File(uploadPath);
            if(!files.exists()){
                throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
            }
            File[] files1 = files.listFiles();
            for(File f:files1){
                String name = f.getName();
                // 文件大小
                long filelong = getFileSize(f);
                String filesize = formetFileSize(filelong);
                JSONObject nj = new JSONObject();
                nj.put("name",name);
                nj.put("path",uploadPath);
                nj.put("size",filesize);
                nj.put("crfId",crfId);
                result.add(nj);
            }
        }
        return result;
    }
    /**
     * 转换文件大小
     *
     * @param fileS
     * @return
     */
    private static String formetFileSize(long fileS) {
        DecimalFormat df = new DecimalFormat("#.00");
        String fileSizeString = "";
        String wrongSize = "0B";
        if (fileS == 0) {
            return wrongSize;
        }
        if (fileS < FILE_SIZE_B) {
            fileSizeString = df.format((double) fileS) + "B";
        } else if (fileS < FILE_SIZE_KB) {
            fileSizeString = df.format((double) fileS / 1024) + "KB";
        } else if (fileS < FILE_SIZE_MB) {
            fileSizeString = df.format((double) fileS / 1048576) + "MB";
        } else {
            fileSizeString = df.format((double) fileS / 1073741824) + "GB";
        }
        return fileSizeString;
    }

    /**
     * 获取指定文件大小
     *
     * @param file
     * @return
     * @throws Exception
     */
    private static long getFileSize(File file) throws Exception {
        long size = 0;
        if (file.exists()) {
            FileInputStream fis = null;
            fis = new FileInputStream(file);
            size = fis.available();
        } else {
            file.createNewFile();
        }
        return size;
    }
    public void download(String fileName,String crfId, HttpServletResponse resp) {
        // 获取数据
        JSONObject js = esService.findOne(crfId);
        if (CommonUtils.isEmpty(js)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有记录存在");
        }
        CrfEsDto crfEsDto = JSONObject.toJavaObject(js, CrfEsDto.class);
        CrfForm crfForm = crfEsDto.getCrfForm();
        String uploadPath = crfForm.getUploadPath();
        File file = new File(uploadPath +"/"+fileName);
        // 输出流
        ServletOutputStream out = null;
        // 输入流
        FileInputStream inputStream = null;
        try {
            // 设置文件头
            resp.setContentType("multipart/form-data");
            //为文件重新设置名字，采用数据库内存储的文件名称
            resp.addHeader("Content-Disposition", "attachment; filename=" + new String(file.getName().getBytes(),"ISO8859-1"));
            inputStream = new FileInputStream(file);
            out = resp.getOutputStream();
            // 读取文件流
            int b = 0;
            byte[] buffer = new byte[1024];
            while (b != -1){
                b = inputStream.read(buffer);
                //4.写到输出流(out)中
                out.write(buffer,0,b);
            }
            // 流关闭
            inputStream.close();
            out.close();
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                // 流关闭
                inputStream.close();
                out.close();
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("关闭流失败");
            }
        }

    }

    /**
     * 上传音频文件
     * @param crfId
     * @param files
     * @param localhostPath
     * @param subjectId
     * @param typeId
     * @return
     * @throws Exception
     */
    public boolean uploadSong(String crfId, List<MultipartFile> files, String localhostPath, String subjectId, String typeId) throws Exception{
        BufferedOutputStream bos = null;
        BufferedInputStream bis = null;
        CrfSubjectResField csrf = crfSubjectResFieldRespsitory.findBySubIdAndIdAndDisabledFalse(subjectId, typeId);
        if (CommonUtils.isEmpty(csrf)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有课题关联");
        }
        // 新建本地文件夹
        String subCode = csrf.getCode();
        String zipPath = toCreateFdir(crfId, localhostPath, subjectId, subCode);
        for (MultipartFile mf : files) {
            String originalFilename = mf.getOriginalFilename();
            // 建文件夹
            String[] patharr = originalFilename.split("/");
            //删除原有文件
            File oldZipFile = new File(zipPath + "/" + patharr[patharr.length-1]);
            if (oldZipFile.exists()) {
                oldZipFile.delete();
            }
            //读取文件
            bis = new BufferedInputStream(mf.getInputStream());
            //指定存储的路径
            FileOutputStream localStream = new FileOutputStream(zipPath + "/" + patharr[patharr.length-1]);
            bos = new BufferedOutputStream(localStream);
            int len = 0;
            byte[] buffer = new byte[10240];
            while ((len = bis.read(buffer)) != -1) {
                bos.write(buffer, 0, len);
            }
            //刷新此缓冲的输出流，保证数据全部都能写出
            bos.flush();
            localStream.close();
        }
        bis.close();
        bos.close();
        return true;
    }

    /**
     * 上传摄像头截屏
     * @param crfId
     * @param subjectId
     * @param typeId
     * @param localhostPath
     * @param img
     * @return
     * @throws Exception
     */
    public boolean uploadPic(String crfId,String subjectId,String typeId,String type,String localhostPath,String img) throws Exception{
        if(CommonUtils.isEmpty(img)){
            throw new BussinessException(PARAM_NOT_FOUND,"必须上传图片信息");
        }
        CrfSubjectResField csrf = crfSubjectResFieldRespsitory.findBySubIdAndIdAndDisabledFalse(subjectId, typeId);
        if (CommonUtils.isEmpty(csrf)) {
            throw new BussinessException(ErrorCode.NOT_FIND, "没有课题关联");
        }
        String code = csrf.getCode();
        String folderPath = toCreateFdir(crfId, localhostPath, subjectId, code);
        StringBuilder filePath=new StringBuilder(folderPath);
        filePath.append(File.separator).append(crfId);
        if(CommonUtils.isNotEmpty(type)){
            filePath.append("_").append(type);
        }
        filePath.append("_").append(CommonUtils.formatDate(new Date(),"yyyyMMddHHmmss")).append(".png");
        writePic2File(filePath.toString(),img);
        return  true;
    }

    /**
     * 图片文件写入
     * @param filePath
     * @param img
     * @throws Exception
     */
    private void writePic2File(String filePath,String img)throws Exception{
        byte[] bytes = new BASE64Decoder().decodeBuffer(img);
        for (int i = 0; i <bytes.length; ++i) {
            // 调整异常数据
            if (bytes[i] < 0) {
                bytes[i] += 256;
            }
        }
        OutputStream out = new FileOutputStream(filePath);
        out.write(bytes);
        out.flush();
        out.close();
    }
    private String toCreateFdir(String crfId, String localhostPath, String subjectId, String subCode) {
        File localFile = new File(localhostPath);
        if (!localFile.exists()) {
            localFile.mkdirs();
        }
        // 课题文件夹
        String subPath = localhostPath + "/" + subjectId;
        if (localhostPath.endsWith("/")) {
            subPath = localhostPath + subjectId;
        }
        File subFile = new File(subPath);
        if (!subFile.exists()) {
            subFile.mkdirs();
        }
        // 类型文件夹
        String typePath = subPath + "/" + subCode;
        File typeFile = new File(typePath);
        if (!typeFile.exists()) {
            typeFile.mkdirs();
        }
        // 按crfid 新建压缩包文件夹
        String zipPath = typePath + "/" + crfId;
        File zipFileDir = new File(zipPath);
        if (!zipFileDir.exists()) {
            zipFileDir.mkdirs();
        }
        return zipPath;
    }
}
