//患者基本信息
var BASE = function () {
    /**
     * 身份证校验算法
     */
    var vcity = {
        11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
        21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
        33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
        42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
        51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
        63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
    };

    //校验身份证是否合法
    function checktheform(card) {
        //是否为空
        if (card === '') {
            alert('请输入身份证号，身份证号不能为空');
            return false;
        }
        //校验长度，类型
        if (isCardNo(card) === false) {
            alert('您输入的身份证号码不正确，请重新输入');
            return false;
        }
        //检查省份
        if (checkProvince(card) === false) {
            alert('您输入的身份证号码不正确,请重新输入');
            return false;
        }
        //校验生日
        if (checkBirthday(card) === false) {
            alert('您输入的身份证号码生日不正确,请重新输入');
            return false;
        }
        //检验位的检测
        if (checkParity(card) === false) {
            alert('您的身份证校验位不正确,请重新输入');
            return false;
        }
        return true;
    }
    //取身份证前两位,校验省份
    function checkProvince(card) {
        var province = card.substr(0, 2);
        if (vcity[province] == undefined) {
            return false;
        }
        return true;
    }
    //检查号码是否符合规范，包括长度，类型
    function isCardNo(card) {
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
        if (reg.test(card) === false) {
            return false;
        }
        return true;
    }
    //检查生日是否正确
    function checkBirthday(card) {
        var len = card.length;
        //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
        if (len == '15') {
            var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
            var arr_data = card.match(re_fifteen);
            var year = arr_data[2];
            var month = arr_data[3];
            var day = arr_data[4];
            var birthday = new Date('19' + year + '/' + month + '/' + day);
            return verifyBirthday('19' + year, month, day, birthday);
        }
        //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
        if (len == '18') {
            var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
            var arr_data = card.match(re_eighteen);
            var year = arr_data[2];
            var month = arr_data[3];
            var day = arr_data[4];
            var birthday = new Date(year + '/' + month + '/' + day);
            return verifyBirthday(year, month, day, birthday);
        }
        return false;
    }
    //校验日期
    function verifyBirthday(year, month, day, birthday) {
        var now = new Date();
        var now_year = now.getFullYear();
        //年月日是否合理
        if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
            //判断年份的范围（3岁到100岁之间)
            var time = now_year - year;
            if (time >= 3 && time <= 100) {
                return true;
            }
            return false;
        }
        return false;
    }
    //校验位的检测
    function checkParity(card) {
        //15位转18位
        card = changeFivteenToEighteen(card);
        var len = card.length;
        if (len == '18') {
            var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            var cardTemp = 0, i, valnum;
            for (i = 0; i < 17; i++) {
                cardTemp += card.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[cardTemp % 11];
            if (valnum == card.substr(17, 1)) {
                return true;
            }
            return false;
        }
        return false;
    }
    //15位转18位身份证号
    function changeFivteenToEighteen(card) {
        if (card.length == '15') {
            var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            var cardTemp = 0, i;
            card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
            for (i = 0; i < 17; i++) {
                cardTemp += card.substr(i, 1) * arrInt[i];
            }
            card += arrCh[cardTemp % 11];
            return card;
        }
        return card;
    }
    function init() {
        //身份证校验以及自动计算年龄
        $("#identifier").off("change").on("change", function () {
            var identifier = $(this).val();
            if (checktheform(identifier)) {
                //获取年龄
                var myDate = new Date();
                var month = myDate.getMonth() + 1;
                var day = myDate.getDate();
                var age = myDate.getFullYear() - identifier.substring(6, 10) - 1;
                if (identifier.substring(10, 12) < month || identifier.substring(10, 12) == month && identifier.substring(12, 14) <= day) {
                    age++;
                }
                $("#age").val(age);
                // 性别赋值
                var sexNum = parseInt(identifier.substring(16, 17));
                if((sexNum%2 ==0)){
                    $('#gender').val(2);
                }else{
                    $('#gender').val(1);
                }
            }else{
                $("#age").val("");
            }
        });

        //姓名自动设置姓名缩写
        $("#name").off("keyup").on("keyup", function () {
            var name = $(this).val();
            if (name != null && name != "" && name != undefined) {
                // 调用汉字转拼音
                $.ajax({
                    url: "../api/crf/generateCode",
                    type: "GET",
                    data: {
                        "comanyName": name
                    },
                    dataType: "text",
                    success: function (msg) {
                        if (msg != null && msg != "" && msg != undefined) {
                            $("#nameSx").val(msg);
                        }
                    },
                });
            } else {
                $("#nameSx").val("");
            }
        });

        //身高 范围100-200，超出范围弹出提示框“填写错误”
        $("#height").off("change").on("change", function () {
            var height = $(this).val();
            if (height != null && height != "" && height != undefined) {
                //如果变量val是字符类型的数则转换为int类型 如果不是则ival为NaN
                var ival = parseInt(height);
                if (!isNaN(ival) && ival>=100 && ival<=200) {
                    var weight = $("#weight").val();
                    if(weight != null && weight != "" && weight != undefined){
                        height = ival/100;
                        var value = weight/(height*height);
                        $("#bmi").val(value);
                    }
                } else {
                    alert("身高填写错误");
                }
            }else{
                $("#bmi").val("");
            }
        });

        //体重 范围30-150，超出范围弹出提示框“填写错误”
        $("#weight").off("change").on("change", function () {
            var weight = $(this).val();
            if (weight != null && weight != "" && weight != undefined) {
                //如果变量val是字符类型的数则转换为int类型 如果不是则ival为NaN
                var ival = parseInt(weight);
                if (!isNaN(ival) && ival>=30 && ival<=150) {
                    var height = $("#height").val();
                    if(height != null && height != "" && height != undefined){
                        height = height/100;
                        var value = ival/(height*height);
                        $("#bmi").val(value.toFixed(2));
                    }
                } else {
                    alert("体重填写错误");
                }
            }else{
                $("#bmi").val("");
            }
        });

        //血压 上压范围60-250
        $("#sp").off("change").on("change",function () {
           var sp = $(this).val();
           if(sp!=null && sp!="" && sp!=undefined){
               var ival = parseInt(sp);
               if (!isNaN(ival) && ival>=60 && ival<=250) {
               }else{
                   alert("收缩压填写错误");
               }
           }
        });

        //血压 下压范围30-150
        $("#dp").off("change").on("change",function () {
            var dp = $(this).val();
            if(dp!=null && dp!="" && dp!=undefined){
                var ival = parseInt(dp);
                if (!isNaN(ival) && ival>=30 && ival<=150) {
                }else{
                    alert("舒张压填写错误");
                }
            }
        });
        // 文化程度 触发教育年限
        $("#eductionDegree").off("change").on("change",function () {
           var val =  $("#eductionDegree").val();
           switch (val){
               case '2':
                   $('#educationYear').val(6);
                   break;
               case '3':
                   $('#educationYear').val(9);
                   break;
               case '4':
                   $('#educationYear').val(12);
                   break;
               case '5':
                   $('#educationYear').val(12);
                   break;
               case '6':
                   $('#educationYear').val(16);
                   break;
               case '7':
                   $('#educationYear').val(16);
                   break;
           }

        });
    }

    return {
        init: init
    }
}();