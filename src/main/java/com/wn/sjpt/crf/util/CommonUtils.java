package com.wn.sjpt.crf.util;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.ResultSet;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 * 共用方法
 *
 * @author mengpengwei
 */
@SuppressWarnings("rawtypes")
public class CommonUtils {
    public static final String DFP_DATE = "yyyy-MM-dd";
    private final static int[] AREA_CODE = {1601, 1637, 1833, 2078, 2274,
            2302, 2433, 2594, 2787, 3106, 3212, 3472, 3635, 3722, 3730, 3858,
            4027, 4086, 4390, 4558, 4684, 4925, 5249, 5590};
    private final static String[] LETTERS = {"a", "b", "c", "d", "e",
            "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "w", "x", "y", "z"};
    private final static char[] DIGITS64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".toCharArray();

    private final static Integer TEN = 10;
    private final static Integer NINETEEN = 19;
    private final static Integer FOUR = 4;
    private final static Integer THREE = 3;
    private final static Integer SEVEN = 7;
    private final static Integer NINE = 9;
    private final static Integer SIX = 6;
    private final static Integer THIRTEEN = 13;
    private final static Integer TWENTYTHREE = 23;
    private final static Integer NUMBER1600 = 1600;
    private final static Integer NUMBER5590 = 5590;

    public static boolean isStop = false;

    /**
     * String\List\Set\Map为空判断 null "null" "" 都认为是true
     *
     * @param obj
     * @return
     */
    public static boolean isEmpty(Object obj) {
        if (obj == null) {
            return true;
        }
        if (obj instanceof String) {
            String str = (String) obj;
            return str.trim().length() == 0 || "null".equals(str.toLowerCase());
        } else if (obj instanceof List) {
            List ls = (List) obj;
            return ls.size() == 0;
        } else if (obj instanceof Set) {
            Set ls = (Set) obj;
            return ls.size() == 0;
        } else if (obj instanceof Map) {
            Map ls = (Map) obj;
            return ls.size() == 0;
        } else if (obj instanceof String[]) {
            String[] ls = (String[]) obj;
            return ls.length == 0;
        }
        return false;
    }

    /**
     * 格式化日期为字符串.
     *
     * @param obj     日期
     * @param pattern 类型
     * @return 结果字符串
     */
    public static String formatDateUtil(Object obj, String pattern) {
        if (pattern == null) {
            pattern = "yyyy-MM-dd HH:mm:ss";
        }
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);
        return sdf.format(obj);
    }

    public static boolean isNotEmpty(Object objs) {
        return !isEmpty(objs);
    }

    /**
     * 获取非空字符串，null返回""
     *
     * @param str
     * @return
     */
    public static String getNotNullValue(String str) {
        if (isEmpty(str)) {
            return "";
        } else {
            return str;
        }
    }

    /**
     * 转成INT 不能转换返回0
     *
     * @param v
     * @return
     */
    public static int toInt(String v) {
        if (!isEmpty(v)) {
            try {
                return Integer.parseInt(v.trim());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return 0;
    }

    /**
     * 根据字符串获取时间
     *
     * @param dtStr
     * @return
     */
    public static Date getDate(String dtStr) {
        if (dtStr == null) {
            return null;
        }
        try {
            if (dtStr.trim().length() == TEN) {
                dtStr = dtStr + " 00:00:00";
            } else if (dtStr.trim().length() > NINETEEN) {
                dtStr = dtStr.substring(0, 19);
            }
            SimpleDateFormat df = new SimpleDateFormat(
                    "yyyy-MM-dd HH:mm:ss");
            Date dateInstance = df.parse(dtStr);
            return dateInstance;
        } catch (Exception ex) {
            return null;
        }

    }

    public static java.sql.Date getSqlDate(String dtStr) {
        if (dtStr == null) {
            return null;
        }
        try {
            return new java.sql.Date(getDate(dtStr).getTime());
        } catch (Exception ex) {
            return null;
        }
    }

    public static java.sql.Date getSqlDate(Date date) {
        if (date == null) {
            return null;
        }
        try {
            return new java.sql.Date(date.getTime());
        } catch (Exception ex) {
            return null;
        }
    }

    public static void createFile(String path, boolean isDirectory) {
        File file = new File(path);
        //寻找父目录是否存在
        File parent = new File(file.getAbsolutePath().substring(0, file.getAbsolutePath().lastIndexOf(File.separator)));
        //如果父目录不存在，则递归寻找更上一层目录
        if (!parent.exists()) {
            createFile(parent.getPath(), true);
        }
        //创建父目录
        if (!file.exists()) {
            if (isDirectory) {
                file.mkdirs();
            } else {
                try {
                    file.createNewFile();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 格式化日期为字符串.
     *
     * @param obj     日期
     * @param pattern 类型
     * @return 结果字符串
     */
    public static String formatDate(Object obj, String pattern) {

        if (obj == null) {
            return null;
        }
        if (pattern == null) {
            pattern = "yyyy-MM-dd HH:mm:ss";
        }
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);
        if (obj instanceof String) {
            String str = (String) obj;
            return sdf.format(getDate(str));
        } else if (obj instanceof java.sql.Timestamp) {
            java.sql.Timestamp d = (java.sql.Timestamp) obj;
            return sdf.format(d);
        } else if (obj instanceof java.sql.Date) {
            java.sql.Date d = (java.sql.Date) obj;
            return sdf.format(d);
        } else if (obj instanceof Date) {
            Date d = (Date) obj;
            return sdf.format(d);
        } else if (obj instanceof Calendar) {
            Calendar d = (Calendar) obj;
            return sdf.format(d.getTime());
        }

        return sdf.format(obj);
    }

    /**
     * 复制文件
     *
     * @param oldPath
     * @param newPath
     */
    public static void copyFile(String oldPath, String newPath) {
        try {
            int byteread = 0;
            File oldfile = new File(oldPath);
            // 文件存在时
            if (oldfile.exists()) {
                // 读入原文件
                InputStream inStream = new FileInputStream(oldPath);
                FileOutputStream fs = new FileOutputStream(newPath);
                byte[] buffer = new byte[1444];
                while ((byteread = inStream.read(buffer)) != -1) {
                    fs.write(buffer, 0, byteread);
                }
                inStream.close();
                fs.close();
            }
        } catch (Exception e) {
            System.out.println("复制单个文件操作出错");
            e.printStackTrace();

        }

    }

    /**
     * double 数值保留几位小数
     *
     * @param num
     * @param median
     * @return
     */
    public static double getdoubleNumMedian(Double num, int median) {
        double myNum3 = 0.0;
        try {
            if (CommonUtils.isNotEmpty(num)) {
                BigDecimal b = new BigDecimal(num);
                myNum3 = b.setScale(median, BigDecimal.ROUND_HALF_UP).doubleValue();
            }
        } catch (Exception e) {
            return 0.0;
        }
        return myNum3;
    }

    /**
     * double数值 格式化
     *
     * @param d
     * @return
     */
    public static String formatDouble(double d) {
        DecimalFormat df = new DecimalFormat("#,##0.00");
        return df.format(d);
    }

    public static String formatInt(int d) {
        DecimalFormat df = new DecimalFormat("#,##0");
        return df.format(d);
    }

    /**
     * String 转成Double
     *
     * @param str
     * @return
     */
    public static double toDouble(String str) {
        double dd = 0.0;
        try {
            if (isNotEmpty(str)) {
                dd = Double.parseDouble(str);
            }
        } catch (NumberFormatException e) {
            dd = 0.0;
        }
        return dd;
    }

    /**
     * 替换指定{}中的文字
     *
     * @param sourceString
     * @param object
     * @return
     */
    public static String replace(final String sourceString, String[] object) {
        String temp = sourceString;
        for (int i = 0; i < object.length; i++) {
            String[] result = object[i].split(":");
            Pattern pattern = Pattern.compile("\\{" + result[0] + "\\}");
            Matcher matcher = pattern.matcher(temp);
            temp = matcher.replaceAll(result[1]);
        }
        return temp;
    }

    /**
     * 替换指定{}中的文字
     *
     * @param sourceString
     * @param object
     * @return
     */
    public static String replaceDate(final String sourceString, String[] object) {
        String temp = sourceString;
        for (int i = 0; i < object.length; i++) {
            String[] result = object[i].split(":");
            String replaceResult = "";
            for (int j = 1; j < result.length; j++) {
                replaceResult += result[j] + ":";
            }
            if (CommonUtils.isNotEmpty(replaceResult.trim())
                    && !"null:".equals(replaceResult.trim())) {
                replaceResult = replaceResult.substring(0,
                        replaceResult.lastIndexOf(":"));
                Pattern pattern = Pattern.compile("\\{" + result[0] + "\\}");
                Matcher matcher = pattern.matcher(temp);
                temp = matcher.replaceAll(replaceResult);
            }
        }
        return temp;
    }

    public static String replaceStr(String sourceString, String[] object) {
        String[] result = new String[2];
        String key = null;
        int conIndex = 0;
        int strLength = 0;
        for (int i = 0; i < object.length; i++) {
            conIndex = object[i].indexOf(":");
            strLength = object[i].length();
            result[0] = object[i].substring(0, conIndex);
            if (strLength > conIndex + 1) {
                result[1] = object[i].substring(conIndex + 1, strLength);
            } else {
                result[1] = null;
            }
            key = "{" + result[0] + "}";
            if (result[1] == null || "null".equals(result[1])) {
                sourceString = sourceString.replace(key, "");
            } else {
                sourceString = sourceString.replace(key, result[1]);
            }
        }
        return sourceString;
    }

    /**
     * 根据日期获取年龄
     *
     * @param birthDate
     * @return
     */
    public static int getAgeByDate(Date birthDate) {
        Calendar current = Calendar.getInstance();
        Calendar birthCalendar = Calendar.getInstance();
        birthCalendar.setTime(birthDate);
        int age = current.get(Calendar.YEAR) - birthCalendar.get(Calendar.YEAR);
        if (current.get(Calendar.MONTH) - birthCalendar.get(Calendar.MONTH) > 0) {
            age++;
        } else if (current.get(Calendar.MONTH) == birthCalendar
                .get(Calendar.MONTH)
                && current.get(Calendar.DAY_OF_MONTH) >= birthCalendar
                .get(Calendar.DAY_OF_MONTH)) {
            age++;
        }
        return age;
    }

    /**
     * 转String日期类型为Date类型
     *
     * @param dtStr
     * @param style
     * @return
     */
    public static Date getStrToDate(String dtStr, String style) {
        if (dtStr == null) {
            return null;
        }
        try {
            if ((dtStr.trim()
                    .matches("^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$"))) {
                dtStr = dtStr + " 00:00:00";
            } else if (dtStr.trim().length() > NINETEEN) {
                dtStr = dtStr.substring(0, 19);
            }
            SimpleDateFormat df = new SimpleDateFormat(style);
            Date dateInstance = df.parse(dtStr);
            return dateInstance;
        } catch (Exception ex) {
            return null;
        }

    }

    /**
     * 字符串时间 如 2011-1-1
     */
    public static Date getStrToDate(String dtStr) {
        String style = "yyyy-MM-dd HH:mm:ss";
        if (dtStr == null) {
            return null;
        }
        try {
            if ((dtStr.trim()
                    .matches("^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$"))) {
                dtStr = dtStr + " 00:00:00";
            } else if (dtStr.trim().length() > NINETEEN) {
                dtStr = dtStr.substring(0, 19);
            }
            SimpleDateFormat df = new SimpleDateFormat(style);
            Date dateInstance = df.parse(dtStr);
            return dateInstance;
        } catch (Exception ex) {
            return null;
        }

    }

    /**
     * 获取yyyy-MM-dd HH:mm:ss 格式时间，如果格式为日期类型，取当前日期的 00:00:00
     *
     * @param dtStr
     * @return
     */
    public static String formatDateStr(String dtStr) {
        if (dtStr.trim().length() == TEN) {
            dtStr = dtStr + " 00:00:00";
        } else if (dtStr.trim().length() > NINETEEN) {
            dtStr = dtStr.substring(0, 19);
        }
        return dtStr;
    }

    /**
     * 获取yyyy-MM-dd HH:mm:ss 格式时间，如果格式为日期类型，取当前日期的 23:59:59
     *
     * @param dtStr
     * @return
     */
    public static String formatDateEndStr(String dtStr) {
        if (dtStr.trim().length() == TEN) {
            dtStr = dtStr + " 23:59:59";
        } else if (dtStr.trim().length() > NINETEEN) {
            dtStr = dtStr.substring(0, 19);
        }
        return dtStr;
    }

    /**
     * 获取当前时间
     */
    public static String getCurrentDateStr(String format) {
        return formatDate(new Date(), format);
    }

    /**
     * 获取加当前N天的日期
     *
     * @param format
     * @return
     */
    public static String getCurrentDateAddStr(String format, int amount) {
        Calendar c = Calendar.getInstance();
        c.add(Calendar.DAY_OF_MONTH, amount);
        return formatDate(c, format);
    }

    /**
     * 获取转换后的数字(天,月)
     */
    public static String formatInt(String str) {
        try {
            if (Integer.parseInt(str) >= TEN) {
                return str;
            } else {
                return "0" + Integer.parseInt(str);
            }
        } catch (Exception ex) {
            return "1";
        }
    }

    /**
     * 计算两个时间之间的天数差
     *
     * @param fDate
     * @param oDate
     * @return
     */
    public static int daysOfTwo(Date fDate, Date oDate) {

        Calendar aCalendar = Calendar.getInstance();

        aCalendar.setTime(fDate);

        int day1 = aCalendar.get(Calendar.DAY_OF_YEAR);

        aCalendar.setTime(oDate);

        int day2 = aCalendar.get(Calendar.DAY_OF_YEAR);

        return day2 - day1;
    }

    /**
     * 日期天数差
     *
     * @param smdate
     * @param bdate
     * @return
     * @throws Exception
     */
    public static int daysBetween(Date smdate, Date bdate) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            smdate = sdf.parse(sdf.format(smdate));
            bdate = sdf.parse(sdf.format(bdate));
            Calendar cal = Calendar.getInstance();
            cal.setTime(smdate);
            long time1 = cal.getTimeInMillis();
            cal.setTime(bdate);
            long time2 = cal.getTimeInMillis();
            long betweenDays = (time2 - time1) / (1000 * 3600 * 24);
            return Integer.parseInt(String.valueOf(betweenDays));
        } catch (ParseException e) {
            return -1;
        }

    }

    public static int getQuarter(Object num) {
        int quarter = 0;
        int nums = CommonUtils.toInt(num.toString());
        if (0 < nums && FOUR > nums) {
            quarter = 1;
        } else if (THREE < nums && SEVEN > nums) {
            quarter = 2;
        } else if (SIX < nums && TEN > nums) {
            quarter = 3;
        } else if (NINE < nums && THIRTEEN > nums) {
            quarter = 4;
        }
        return quarter;
    }

    /**
     * 计算两个时间之间的天数差
     *
     * @param fDate
     * @param oDate
     * @return
     */
    public static int daysOfTwoBySecond(Date fDate, Date oDate) {
        if (null == fDate || null == oDate) {
            return -1;
        }
        long intervalMilli = oDate.getTime() - fDate.getTime();
        int days = (int) (intervalMilli / (24 * 60 * 60 * 1000));
        return (days > 0 ? days : 1);
    }

    public static String daysOfTwoBySecond(String fDateStr, String oDateStr, int type) {//type为0代表取最大，为1代表取最小
        Date fDate = CommonUtils.getDate(fDateStr);
        Date oDate = CommonUtils.getDate(oDateStr);
		/*if (null == fDate || null == oDate) {
			return -1;
		}*/
        if (CommonUtils.isEmpty(type)) {
            type = 0;
        }
        long intervalMilli = oDate.getTime() - fDate.getTime();
        int days = (int) (intervalMilli / (24 * 60 * 60 * 1000));
        if (type == 0) {
            if (days > 0) {
                return oDateStr;
            } else {
                return fDateStr;
            }
        } else if (type == 1) {
            if (days > 0) {
                return fDateStr;
            } else {

                return oDateStr;
            }
        } else {
            return fDateStr;
        }
    }

    public static String getFormatDate(String maxDate, boolean start) {
        if (start) {
            maxDate = maxDate.substring(0, 10);
            maxDate += " 00:00:01";
        } else {
            maxDate = maxDate.substring(0, 10);
            maxDate += " 23:59:59";
        }
        return maxDate;
    }

    public static StringBuilder getContext(ResultSet rs, String colName)
            throws Exception {
        Object clob = rs.getObject(colName);
        if (clob instanceof String) {
            return new StringBuilder((String) clob);
        }
        Reader is = ((Clob) clob).getCharacterStream();
        BufferedReader br = new BufferedReader(is);
        String s = br.readLine();
        StringBuilder strs = new StringBuilder();
        while (s != null) {
            strs.append(s);
            s = br.readLine();
        }
        is.close();
        br.close();
        return strs;
    }

    /***
     * JSON格式返回响应内容
     * @param resp
     * @param jsonstr
     */
    public static void respJson(HttpServletResponse resp, String jsonstr) {
        //JSON格式返回
        resp.setContentType("application/json; charset=utf-8");
        try {
            resp.getWriter().write(jsonstr);
            resp.getWriter().flush();
            resp.getWriter().close();
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("获取响应内容失败！");
        }
    }

    /**
     * 调用getAllFirstLetter方法生成首字母串
     *
     * @param str
     * @param charsetName
     * @param toCharsetName
     * @return
     */
    private static String conversionStr(String str, String charsetName, String toCharsetName) {
        try {
            str = new String(str.getBytes(charsetName), toCharsetName);
        } catch (UnsupportedEncodingException ex) {
            System.out.println("字符串编码转换异常：" + ex.getMessage());
        }
        return str;
    }

    public static String getFirstLetter(String chinese) {
        if (chinese == null || chinese.trim().length() == 0) {
            return "";
        }
        chinese = conversionStr(chinese, "GB2312", "ISO8859-1");
        // 判断是不是汉字
        if (chinese.length() > 1) {
            // 汉字区码
            int liSectorCode = (int) chinese.charAt(0);
            // 汉字位码
            int liPositionCode = (int) chinese.charAt(1);
            liSectorCode = liSectorCode - 160;
            liPositionCode = liPositionCode - 160;
            // 汉字区位码
            int liSecPosCode = liSectorCode * 100 + liPositionCode;
            if (liSecPosCode > NUMBER1600 && liSecPosCode < NUMBER5590) {
                for (int i = 0; i < TWENTYTHREE; i++) {
                    if (liSecPosCode >= AREA_CODE[i]
                            && liSecPosCode < AREA_CODE[i + 1]) {
                        chinese = LETTERS[i];
                        break;
                    }
                }
            } else // 非汉字字符,如图形符号或ASCII码
            {
                chinese = conversionStr(chinese, "ISO8859-1", "GB2312");
                chinese = chinese.substring(0, 1);
            }
        }

        return chinese;
    }

    public static String getAllFirstLetter(String str) {
        if (str == null || str.trim().length() == 0) {
            return "";
        }

        String st = "";
        for (int i = 0; i < str.length(); i++) {
            st = st + getFirstLetter(str.substring(i, i + 1));
        }

        return st;
    }

    /**
     * 转换为下划线
     * @param camelCaseName
     * @return
     */
    public static String str2UnderLine(String camelCaseName) {
        StringBuilder result = new StringBuilder();
        if (camelCaseName != null && camelCaseName.length() > 0) {
            result.append(camelCaseName.substring(0, 1).toLowerCase());
            for (int i = 1; i < camelCaseName.length(); i++) {
                char ch = camelCaseName.charAt(i);
                if (Character.isUpperCase(ch)) {
                    result.append("_");
                    result.append(Character.toLowerCase(ch));
                } else {
                    result.append(ch);
                }
            }
        }
        return result.toString();
    }

    /**
     * 转换为驼峰
     * @param underscoreName
     * @return
     */
    public static String str2Camel(String underscoreName) {
        StringBuilder result = new StringBuilder();
        if (underscoreName != null && underscoreName.length() > 0) {
            boolean flag = false;
            for (int i = 0; i < underscoreName.length(); i++) {
                char ch = underscoreName.charAt(i);
                if ("_".charAt(0) == ch) {
                    flag = true;
                } else {
                    if (flag) {
                        result.append(Character.toUpperCase(ch));
                        flag = false;
                    } else {
                        result.append(ch);
                    }
                }
            }
        }
        return result.toString();
    }
    public static boolean isNum(String str){
        if(isEmpty(str)) {
            return false;
        }
        return str.matches("\\d+(\\.\\d+){0,1}");
    }

    /**
     * 下一个UUID
     * @return
     */
    public static String nextu(){
        UUID u=UUID.randomUUID();
        return shortUUID(u.getMostSignificantBits())+shortUUID(u.getLeastSignificantBits());
    }
    private static String shortUUID(long l) {
        char[] buf = "00000000000".toCharArray(); // 限定11位长度
        int length = 11;
        long least = 63L; // 0x0000003FL
        do {
            buf[--length] = DIGITS64[(int) (l & least)]; // l & least取低6位
            l >>>= 6;
        } while (l != 0);
        return new String(buf);
    }
}