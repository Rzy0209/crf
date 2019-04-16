package com.wn.sjpt.crf.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

/**
 * @Description 将汉字转换成拼音
 *
 *              注：若出现汉字转拼音错误的情况
 *
 *              请在duoyinzi_dic.properties相关拼音后面添加相关汉字即可
 */
public class PinYinUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(PinYinUtil.class);

    private static Map<String, List<String>> pinyinMap = new HashMap<String, List<String>>();

    public PinYinUtil() {
        LOGGER.info("初始化拼音转换工具类。");
        // 实例化拼音工具类
        InputStream stream = Thread.currentThread().getContextClassLoader().getResourceAsStream("config/duoyinzi_dic.properties");
        initPinyin(stream);

    }

    /**
     * 将某个字符串的首字母 大写
     *
     * @param str
     * @return
     */
    public static String convertInitialToUpperCase(String str) {
        if (str == null) {
            return null;
        }
        StringBuffer sb = new StringBuffer();
        char[] arr = str.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            char ch = arr[i];
            if (i == 0) {
                sb.append(String.valueOf(ch).toUpperCase());
            } else {
                sb.append(ch);
            }
        }
        return sb.toString();
    }

    /**
     * 汉字转拼音 最大匹配优先
     *
     * @param chinese
     * @param type
     *            : 0全拼 : 1简拼
     * @return
     */
    public static String convertChineseToPinyin(String chinese, int type) {
        StringBuffer pinyin = new StringBuffer();
        HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
        defaultFormat.setCaseType(HanyuPinyinCaseType.LOWERCASE);
        defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
        char[] arr = chinese.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            char ch = arr[i];
            if (ch > 128) { // 非ASCII码
                // 取得当前汉字的所有全拼
                try {
                    String[] results = PinyinHelper.toHanyuPinyinStringArray(ch, defaultFormat);
                    if (results == null) { // 非中文
                        return "";
                    } else {
                        int len = results.length;
                        if (len == 1) { // 不是多音字
                            // pinyin.append(results[0]);
                            String py = results[0];
                            if (py.contains("u:")) { // 过滤 u:
                                py = py.replace("u:", "v");
                            }
                            if (type == 0) {
                                py = convertInitialToUpperCase(py);
                            }
                            if (type == 1) {
                                py = py.substring(0, 1);
                            }
                            pinyin.append(py);
                        } else if (results[0].equals(results[1])) { // 非多音字 有多个音，取第一个
                            // pinyin.append(results[0]);
                            if (type == 0) {
                                results[0] = convertInitialToUpperCase(results[0]);
                            }
                            if (type == 1) {
                                results[0] = results[0].substring(0, 1);
                            }
                            pinyin.append(results[0]);
                        } else { // 多音字
                            int length = chinese.length();
                            boolean flag = false;
                            String s = null;
                            List<String> keyList = null;
                            for (int x = 0; x < len; x++) {
                                String py = results[x];
                                if (py.contains("u:")) { // 过滤 u:
                                    py = py.replace("u:", "v");
                                }
                                keyList = pinyinMap.get(py);
                                if (i + 3 <= length) { // 后向匹配2个汉字 大西洋
                                    s = chinese.substring(i, i + 3);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // if (value != null && value.contains(s)) {
                                        // pinyin.append(results[x]);
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        flag = true;
                                        break;
                                    }
                                }
                                if (i + 2 <= length) { // 后向匹配 1个汉字 大西
                                    s = chinese.substring(i, i + 2);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // pinyin.append(results[x]);
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        flag = true;
                                        break;
                                    }
                                }
                                if ((i - 2 >= 0) && (i + 1 <= length)) { // 前向匹配2个汉字 龙固大
                                    s = chinese.substring(i - 2, i + 1);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // pinyin.append(results[x]);
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        flag = true;
                                        break;
                                    }
                                }
                                if ((i - 1 >= 0) && (i + 1 <= length)) { // 前向匹配1个汉字 固大
                                    s = chinese.substring(i - 1, i + 1);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // pinyin.append(results[x]);
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        flag = true;
                                        break;
                                    }
                                }
                                if ((i - 1 >= 0) && (i + 2 <= length)) { // 前向1个，后向1个 固大西
                                    s = chinese.substring(i - 1, i + 2);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // pinyin.append(results[x]);
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        flag = true;
                                        break;
                                    }
                                }
                            }
                            if (!flag) { // 都没有找到，匹配默认的 读音 大
                                s = String.valueOf(ch);
                                for (int x = 0; x < len; x++) {
                                    String py = results[x];
                                    if (py.contains("u:")) { // 过滤 u:
                                        py = py.replace("u:", "v");
                                    }
                                    keyList = pinyinMap.get(py);
                                    if (keyList != null && (keyList.contains(s))) {
                                        // 如果不需要拼音首字母大写 ，直接返回即可
                                        // 拼音首字母 大写 //pinyin.append(convertInitialToUpperCase(py));
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        break;
                                    } else {
                                        if (type == 0) {
                                            py = convertInitialToUpperCase(py);
                                        }
                                        if (type == 1) {
                                            py = py.substring(0, 1);
                                        }
                                        pinyin.append(py);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } catch (BadHanyuPinyinOutputFormatCombination e) {
                    LOGGER.error("转译拼音异常", e);
                    return "";
                }
            } else {
                pinyin.append(arr[i]);
            }
        }
        return pinyin.toString();
    }

    /**
     * 检查多音字并返回拼音
     *
     *
     * @param keyWord
     * @param type
     * @return
     *
     */
 /*   public static String checkIsPolyphone(String keyWord, int type) {
        HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
        defaultFormat.setCaseType(HanyuPinyinCaseType.LOWERCASE);
        defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
        char[] arr = keyWord.toCharArray();
        boolean flag = false;
        for (int i = 0; i < arr.length; i++) {
            char ch = arr[i];
            if (ch > 128) { // 非ASCII码
                // 取得当前汉字的所有全拼
                try {
                    String[] results = PinyinHelper.toHanyuPinyinStringArray(ch, defaultFormat);
                    if (results == null) { // 非中文
                        flag = false;
                    } else {
                        int len = results.length;
                        if (len > 1) { //// 多音字
                            flag = true;
                            break;
                        }
                    }
                } catch (BadHanyuPinyinOutputFormatCombination e) {
                    LOGGER.error("转译拼音异常", e);
                    flag = false;
                }
            }
        }
        String PinYin = PinYinUtil.convertChineseToPinyin(keyWord, type);
        if (flag) {
            if (type == 1) {
                PinYin = PolyphoneUtil.getPolyphonePinyin(PinYinUtil.convertChineseToPinyin(keyWord, 2) + "-" + PinYin);
            } else {
                PinYin = PolyphoneUtil.getPolyphonePinyin(PinYin);
            }
            System.out.println(PinYin);
        }
        return PinYin;
    }*/

    /**
     * 初始化 所有的多音字词组
     *
     * @param file
     */
    public static void initPinyin(InputStream file) {
        // 读取多音字的全部拼音表;
        // InputStream file = PinyinHelper.class.getResourceAsStream(fileName);
        BufferedReader br = new BufferedReader(new InputStreamReader(file));
        String s = null;
        try {
            while ((s = br.readLine()) != null) {
                if (s != null) {
                    String[] arr = s.split("#");
                    String pinyin = arr[0];
                    String chinese = arr[1];
                    if (chinese != null) {
                        String[] strs = chinese.split(" ");
                        List<String> list = Arrays.asList(strs);
                        pinyinMap.put(pinyin, list);
                    }
                }
            }
        } catch (IOException e) {
            LOGGER.error("初始化多音字异常", e);
        } finally {
            try {
                br.close();
            } catch (IOException e) {
                LOGGER.error("关闭BufferedReader异常", e);
            }
        }
    }
}