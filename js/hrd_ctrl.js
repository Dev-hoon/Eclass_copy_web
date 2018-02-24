/*************************************************************************
 *
 * 이 JavaScript파일은 자바스크립트 이벤트와 관련해서 처리를
 * 보다 쉽게 하기 위한 유익한 함수들로 이루어져있다.
 *
 * 함수에 추가적인 사항이나 수정시에는 21C정보기술 솔루션 사업부에
 * 통보함으로써 수정 또는 추가적인 함수를 개발자들이  공유할 수 있도록
 * 재배포 할 것임을 명시한다.
 *
 * 각각의 프로그램에 대해 만든이에게 감사하며 어떠한 허락도 없이 묶은거에
 * 대해 너그러이 용서 하길 바란다.
 *
 * 수정일 : 2001-01-29
 * 모은이 : 조인상(isjo@email.intra21.co.kr)
 *
 *************************************************************************/

/*************************************************************************
 새로운 윈도우를 만들어 준다.

 파라메터 : 링크정보, 윈도우높이, 윈도우 높이
 *************************************************************************/
function flashWrite(url,w,h,vars,bg,win){

    var id=url.split("/")[url.split("/").length-1].split(".")[0]; //id´Â ÆÄÀÏ¸íÀ¸·Î ¼³Á¤
    if(vars==null) vars='';
    if(bg==null) bg='#FFFFFF';
    if(win==null) win='transparent';


    //
    var flashStr= "	<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'";
    flashStr+="			codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'";
    flashStr+="			width='"+w+"'";
    flashStr+="			height='"+h+"'";
    flashStr+="			id='"+id+"'";
    flashStr+="			align='middle'>";

    flashStr+="		<param name='allowScriptAccess' value='sameDomain' />";
    flashStr+="		<param name='movie' value='"+url+"' />";
    flashStr+="		<param name='FlashVars' value='"+vars+"' />";
    flashStr+="		<param name='wmode' value='"+win+"' />";
    flashStr+="		<param name='menu' value='false' />";
    flashStr+="		<param name='quality' value='high' />";
    flashStr+="		<param name='bgcolor' value='"+bg+"' />";


    flashStr+="		<embed src='"+url+"'";
    flashStr+="		       flashVars='"+vars+"'";
    flashStr+="		       wmode='"+win+"'";
    flashStr+="		       menu='false'";
    flashStr+="		       quality='high'";
    flashStr+="		       bgcolor='"+bg+"'";
    flashStr+="		       width='"+w+"'";
    flashStr+="		       height='"+h+"'";
    flashStr+="		       name='"+id+"'";
    flashStr+="		       align='middle'";
    flashStr+="		       allowScriptAccess='sameDomain'";
    flashStr+="		       type='application/x-shockwave-flash'";
    flashStr+="		       pluginspage='http://www.macromedia.com/go/getflashplayer' />";
    flashStr+=" </object>";


    document.write(flashStr);
}

function centerNewWin(url, winName, width, height) {
    var wi = screen.width - width;
    var hi = screen.height - height;

    if( wi < 0 ) wi = 0;
    if( hi < 0 ) hi = 0;

    var info = 'left=' + (wi/2) + ',top=' + (hi/2) + ',width='  + width + ',height=' + height + ',resizable=yes,scrollbars=no,menubars=no,status=yes';
    var newwin = window.open(url, winName, info);
    newwin.focus();
    return newwin;
}

function centerNewWin2(url, winName, width, height) {
    var wi = screen.width - width;
    var hi = screen.height - height;

    if( wi < 0 ) wi = 0;
    if( hi < 0 ) hi = 0;

    var info = 'left=' + (wi/2) + ',top=' + (hi/2) + ',width='  + width + ',height=' + height + ',resizable=no,scrollbars=yes,menubars=no,status=yes';
    var newwin = window.open(url, winName, info);
    newwin.focus();
    return newwin;
}

function centerNewWin3(url, winName, width, height) {
    var wi = screen.width - width;
    var hi = screen.height - height;

    if( wi < 0 ) wi = 0;
    if( hi < 0 ) hi = 0;

    var info = 'left=' + (wi/2) + ',top=' + (hi/2) + ',width='  + width + ',height=' + height + ',resizable=yes,scrollbars=yes,menubars=no,status=yes';
    var newwin = window.open(url, winName, info);
    newwin.focus();
    return newwin;
}

/*************************************************************************
 새로운 윈도우를 만들어 준다.

 파라메터 : 링크정보, 윈도우이름, 윈도우높이, 윈도우 높이
 *************************************************************************/
function rightNewWin(url,winName, width,height) {
    var wi = screen.width - width;
    var hi = 0;

    if( wi < 0 ) wi = 0;
    if( hi < 0 ) hi = 0;

    var info = 'left=' + wi + ',top=' + hi + ',width='  + width + ',height=' + height + ',resizable=yes,scrollbars=auto,menubars=no,status=no';
    var newwin = window.open(url, winName,info);
    newwin.focus();
    return newwin;
}

/*************************************************************************
 새로운 윈도우를 만들어 준다.

 파라메터 : 링크정보, 윈도우높이, 윈도우 높이
 *************************************************************************/
function leftNewWin(url, winName, width, height) {
    var wi = 0;
    var hi = 0;

    var info = 'left=' + wi + ',top=' + hi + ',width='  + width + ',height=' + height + ',resizable=yes,scrollbars=auto,menubars=no,status=yes';
    var newwin = window.open(url,winName,info);
    newwin.focus();
    return newwin;
}

function leftNewWin1(url, winName, width, height) {
    var wi = 0;
    var hi = 0;

    var info = 'left=' + wi + ',top=' + hi + ',width='  + width + ',height=' + height + ',resizable=yes,scrollbars=yes,menubars=yes,status=yes';
    var newwin = window.open(url,winName,info);
    newwin.focus();
    return newwin;
}

/************************************************************************************
 입력필드에 숫자만 입력받도록 하는 함수
 관련 이벤트 :  onKeyDown
 ************************************************************************************/
function isNumber(){

    if ( (event.keyCode == 46) ||  // DEL
        (event.keyCode == 8)  ||  // backspace
        (event.keyCode == 9)  ||  // tab
        (event.keyCode == 37) ||  // ← key
        (event.keyCode == 38) ||  // ↑ key
        (event.keyCode == 39) ||  // → key
        (event.keyCode == 40) ||  // ↓ key
        (event.keyCode == 35) ||  // HOME key
        (event.keyCode == 36) ||  // END key
        (event.keyCode == 13) ||  // Enter key

        ( (event.keyCode >= 48) && (event.keyCode <= 57 ) ) || // 0 ~ 9
        ( (event.keyCode >= 96) && (event.keyCode <= 105 ) )   // 0 ~ 9 in 숫자패드
    )
        event.returnValue=true;
    else
        event.returnValue=false;
}

/************************************************************************************
 입력필드에 숫자만 입력받도록 하는 함수
 관련 이벤트 :  onKeyDown
 ************************************************************************************/
function isNumber(e){

    if ( (getKeyCode(e) == 46) ||  // DEL
        (getKeyCode(e) == 8)  ||  // backspace
        (getKeyCode(e) == 9)  ||  // tab
        (getKeyCode(e) == 37) ||  // ← key
        (getKeyCode(e) == 38) ||  // ↑ key
        (getKeyCode(e) == 39) ||  // → key
        (getKeyCode(e) == 40) ||  // ↓ key
        (getKeyCode(e) == 35) ||  // HOME key
        (getKeyCode(e) == 36) ||  // END key
        (getKeyCode(e) == 13) ||  // Enter key

        ( (getKeyCode(e) >= 48) && (getKeyCode(e) <= 57 ) ) || // 0 ~ 9
        ( (getKeyCode(e) >= 96) && (getKeyCode(e) <= 105 ) )   // 0 ~ 9 in 숫자패드
    )
        return true;
    else
        return false;
}

/************************************************************************************
 입력필드에 숫자와 소수점만 입력받도록 하는 함수
 관련 이벤트 :  onKeyDown
 ************************************************************************************/
function isNumberOrPoint(e){
    if ( (getKeyCode(e) == 46) ||  // DEL
        (getKeyCode(e) == 8)  ||  // backspace
        (getKeyCode(e) == 9)  ||  // tab
        (getKeyCode(e) == 37) ||  // ← key
        (getKeyCode(e) == 38) ||  // ↑ key
        (getKeyCode(e) == 39) ||  // → key
        (getKeyCode(e) == 40) ||  // ↓ key
        (getKeyCode(e) == 35) ||  // HOME key
        (getKeyCode(e) == 36) ||  // END key
        (getKeyCode(e) == 13) ||  // Enter key

        ( getKeyCode(e) == 190) ||  // . key
        ( (getKeyCode(e) >= 48) && (getKeyCode(e) <= 57 ) ) || // 0 ~ 9
        ( (getKeyCode(e) >= 96) && (getKeyCode(e) <= 105 ) )   // 0 ~ 9 in 숫자패드
    )
        return true;
    else
        return false;
}

function MM_swapImgRestore() { //v3.0
    var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
            if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
        if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



function goDirectURL(sParam){
    self.location.href = "action.do?"+ sParam;
}

function ajaxDirectURL(formName, actionId){
    var frm = eval(formName);
    frm.action_id.value = actionId;
    frm.method = "post";
    frm.action = "action.do";

    ajaxAnywhere.formName = formName;
    ajaxAnywhere.submitAJAX();
}

function goTopDirectURL(sParam){
    top.location.href = "action.do?"+ sParam;
}

function goDownLoad(sFType, sKey, sFileNm, sKey2, sKey3){
    self.location.href = "/hrd/jsp/cmn/download/hrd_download.jsp?f_type=" + sFType + "&key=" + sKey + "&file_nm=" + sFileNm + "&key2=" + sKey2 + "&key3=" + sKey3;
}


/*********************
 eBook 링크
 function centerNewWin3(url, winName, width, height) {
**********************/
function ebook(){
    centerNewWin3('/hrd/jsp/cmn/ebook/ebook.jsp','eBook',850,650);
}




/****************************

 각 레이아웃에서 사용하는 함수.

 *****************************/
function goLogout(){
    top.location.href = "/servlet/Login?cmd=logout";
}

function showContents(formName, actionId, params){
    if(actionId == "") {
        alert("아클아이디 연결 안됨.");
        return;
    }

    if(loginForm.isEmpty.value == 'TRUE') {
        showMainContentsTop();
    }

    var frm = eval(formName);
    var contentsAjax = new AjaxAnywhere();
    contentsAjax.id = "contentsAjax";
    frm.action_id.value = actionId;
    frm.method = "post";
    frm.action = "action.do?"+params;
    contentsAjax.formName = formName;
    contentsAjax.submitAJAX();
}


function goDownLoad(sFType, sKey, sFileNm, sKey2, sKey3){
    self.location.href = "/hrd/jsp/cmn/download/hrd_download.jsp?f_type=" + sFType + "&key=" + sKey + "&file_nm=" + sFileNm + "&key2=" + sKey2 + "&key3=" + sKey3;
}

function doLogin(){
    if("" == loginForm.usr_id.value){
        alert('아이디를 입력하세요.');
        loginForm.usr_id.focus();
        return false;
    }
    if("" == loginForm.usr_pwd.value){
        alert('비밀번호를 입력하세요.');
        loginForm.usr_pwd.focus();
        return false;
    }

    loginForm.action_id.value = "/lo/login";
    loginForm.method = "post";
    loginForm.action = "action.do";

    ajaxAnywhere.formName = "loginForm";
    ajaxAnywhere.submitAJAX();
}

function doLogin2(){
    if("" == loginForm.usr_id.value){
        alert('아이디를 입력하세요.');
        loginForm.usr_id.focus();
        return false;
    }
    if("" == loginForm.usr_pwd.value){
        alert('비밀번호를 입력하세요.');
        loginForm.usr_pwd.focus();
        return false;
    }

    loginForm.action_id.value = "/lo/login2";
    loginForm.method = "post";
    loginForm.action = "action.do";

    ajaxAnywhere.formName = "loginForm";
    ajaxAnywhere.submitAJAX();
}

//로그인 세션이 끊어 졌거나 로그인 하지 않은경우
function reLogin(params) {

    if("" == contentsForm.usr_id.value){
        alert('아이디를 입력하세요.');
        contentsForm.usr_id.focus();
        return false;
    }
    if("" == contentsForm.usr_pwd.value){
        alert('비밀번호를 입력하세요.');
        contentsForm.usr_pwd.focus();
        return false;
    }

    contentsForm.usr_id.value;
    contentsForm.usr_pwd.value;
    contentsForm.params.value = params;
    contentsForm.action_id.value = "/lo/re_login";
    contentsForm.method = "post";
    contentsForm.action = "action.do";

    ajaxAnywhere.formName = "contentsForm";
    ajaxAnywhere.submitAJAX();
}

//로그인 전에 클릭했던 컨텐츠로 이동
function redirectContents(params){
    loginForm.method = "post";
    loginForm.action = "action.do?"+params;

    ajaxAnywhere.formName = "loginForm";
    ajaxAnywhere.submitAJAX();
}


function doLogout() {
    location.href = "action.do?action_id=/lo/logout";
}


function showLayout(menuId) {
    topForm.MENU_ID.value = menuId;
    topForm.action_id.value = "/cmm/layout/site_layout";
    topForm.method = "post";
    topForm.action = "action.do";
    topForm.submit();
}

/**
 1.menuId를 이용해 어떠한 상위 메뉴 아이디가 클릭되었는지 서버에 넘겨준다.
 서버에서 메뉴 아이디를 이용해 해당 화면의 레이아웃 정보를 이용하여 화면에 뿌려준다.
 2.화면 레이아웃에서 컨텐츠 메뉴가 클릭된 효과를 얻기 위해서 contentsActionId와 params값을 이용해 서버에 재요청을 한다.
 (/laycontents.js 참고)
 */
function showLayoutContents(menuId, contentsActionId, params) {
    topForm.MENU_ID.value = menuId;
    topForm.contentsActionId.value = contentsActionId;
    topForm.contentsParams.value = params;
    topForm.action_id.value = "/cmm/layout/site_layout";
    topForm.method = "post";
    topForm.action = "action.do";
    topForm.submit();
}

function showMainTop() {
    loginForm.action_id.value = "/cmm/login/main_top";
    loginForm.method = "post";
    loginForm.action = "action.do";

    var loginAjax = new AjaxAnywhere();
    loginAjax.id = "loginAjax";
    loginAjax.formName = "loginForm";
    loginAjax.submitAJAX();
}

function showMainContentsTop() {
    loginForm.action_id.value = "/cmm/login/main_contents_top";
    loginForm.method = "post";
    loginForm.action = "action.do";

    var loginAjax = new AjaxAnywhere();
    loginAjax.id = "loginAjax";
    loginAjax.formName = "loginForm";
    loginAjax.submitAJAX();
}

