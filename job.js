// ==UserScript==
// @name         I'm tired
// @namespace    https://github.com/yqw1212
// @version      0.1
// @description  I'm tired.
// @author       missyourmelody
// @match        *://e-report.neu.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function () {
        $(document).bind("dblclick", function () {
            $("span:contains('本人上报')").click();
            $("span:contains('正常')").click();
            setTimeout(function(){
                $("span:contains('无变化')").click();
            },250);
            setTimeout(function(){
                $("button:contains('上报')").click();
            },300);
            //alert("已执行");
        })
    })
    // Your code here...
})();
