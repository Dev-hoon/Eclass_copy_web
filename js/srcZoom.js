/*
 *  Program : /js/scrZoom.js
 *  description : 화면 글자 크기 조절 스크립트
 *        smba.go.kr 참고
 */
var defsize = 12;
function zoom_it(n) {
    defsize += n;
    var divs_body = document.getElementsByTagName("body");
    var divs_table = document.getElementsByTagName("table");
    var divs_tr = document.getElementsByTagName("tr");
    var divs_td = document.getElementsByTagName("td");
    var divs_div = document.getElementsByTagName("div");
    var divs_a = document.getElementsByTagName("a");
    var divs_span = document.getElementsByTagName("span");
    var divs_ui = document.getElementsByTagName("ui");
    var divs_li = document.getElementsByTagName("li");
    var divs_p = document.getElementsByTagName("p");

    var i=0;
    for(i=0,len=divs_body.length ; i<len ; i++) {
        divs_body[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_table.length ; i<len ; i++) {
        divs_table[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_td.length ; i<len ; i++) {
        divs_td[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_div.length ; i<len ; i++) {
        divs_div[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_a.length ; i<len ; i++) {
        divs_a[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_tr.length ; i<len ; i++) {
        divs_tr[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_span.length ; i<len ; i++) {
        divs_span[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_ui.length ; i<len ; i++) {
        divs_ui[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_li.length ; i<len ; i++) {
        divs_li[i].style.fontSize = defsize + "px";
    }
    for(i=0,len=divs_p.length ; i<len ; i++) {
        divs_p[i].style.fontSize = defsize + "px";
    }
}

function zoom_de() {
    defsize=12;
    var divs_body = document.getElementsByTagName("body");
    var divs_table = document.getElementsByTagName("table");
    var divs_td = document.getElementsByTagName("td");
    var divs_div = document.getElementsByTagName("div");
    var divs_a = document.getElementsByTagName("a");
    var divs_tr = document.getElementsByTagName("tr");
    var divs_span = document.getElementsByTagName("span");
    var divs_ui = document.getElementsByTagName("ui");
    var divs_li = document.getElementsByTagName("li");
    var divs_p = document.getElementsByTagName("p");

    var i=0;
    for(i=0,len=divs_body.length ; i<len ; i++) {
        divs_body[i].style.fontSize = "12px";
    }
    for(i=0,len=divs_table.length ; i<len ; i++) {
        divs_table[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_td.length ; i<len ; i++) {
        divs_td[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_div.length ; i<len ; i++) {
        divs_div[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_a.length ; i<len ; i++) {
        divs_a[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_tr.length ; i<len ; i++) {
        divs_tr[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_span.length ; i<len ; i++) {
        divs_span[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_ui.length ; i<len ; i++) {
        divs_ui[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_li.length ; i<len ; i++) {
        divs_li[i].style.fontSize = "11px";
    }
    for(i=0,len=divs_p.length ; i<len ; i++) {
        divs_p[i].style.fontSize = "12px";
    }
}

//화면 크기조절 스크립트
var _isCTRL=false;
var _BROSER;
var _FFZoomCnt;

var nowZoom = 100; // 현재비율
var maxZoom = 500; // 최대비율(500으로하면 5배 커진다)
var minZoom = 50; // 최소비율
var _nowFontSize = 10;
function zoomIn() {
    if (nowZoom < maxZoom){
        if(_BROSER == "IE"){
            nowZoom += 10; //25%씩 커진다.
            document.body.style.zoom = nowZoom + "%";
        }else{
            //_nowFontSize = _nowFontSize+2;
            //changeFontsize(_nowFontSize,'');
            if(!_isCTRL) {
                alert("컨트롤키를 누른상태에서 + 키를 누르시면 커집니다");
            }else{
                _FFZoomCnt++;
            }
        }


    }

}

function zoomInBtn(){
    var browser = navigator.appName;

    if(browser.indexOf('Microsoft') !=-1){
        _BROSER = "IE";
    }
    zoomIn();
}
//화면 줄인다.
function zoomOut() {
    if (nowZoom > minZoom){


        if(_BROSER == "IE"){
            nowZoom -= 10; //25%씩 작아진다.
            document.body.style.zoom = nowZoom + "%";
        }else{
            //_nowFontSize = _nowFontSize-2;
            //changeFontsize(_nowFontSize,'');
            if(!_isCTRL) {
                alert("컨트롤키를 누른상태에서 - 키를 누르시면 작아집니다");
            }else{
                _FFZoomCnt--;
            }
        }
    }

}

function zoomOutBtn(){
    var browser = navigator.appName;

    if(browser.indexOf('Microsoft') !=-1){
        _BROSER = "IE";
    }
    zoomOut();
}

//화면 원래대로
function zoomDefault() {
    if(_BROSER == "IE"){
        nowZoom = 100;
        document.body.style.zoom = nowZoom + "%";
    }
}