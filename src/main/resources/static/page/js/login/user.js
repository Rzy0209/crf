var LoginInfo = function () {
    var isTimeout=false;
    var ctx='/ecrf';
    var noRes='NORES';
    //资源
    var _res_all_={
        "crf_index":{
            "icon":"fa fa-sitemap"
        },
        "crf_type_101":{
            "icon":"fa fa-windows"
        },
        "crf_type_102":{
            "icon":"fa fa-sitemap"
        },
        "crf_type_103":{
            "icon":"fa fa-tasks"
        },
        "crf_type_104":{
            "icon":"fa fa-ambulance"
        },
        "crf_list":{
            "icon":"fa fa-outdent"
        },
        "crf_first_register":{
            "icon":"fa fa-address-card-o"
        },
        "crf_follow_register":{
            "icon":"fa fa-id-card-o"
        },
        "crf_data_view":{
            "icon":"fa fa-bar-chart-o"
        },
        "crf_data_mng":{
            "icon":"fa fa-database"
        },
        "crf_templet":{
            "icon":"fa fa-outdent"
        },
        "crf_subject":{
            "icon":"fa fa-outdent"
        },
        "ums_sys":{
            "icon":"fa fa-gears"
        },
        "ums_sys_org":{
            "icon":"fa fa-hospital-o"
        },
        "ums_sys_dept":{
            "icon":"fa fa-laptop"
        },
        "ums_sys_user":{
            "icon":"fa fa-user-md"
        },
        "ums_sys_role":{
            "icon":"fa fa-align-left"
        }
    };
    /* SESSION-STORAGE键值定义 */
    var _ss_keys_={
        //菜单
        menu:'_MENU_',
        //权限
        auth:'_AUTH_',
    //    用户名:
        username:'_USER_NAME_',
    //    用户机构:
        userorg:'_USER_ORG_',
    //    菜单map
        menumap:'_MENU_MAP_',
    //    最后操作时间
        lastopt:'_LAST_OPT',
    //    首页
        firstpage:'_FIRST_PAGE_',
    //
        umsmap:'_UMS_MAP_',
        //表单分类对照
        subfieldtemp: '_SUBJECT_FIELD_TEMPLATE_',
        //表单内容
        subtemplate: '_SUBJECT_TEMPLATE_'
    };
    function load(fn) {
        //ajax请求菜单信息
        function ajax(url, fnSucc,fnFailed) {
            var oAjax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
            oAjax.open("GET", url, true);//把要读取的参数的传过来。
            oAjax.send();
            oAjax.onreadystatechange = function () {
                if (oAjax.readyState == 4) {
                    if (oAjax.status == 200) {
                        console.log(oAjax);
                        fnSucc(oAjax.responseText);//成功的时候调用这个方法
                    } else if (fnFailed) {
                        fnFailed(oAjax.status);
                    }
                }
            };
        }

        //菜单
        function menuStr(resList,umsMap) {
            if(null==resList||0==resList.length){
                return '';
            }
            var liArr = [];
            for (var i = 0; i < resList.length; i++) {
                var res = resList[i];
                var _icon= icon(res.moduleName);
                if(!_icon){
                    continue;
                }
                liArr.push('<li id="nav-' + res.moduleName + '" aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">');
                var _page_url=umsPage(res.moduleName,res.resourceUrl,umsMap);
                if(!_page_url){
                    liArr.push(' <a>');
                }else {
                    liArr.push(' <a href="' + _page_url + '">');
                }
                liArr.push('<i class="' + _icon+ '"></i>&nbsp;' + res.resourceName);
                liArr.push('<span class="arrow"></span></a>');
                var resChild = res.resChild;
                if (null != resChild && resChild.length > 0) {
                    liArr.push('<ul class="dropdown-menu pull-left" style="top:91% !important;">');
                    liArr.push(subMenuStr(resChild,umsMap));
                    liArr.push('</ul>');
                }
                liArr.push('</li>')
            }
            return liArr.join('');
        }

        //二级菜单
        function subMenuStr(resList,umsMap) {
            var liArr = [];
            for (var i = 0; i < resList.length; i++) {
                var res = resList[i];
                var _icon= icon(res.moduleName);
                if(!_icon){
                    continue;
                }
                liArr.push('<li id="nav-' + res.moduleName + '" class="">');
                var _page_url=umsPage(res.moduleName,res.resourceUrl,umsMap);
                if(!_page_url){
                    liArr.push(' <a>');
                }else {
                    liArr.push(' <a href="' + _page_url + '">');
                }
                liArr.push('<i class="' + _icon + '"></i>&nbsp;' + res.resourceName);
                liArr.push('<span class="arrow"></span></a></li>');
            }
            return liArr.join('');
        }

        //菜单键值
        function menuKeyMap(resList, pkey, map) {
            if(null==resList||0==resList.length){
                return;
            }
            for (var i = 0; i < resList.length; i++) {
                var res = resList[i];
                var module = res.moduleName;
                //如果不存在资源配置，则不设置相关菜单
                if(!icon(module)){
                    continue;
                }
                var arr = pkey.slice();
                arr.push(module);
                map[module] = arr;
                var resChild = res.resChild;

                if (null != resChild && resChild.length > 0) {
                    menuKeyMap(resChild, arr, map);
                }
            }
        }
        //ums页面处理
        function umsPage(moudule,url,umsMap) {
            if(url.indexOf('/ums/')>0){
                umsMap[moudule]=url;
                return ctx+'/s/ums?'+moudule;
            }else {
                return url;
            }
        }
        /**
         * 菜单图标设置
         * @param moduleName
         * @returns {string}
         */
        function icon(moduleName) {
            if(!!_res_all_[moduleName]){
                return _res_all_[moduleName].icon;
            }
            return null;
        }
        function getFirstPage(resList) {
            if(null==resList||0==resList.length){
                return null;
            }
            for (var i = 0; i < resList.length; i++) {
                var res = resList[i];
                var children = res.resChild;
                if (null != children && children.length > 0) {
                    return getFirstPage(children);
                }
                return res.resourceUrl;
            }
            return null;
        }

        var menuUrl = ctx+'/api/user/info';
        ajax(menuUrl, function (respText) {
            try{
                var userInfo = JSON.parse(respText).data;
                var umsMap={};
                var menuHtml = menuStr(userInfo.menus,umsMap);
                var userName = userInfo.name;
                var userOrg = userInfo.orgName;
                var map = {};
                menuKeyMap(userInfo.menus, [], map);
                var mapStr = JSON.stringify(map);
                var firstPage = getFirstPage(userInfo.menus)||noRes;
                sessionStorage.setItem(_ss_keys_.menu, menuHtml);
                sessionStorage.setItem(_ss_keys_.auth,userInfo.auths.join(','));
                sessionStorage.setItem(_ss_keys_.username, userName);
                sessionStorage.setItem(_ss_keys_.userorg, userOrg);
                sessionStorage.setItem(_ss_keys_.menumap, mapStr);
                sessionStorage.setItem(_ss_keys_.firstpage, firstPage);
                sessionStorage.setItem(_ss_keys_.umsmap, JSON.stringify(umsMap));
                sessionStorage.setItem(_ss_keys_.lastopt,new Date().getTime());
                ajax(ctx + '/api/subjectresfield/temp/1', function (respText) {
                    try{
                        var subFiledTempJSON = JSON.parse(respText).data;
                        sessionStorage.setItem(_ss_keys_.subtemplate, JSON.stringify(subFiledTempJSON.subTempMap));
                        sessionStorage.setItem(_ss_keys_.subfieldtemp, JSON.stringify(subFiledTempJSON.rftMap));
                        if (fn) {
                            fn();
                        }
                    }catch (e) {
                        console.error(e);
                    }
                })
            }catch (e) {
                console.error(e);
            }
        })


    }

    //设置激活
    function active() {
        var mapStr = sessionStorage.getItem(_ss_keys_.menumap);
        var moduleDom = document.getElementById("res-module").value;
        if (null != mapStr && null != moduleDom) {
            var map = JSON.parse(mapStr);
            if (!!map[moduleDom]) {
                var keys = map[moduleDom];
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    document.getElementById('nav-' + key).className += ' active';
                }
            }else {
                alert('非法页面，点击跳转登录...');
                //跳转登录页
                window.location.href = ctx+'/login';
            }
        }
    }

    //替换菜单
    function menu() {
        timeout();
        addListeners();
        var menuHtml = sessionStorage.getItem(_ss_keys_.menu);
        var userName = sessionStorage.getItem(_ss_keys_.username);
        document.getElementById('menu-replace').outerHTML = menuHtml;
        document.getElementById('login-username').innerText = userName;
    }
    //获取权限
    function auth() {
        return sessionStorage.getItem(_ss_keys_.auth).split(',');
    }
    //超时
    function timeout() {
        // 判断是否进入其他超时方法
        if(isTimeout){
            return;
        }
        isTimeout=true;
        //最近操作时间
        var lastopt=parseInt(sessionStorage.getItem(_ss_keys_.lastopt));
        if(isNaN(lastopt)){
            lastopt=0;
        }
        var now=new Date().getTime();
        var cost=now - lastopt;
        // console.log(lastopt,now,now-parseInt(lastopt));
        //超时时间：120分钟，最小记录时间 60秒(避免重复操作)
        var max=7200000,min=60000;
        if(cost>max){
            //清空session storage
            sessionStorage.clear();
            alert("长时间未操作，请重新登录！");
            //跳转登录
            window.location.href=ctx+"/login";
        }else if(cost>min){
            //更新最后操作时间
            sessionStorage.setItem(_ss_keys_.lastopt,now);
        }
        isTimeout=false;
    }
    //添加监听
    function addEventListener(ele,event,fn){
        if(ele.addEventListener){
            ele.addEventListener(event,fn,false);
        }else{
            ele.attachEvent('on'+event,fn.bind(ele));
        }
    }
    //添加监听事件
    function addListeners() {
        addEventListener(document,'click',LoginInfo.timout);
        addEventListener(document,'keyup',LoginInfo.timout);
    }

    //首页
    function firstPage() {
        var firstPage = sessionStorage.getItem(_ss_keys_.firstpage);
        if (!firstPage) {
            //跳转登录页
            window.location.href = ctx+'/login';
        }else if(noRes==firstPage){
            alert('用户没有任何菜单权限，请点击重新登录！');
            //跳转登录页
            window.location.href = ctx+'/login';
        } else {
            window.location.href = firstPage;
        }
    }

    function user() {
        var user = {};
        user.name = sessionStorage.getItem(_ss_keys_.username);
        user.org = sessionStorage.getItem(_ss_keys_.userorg);

        return user;
    }

    //获取报告表单分类对应关系及表单详细内容
    function subFiledTemp() {
        var subFiledTemp = {};
        // if (!!sessionStorage.getItem(_ss_keys_.subfieldtemp) && !!sessionStorage.getItem(_ss_keys_.rftMap)) {
            subFiledTemp.templates = sessionStorage.getItem(_ss_keys_.subtemplate);
            subFiledTemp.fieldTemp = sessionStorage.getItem(_ss_keys_.subfieldtemp);
            return subFiledTemp;
        // } else {
        //     $.ajax({
        //         url: ctx + '/api/subjectresfield/temp/1',
        //         type: 'get',
        //         dataType: 'text',
        //         success: function(res){
        //             var subFiledTempJSON = JSON.parse(res);
        //             subFiledTemp.templates = subFiledTempJSON.subTempMap;
        //             subFiledTemp.fieldTemp = subFiledTempJSON.rftMap;
        //             sessionStorage.setItem(_ss_keys_.subtemplate, subFiledTemp.templates);
        //             sessionStorage.setItem(_ss_keys_.subfieldtemp, subFiledTemp.fieldTemp);
        //             return subFiledTemp;
        //         }
        //     })
        // }
    }

    return {
        load: load,
        active: active,
        menu: menu,
        auth:auth,
        firstPage: firstPage,
        timout:timeout,
        user:user,
        subFiledTemp:subFiledTemp
    }
}();