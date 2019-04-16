package com.wn.sjpt.crf.dto.es;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author mengpengwei
 * 步态认知筛查结果（神经内科非运动障碍专业中级以下职称临床医生）
 */
@Getter
@Setter
public class CrfFormGaitScreenResultsNoDyskinesia extends BaseForm {
    /**
     * ID
     */
    private Integer id;
    /**
     * 报表ID
     */
    private String crfId;

    /**
     * 句子复述：
     * 是否完成：是 否
     */
    private Boolean retellFinish;
    /**
     * 句子复述：
     * 检查日期
     */
    private Date retellDate;
    /**
     * 句子复述：
     * 语言印象：正确 异常
     */
    private Boolean languageImpress;
    /**
     * 句子复述：
     * 语言印象：详情
     */
    private String languageImpressDetail;

    /**
     * 词语短时回忆：
     * 是否完成：是 否
     */
    private Boolean recallFinish;
    /**
     * 词语短时回忆：
     * 检查日期：
     */
    private Date recallDate;
    /**
     * 词语短时回忆：
     * 皮球
     */
    private Integer recallBall;
    /**
     * 词语短时回忆：
     * 国旗
     */
    private Integer recallNationalFlag;
    /**
     * 词语短时回忆：
     * 树木
     */
    private Integer recallTree;
    /**
     * 词语短时回忆：
     * 总分：分/3分
     */
    private Integer recallTotalScore;

    /**
     * 画钟测试
     * 是否完成：是 否
     */
    private Boolean clockFinish;
    /**
     * 画钟测试
     * 检查日期：
     */
    private Date clockDate;
    /**
     * 画钟测试
     * 轮廓为闭合的圆
     */
    private Integer clockRound;
    /**
     * 画钟测试
     * 所有数字正确且位置和顺序正确
     */
    private Integer clockAllNum;
    /**
     * 画钟测试
     * 指针正确且指向正确时间
     */
    private Integer clockPoint;
    /**
     * 画钟测试
     * 总分：分/3分
     */
    private Integer clockTotalScore;

    /**
     * 词语短延迟回忆
     * 是否完成：是 否
     */
    private Boolean delayRecallFinish;

    /**
     * 词语短延迟回忆
     * 检查日期：
     */
    private Date delayRecallDate;
    /**
     * 词语短延迟回忆
     * 皮球
     */
    private Integer delayRecallBall;
    /**
     * 词语短延迟回忆
     * 国旗
     */
    private Integer delayRecallNationalFlag;
    /**
     * 词语短延迟回忆
     * 树木
     */
    private Integer delayRecallTree;
    /**
     * 词语短延迟回忆
     * 总分：分/3分
     */
    private Integer delayRecallTotalScore;

    /**
     * 认知印象：正常 异常
     */
    private Integer cognitionImpress;
    /**
     * 认知印象：详情
     */
    private String cognitionImpressDetail;

    /**
     * 起身步行3米往返测试
     * 是否完成：是 否
     */
    private Boolean roundtripFinish;
    /**
     * 起身步行3米往返测试
     * 检查日期：
     */
    private Date roundtripDate;
    /**
     * 起身步行3米往返测试
     * 起身困难1
     */
    private Integer roundtripStandDifficultyOne;
    /**
     * 起身步行3米往返测试
     * 转身困难1
     */
    private Integer roundtripTurnDifficultyOne;
    /**
     * 起身步行3米往返测试
     * 运动迟缓1
     */
    private Integer roundtripBradykinesiaOne;
    /**
     * 起身步行3米往返测试
     * 姿势异常1
     */
    private Integer roundtripPostureAbnormalOne;
    /**
     * 起身步行3米往返测试
     * 其他1
     */
    private Integer roundtripOtherOne;
    /**
     * 起身步行3米往返测试
     * 其他-详情1
     */
    private String roundtripOtherDetailOne;
    /**
     * 起身步行3米往返测试
     * 专家1步态印象：正常 异常
     */
    private Integer gaitImpressOne;
    /**
     * 起身步行3米往返测试
     * 专家1步态印象：详情
     */
    private String gaitImpressDetailOne;

    /**
     * 起身步行3米往返测试
     * 起身困难2
     */
    private Integer roundtripStandDifficultyTwo;
    /**
     * 起身步行3米往返测试
     * 转身困难2
     */
    private Integer roundtripTurnDifficultyTwo;
    /**
     * 起身步行3米往返测试
     * 运动迟缓2
     */
    private Integer roundtripBradykinesiaTwo;
    /**
     * 起身步行3米往返测试
     * 姿势异常2
     */
    private Integer roundtripPostureAbnormalTwo;
    /**
     * 起身步行3米往返测试
     * 其他2
     */
    private Integer roundtripOtherTwo;
    /**
     * 起身步行3米往返测试
     * 其他2-详情
     */
    private String roundtripOtherDetailTwo;

    /**
     * 起身步行3米往返测试
     * 专家2步态印象：正常 异常
     */
    private Integer gaitImpressTwo;
    /**
     * 起身步行3米往返测试
     * 专家2步态印象：详情
     */
    private String gaitImpressDetailTwo;

    /**
     * 起身步行3米往返测试
     * 起身困难3
     */
    private Integer roundtripStandSifficultyThree;
    /**
     * 起身步行3米往返测试
     * 转身困难3
     */
    private Integer roundtripTurnDifficultyThree;
    /**
     * 起身步行3米往返测试
     * 运动迟缓3
     */
    private Integer roundtripBradykinesiaThree;
    /**
     * 起身步行3米往返测试
     * 姿势异常3
     */
    private Integer roundtripPostureAbnormalThree;
    /**
     * 起身步行3米往返测试
     * 其他3
     */
    private Integer roundtripOtherThree;
    /**
     * 起身步行3米往返测试
     * 其他3-详情
     */
    private String roundtripOtherDetailThree;
    /**
     * 起身步行3米往返测试
     * 专家3步态印象：正常 异常
     */
    private Integer gaitImpressThree;
    /**
     * 起身步行3米往返测试
     * 专家3步态印象：详情
     */
    private String gaitImpressDetailThree;

    /**
     * 起身步行3米往返测试
     * 步态印象：正常 异常
     */
    private Integer gaitImpress;
    /**
     * 起身步行3米往返测试
     * 步态印象：详情
     */
    private String gaitImpressDetail;
   
    private Timestamp createDate;

}
