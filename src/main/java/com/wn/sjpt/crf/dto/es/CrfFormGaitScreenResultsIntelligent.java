package com.wn.sjpt.crf.dto.es;

import com.wn.sjpt.crf.domain.BaseUser;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

/**
 * @author mengpengwei
 * 步态认知筛查结果（智能化神经系统功能评估）
 */
@Getter
@Setter
public class CrfFormGaitScreenResultsIntelligent extends BaseUser {
    /**
     * ID
     */
    private Integer id;

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
     * 12个数字齐全
     */
   
    private Integer clockAllNum;
    /**
     * 画钟测试
     * 所有数字顺序正确
     */
   
    private Integer clockNumSort;
    /**
     * 画钟测试
     * 所有数字位置正确
     */
   
    private Integer clockNumPosition;
    /**
     * 画钟测试
     * 有且仅有2个指针
     */
   
    private Integer clockOnlyTwo;
    /**
     * 画钟测试
     * 时针指向4
     */
   
    private Integer clockFourPoint;
    /**
     * 画钟测试
     * 分针指向8
     */
   
    private Integer clockEightMinutes;
    /**
     * 画钟测试
     * 时针和分针比例恰当
     */
   
    private Integer clockProportionAppropriate;
    /**
     * 画钟测试
     * 总分：分/7分
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
     * 起身：x.xx s
     */
   
    private Double roundtripStand;
    /**
     * 起身步行3米往返测试
     * 转身：x.xx s
     */
   
    private Double roundtripTurn;
    /**
     * 起身步行3米往返测试
     * 摆臂：xxx°
     */
   
    private Integer roundtripHipShimmy;
    /**
     * 起身步行3米往返测试
     * 步宽：x.xx m
     */
   
    private Double roundtripStepWidth;
    /**
     * 起身步行3米往返测试
     * 步长：x.xx m
     */
   
    private Double roundtripStepLength;
    /**
     *
     * 起身步行3米往返测试
     * 步速：x.xx m/s
     */
    private Double roundtripStepSpeed;
    /**
     * 起身步行3米往返测试
     * 步频：x.xx 步/s
     */
   
    private Double roundtripStepFrequency;

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
