// ==UserScript==
// @name         I'm tired2
// @namespace    https://github.com/yqw1212
// @version      0.1
// @description  I'm tired.
// @author       missyourmelody
// @match        *://e-report.neu.edu.cn/report/forms/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function () {
        $(document).bind("dblclick", function () {
            $("[value='0']").click();
            //setTimeout(function(){
            //    $("[type='radio'],[value='0']").click();
            //},600);
            $("button:contains('上 报')").click();
            //alert("已执行");
        })
    })
    // Your code here...
})();
