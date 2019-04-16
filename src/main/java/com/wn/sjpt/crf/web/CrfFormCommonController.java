package com.wn.sjpt.crf.web;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.wn.sjpt.crf.dto.AcountInfoDto;
import com.wn.sjpt.crf.dto.PageDto;
import com.wn.sjpt.crf.service.CrfFormCommonService;
import com.wn.sjpt.crf.util.exception.BussinessException;
import com.wn.sjpt.crf.util.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


/**
 * 公共方法web
 * @author wzy
 */
@RestController
@RequestMapping(value = "/api/common")
public class CrfFormCommonController {

    @Autowired
    private CrfFormCommonService crfFormCommonService;
    // 上传本地路径
    @Value("${dir.upload.url:}")
    public String uploadPath;



    @RequestMapping(value = "/uploaddir",method=RequestMethod.POST)
    @ResponseBody
    public boolean upload( String crfIdUpload, String subjectIdUpload,String typeIdUpload,HttpServletRequest request) throws Exception {
        try {
            System.out.println(request.getRequestURI());
            MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
            List<MultipartFile> files = params.getFiles("fileFolder");
            boolean result = crfFormCommonService.upload(crfIdUpload, files, uploadPath, subjectIdUpload,typeIdUpload);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    @RequestMapping(value = "/uploadpic",method=RequestMethod.POST)
    @ResponseBody
    public boolean uploadPic( String crfIdUploadPic, String subjectIdUploadPic,String typeIdUploadPic,String fileId,HttpServletRequest request) throws Exception {
        try {
            System.out.println(request.getRequestURI());
            MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
            List<MultipartFile> files = params.getFiles(fileId);
            boolean result = crfFormCommonService.uploadPic(crfIdUploadPic, files, uploadPath, subjectIdUploadPic,typeIdUploadPic);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    @RequestMapping(value = "/uploadSong",method=RequestMethod.POST)
    @ResponseBody
    public boolean uploadSong( String crfIdUploadSong, String subjectIdUploadSong,String typeIdUploadSong,HttpServletRequest request) throws Exception {
        try {
            MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
            List<MultipartFile> files = params.getFiles("fileSong");
            boolean result = crfFormCommonService.uploadSong(crfIdUploadSong, files, uploadPath, subjectIdUploadSong,typeIdUploadSong);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    @PostMapping("/upload/pic")
    public boolean uploadPic(String crfId,String subjectId,String fieldType,String img,@RequestParam(required = false)String type){
        try {
            crfFormCommonService.uploadPic(crfId,subjectId,fieldType,type,uploadPath,img);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }


    @RequestMapping(value = "/formdataEs")
    public String crfSaveEs(@RequestParam("crfId") String crfId,@RequestParam("formCode") String formCode) {

        try {
            String objStr = crfFormCommonService.getDataStrEs(crfId,formCode);
            return objStr;
        } catch (Exception e) {
            e.printStackTrace();
            return "数据读取失败";
        }
    }

    @RequestMapping(value = "/delete")
    public boolean crfDelEs(@RequestParam("crfId") String crfId) {
        try {
            String objStr = crfFormCommonService.delEs(crfId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 文件列表
     * @param crfId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/fileslist", method = RequestMethod.POST)
    public JSONArray findFilesList(String crfId) throws Exception{
        JSONArray result = crfFormCommonService.findList(crfId);
        return result;
    }

    /**
     * 下载文件
     * @param fileName
     * @param crfId
     * @param resp
     * @throws Exception
     */
    @RequestMapping(value = "/download")
    public void download(@RequestParam String fileName, @RequestParam String crfId,HttpServletResponse resp) throws Exception{
        crfFormCommonService.download(fileName,crfId,resp);
    }

}
