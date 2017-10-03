// ==UserScript==
// @name         bettereddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  we did it
// @author       skoorupa
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var showright = document.createElement("span");
    showright.innerHTML = " | show right panel";
    showright.setAttribute("onclick","document.getElementsByClassName('side')[0].style.display='inline'");
    document.getElementById("header-bottom-right").appendChild(showright);

    var hideright = document.createElement("span");
    hideright.innerHTML = " | hide right panel";
    hideright.setAttribute("onclick","document.getElementsByClassName('side')[0].style.display='none'");
    document.getElementById("header-bottom-right").appendChild(hideright);

    var style = document.createElement("style");
    style.innerHTML = ".link {width:60%;border: solid gray 2px;padding:20px;}.midcol {float:right;}.thumbnail {display:none;}.rank {display:none;}.side {display:none;}#siteTable {text-align:center;text-align:-webkit-center;.title{font-size:20px}";
    document.body.appendChild(style);
    
    for (var i=0; i<document.getElementsByClassName("expando-button").length; i++){
        document.getElementsByClassName("expando-button")[i].click();
    }
    window.scrollTo(0,0);
    
})();