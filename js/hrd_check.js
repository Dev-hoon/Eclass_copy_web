/*************************************************************************
 *
 * EntryDate : 2002.07.24
 * UpdatDate : 2002.07.24
 * Author    : unicornx@entland.co.kr
 *
 *************************************************************************/

/************************************************************************************
 * 모든 입력 값에 대한 검증을 함
 관련 이벤트 :
 ************************************************************************************/
function checkData(oForm){

    var blnMore = true;
    var i=0;
    var checkType = 0;
    var intMaxLen = oForm.elements.length;
    var formElements = oForm.elements;


    while(blnMore && i < intMaxLen){
        var element = formElements[i];
        var chkType = element.getAttribute("chkType");

        if("NT" == chkType || "NN" == chkType || "CT" == chkType
            || "CN" == chkType){

            // 숫자 검증이라면
            if('N' == chkType.charAt(0)){

                if(isNaN(oForm.elements[i].value)){
                    alert("[" + oForm.elements[i].title + "]을(를) 숫자로 입력하세요.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */

                // 필수입력인지 검증
                if(blnMore && 'T' ==  chkType.charAt(1) && "" == trim(oForm.elements[i].value)){
                    alert("[" + oForm.elements[i].title +"]은(는) 필수입력 항목입니다.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */

                // 문자 검증이라면
            } else if('C' ==  chkType.charAt(0)){
                // 한글 문자열을 계산하여 MaxLength보다 크면 error message 출력
                var nCurLength = getLength(oForm.elements[i].value);
                var nMaxLength = oForm.elements[i].maxLength;
                if( nMaxLength < nCurLength){
                    alert("[" + oForm.elements[i].title +"]이(가) 자릿수를 초과 했습니다.\n\n "+(nCurLength-nMaxLength)+"바이트 초과. [한글 "+(nMaxLength/2)+"글자, 영문 "+nMaxLength+"글자] 입력 가능\n\n다시 확인하고 입력하세요.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */

                // 필수입력인지 검증
                if(blnMore && 'T' ==  chkType.charAt(1) && "" == trim(oForm.elements[i].value)){
                    alert("[" + oForm.elements[i].title +"]은(는) 필수입력 항목입니다.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */

            } /* end of if condition */

        } else if("file" == oForm.elements[i].type){
            if("" != oForm.elements[i].value){
                // 스페이스만 포함되면 에러 출력
                if("" != oForm.elements[i].value && "" == trim(oForm.elements[i].value)){
                    alert("파일 이름에 공백(space) 문자만 입력하면 안 됩니다.");
                    oForm.elements[i].focus();
                    blnMore = false;

                } else if(!checkFileName(oForm.elements[i])){
                    oForm.elements[i].focus();
                    blnMore = false;

                } /* end of if condition */
            } /* end of if condition */

        } /* end of if condition */

        i++;
    } /* end of while loop */

    return blnMore;

} /* end of checkData() function */

// 에디터의 널 여부와 자리수를  체크한다.
function checkFCKeditor(oEditor, sTitle, isCheck, nMaxLength){
    var blnMore = true;

    var div = document.createElement("DIV");
    div.innerHTML = oEditor.GetXHTML();

    if("T" == isCheck) {
        if( isNull( div.innerHTML ) ) {
            alert("[" + sTitle + "]" + "을(를) 입력하세요.");
            oEditor.Focus();
            return false;
        }
    }

    if(0 == nMaxLength){
        return true;
    }

    var nCurLength = getLength(div.innerHTML);
    var nMaxLength = nMaxLength;

    if( nMaxLength < nCurLength){
        alert("[" + sTitle +"]이(가) 자릿수를 초과 했습니다.\n\n "+(nCurLength-nMaxLength)+"바이트 초과. [한글 "+(nMaxLength/2)+"글자, 영문 "+nMaxLength+"글자] 입력 가능\n\n다시 확인하고 입력하세요.");
        oEditor.Focus();
        blnMore = false;
    } /* end of if condition */

    return blnMore;
}


function checkFileName(oObj){
    var sFileNm = oObj.value;
    if( -1 != sFileNm.indexOf('/')
        || -1 != sFileNm.indexOf('*')
        || -1 != sFileNm.indexOf('?')
        || -1 != sFileNm.indexOf('\"')
        || -1 != sFileNm.indexOf('<')
        || -1 != sFileNm.indexOf('>')
        || -1 != sFileNm.indexOf('|')) {
        alert("파일 이름에 다음 문자가 올 수 없습니다.\n" + "\\ / : * ? \" < > |");
        return false;
    }


    if(!(".jpg" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".gif" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".txt" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".doc" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".hwp" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".pdf" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".zip" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".xls" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".ppt" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".JPG" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".GIF" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".TXT" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".DOC" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".HWP" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".PDF" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".ZIP" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".XLS" == sFileNm.substring(sFileNm.length-4, sFileNm.length)
            || ".PPT" == sFileNm.substring(sFileNm.length-4, sFileNm.length)

        )) {
        alert('업로드 가능한 파일 확장자는 jpg, gif, doc, hwp, pdf, zip, xls, txt, ppt만 가능합니다.');
        return false;
    }

    return true;
} /* end of checkFileName() function */

// 업로드시 이미지는 두가지 형식만 지원함(jpg, gif)
function checkImgFileName(oObj){
    if(!checkFileName(oObj)) {
        return false;
    }

    var strFileName = oObj.value;

    //strFileName.substring();

    return true;
} /* end of checkImgFileName() function */


// 업로드시 문서형식은 (doc, ppt, hwp, txt, xls, pdf, zip)
function checkDocFileName(oObj){
    if(!checkFileName(oObj)) {
        return false;
    }

    var strFileName = oObj.value;

    //strFileName.substring();

    return true;
} /* end of checkDocFileName() function */


/************************************************************************************
 * 모든 조회입력 값에 대한 검증을 함
 관련 이벤트 :
 ************************************************************************************/
function searchCheckData(oForm){

    var blnMore = true;
    var i=0;
    var checkType = 0;
    var nInputCnt = 0;
    var intMaxLen = oForm.elements.length;

    while(blnMore && i < intMaxLen){

        if("NT" == oForm.elements[i].chkType || "NN" == oForm.elements[i].chkType || "CT" == oForm.elements[i].chkType || "CN" == oForm.elements[i].chkType){

            // 숫자 검증이라면
            if('N' == oForm.elements[i].chkType.charAt(0)){

                if(isNaN(oForm.elements[i].value)){
                    alert("[" + oForm.elements[i].title + "]을(를) 숫자로 입력하세요.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */

                // 문자 검증이라면
            } else if('C' == oForm.elements[i].chkType.charAt(0)){
                // 한글 문자열을 계산하여 MaxLength보다 크면 error message 출력
                if(oForm.elements[i].maxLength < getLength(oForm.elements[i].value)){
                    alert("[" + oForm.elements[i].title +"]이(가) 자릿수를 초과 했습니다.\n\n 다시 확인하고 입력하세요.");
                    oForm.elements[i].focus();
                    blnMore = false;
                } /* end of if condition */


            } /* end of if condition */

            // 모두 입력하지 않았다면
            if("" != oForm.elements[i].value){
                nInputCnt++;
            }

        } /* end of if condition */

        i++;
    } /* end of while loop */

    if(0 == nInputCnt){
        blnMore = false;
    }

    return blnMore;

} /* end of checkData() function */


/***********************************************************************
 string length 를 리턴..
 한 : 2, etc : 1
 ************************************************************************/
function getLength(str)
{
    var len = str.length;
    for (i = 0; i < str.length; i++)
        if (str.charCodeAt(i) > 127)
            len++;
    return len;
}

/************************************************************************
 Text에 최대 입력가능한 글자수를 지정한다.

 기존 Tag에 maxLength라는 프로퍼티가 있으나 한글 한문자의 길이를 1로 인식함으로써
 데이터베이스(한글 한자를 2바이트로 인식)와 서로 상이함으로 인해 오류를 일으킬 소지가
 있다.

 관련 이벤트 : onKeyDown
 관련함수 : getLength(str)

 사용법 :
 <input type="text" onkeyDown="maxLen(4)"> <- 최대 4자리 입력가능

 ************************************************************************/
function maxLen(len)
{
    var r = getLength(window.document.selection.createRange().text);
    if ( (event.keyCode == 46) ||  // DEL
        (event.keyCode == 8)  ||  // backspace
        (event.keyCode == 9)  ||  // tab
        (event.keyCode == 35) ||  // HOME key
        (event.keyCode == 36) ||  // END key
        (event.keyCode == 37) ||  // ← key
        (event.keyCode == 38) ||  // ↑ key
        (event.keyCode == 39) ||  // → key
        (event.keyCode == 40) ||  // ↓ key
        ( (event.keyCode != 229) && (r > 0) )
    )
        event.returnValue=true;
    else if ( getLength(event.srcElement.value) >= len )
        event.returnValue=false;
}

/*************************************************************************
 *
 * EntryDate : 2002.05.02
 * UpdatDate : 2002.05.02
 * Author    : unicornx2@intra21.co.kr
 *
 *************************************************************************/

/************************************************************************************
 입력필드에 숫자와 소숫점을 입력받도록 하는 함수
 관련 이벤트 :  onKeyPress="isXPointNumber(this.value)"
 ************************************************************************************/
function isXPointNumber(strValue){

    // 숫자가 입력되었다면 true
    if ((event.keyCode>=48)&&(event.keyCode<=57)) return;

    // 소숫점이 입력되었다면
    if(46==event.keyCode){
        // 이전값에 소숫점이 없으면 true
        if(0 > strValue.indexOf('.')){
            return;
        } else {
            event.returnValue=false;
            return;
        } /* end of if condition */
    } /* end of if condition */

    event.returnValue=false;
    return;

} /* end of isPointNumber() function */



/************************************************************************************
 입력필드에 숫자을 입력받도록 하는 함수
 관련 이벤트 :  onKeyPress="isXNumber()"
 ************************************************************************************/
function isXNumber(){

    // 숫자가 입력되었다면 true
    if ((event.keyCode>=48)&&(event.keyCode<=57)) return;

    event.returnValue=false;

    return;

} /* end of isPointNumber() function */

//----------------------------------------------------------------------------------
// This Function submit form data to server
// Param
//  form   : 폼이름
//  target : 서버에서 오는 html페이지가 떨어질 폼 위치
//  action : 서버측에 호출될 프로그램
// Usage
//  var form = "parent.ibf.form21";
//  var target = "ibf";
//  var action = "/servlet/cc.login.LoginServlet";
//  submit(form, target, action);
//---------------------------------------------------------------------------------
function submit(form, target, action) {
    eval(form).method = "post";
    eval(form).action = action;
    eval(form).target = target;
    eval(form).submit();
}


/**************************************************************************
 문자의 앞과 뒤에 있는 모든 공백을 없앤다.
 **************************************************************************/
function xtrim(s) {
    var len = s.length;
    var st = 0;

    while ((st < len) && (s.charAt(st) <= ' ')) {
        st++;
    }
    while ((st < len) && (s.charAt(len - 1) <= ' ')) {
        len--;
    }
    return ((st > 0) || (len < s.length)) ? s.substring(st, len) : s;
}


/**************************************************************************
 * 영문자와 숫자만 입력되었는지 검사하는 function
 **************************************************************************/
function isNumnAlphabet(oObj){

    var s = oObj.value;
    var len = s.length;
    var i = 0;
    var sc;
    for(i=0; i< len; i++){
        sc = s.charCodeAt(i);

        if(!((48 <= sc && sc <= 57) || (65 <= sc && sc <= 90) || (97 <= sc && sc <= 122))){
            alert("알파벳과 숫자만 입력 가능합니다. \n\n 다시 확인하고 입력하세요.");
            oObj.focus();
            return false;
        }
    }

    return true;

}


/***********************************************************************************
 정해진 숫자만큼 문자(영숫자)를 입력하면 자동으로 다음 필드로 포커스 이동
 입력 항목
 - thisTab : 작업중인 필드 객체
 - nextTab: 다음 포커스 대상
 - thisTabSize: 작업중인 입력필드의 size 값
 관련 이벤트 : onKeyUp
 ***********************************************************************************/
function tabOrder(thisTab,nextTab, thisTabSize) {
    if((event.keyCode == 37) ||  // ← key
        (event.keyCode == 38) ||  // ↑ key
        (event.keyCode == 39) ||  // → key
        (event.keyCode == 40) ||  // ↓ key
        (event.keyCode == 35) ||  // HOME key
        (event.keyCode == 36) ||  // END key
        (event.keyCode == 13) ||  // Enter key
        (event.keyCode == 229) || // mouse double click
        (window.document.selection.createRange().text.length == thisTabSize)) {
        return;
    }
    if (thisTab.value.length == thisTabSize) {
        nextTab.select();
        nextTab.focus();
        return;
    }
}
/***************************************************************************
 Input type="Text"를 돈에 관련된 내용으로 사용
 돈에 '100,000'과 같이 ','을 추가 시켜준다.

 Event Handlers : onBlur
 관련 함수 : removeFormattedMoney(), isNumber(), util.js::reverse()
 사용 방법 : onBlur="formattedMoney(this)"
 ***************************************************************************/
function formattedMoney(v) {
    var format = "";
    var money = v.value;

    money = reverse(money);
    for(var i = money.length-1; i > -1; i--) {
        if((i+1)%3 == 0 && money.length-1 != i) format += ",";
        format += money.charAt(i);
    }
    v.value = format;
}
/*************************************************************************
 Input type="Text"를 돈에 관련된 내용으로 사용
 formattedMoney에서 사용된 ','을 제거 시켜준다.

 Event Handlers : onFocus
 관련타입 : text
 관련함수 : formattedMoney(), isNumber()
 예제방법 :  onFocus="removeFormattedMoney(this)"
 **************************************************************************/
function removeFormattedMoney(v) {
    var unformat = "";
    var money = v.value;
    var arr = money.split(",");
    for(var i = 0; i < arr.length; i++) {
        unformat += arr[i];
    }
    v.value = unformat;
    v.select();
}

/***********************************************************************************
 년, 월, 일 유효성 체크 (윤년 체크 포함)
 입력항목 :
 - optionFlg : YMD가 필수 항목이면 1 ,
 선택항목: 0 이며, 모두 입력 또는 모두 공백
 -  year :  년을 표시하는 input 객체  (ex. formname.year)
 -  month: 월을 표시하는 input 객체
 -  day :    일을 표시하는 input 객체
 관련 함수
 - isNumber () :  숫자만 입력 받도록하는 함수
 - tabOrder()  :    정해진 숫자만큼 입력하면 자동으로 포커스 이동
 ***********************************************************************************/
function checkYMD(optionFlg, year, month, day) {
    //----------------------------------------------------------
    // year, month, day 를 모두 입력했는지 조사
    // 년월일 이 필수 입력이 아니면 체크 불필요
    //----------------------------------------------------------
    if(optionFlg) {
        if(!year.value|| !month.value || !day.value) {
            alert("년월일은 필수 입력항목입니다");
            year.focus();
            return false;
        }
    }
    else {
        //옵션사항인데 YMD가 하나도 입력되지 않으면 체크 하지않음
        if(!year.value && !month.value && !day.value) {
            return true;
        }
        else {
            if(!year.value|| !month.value || !day.value) {
                alert("년월일이 모두 입력되거나 모두 생략되어야  합니다.");
                year.focus();
                return false;
            }
        }
    }

    //-----------------------------------------------------------------
    // 월, 일이 한자리면 앞에 0을 추가한다.
    //
    // 월, 일 : 1 - 9 = 01 - 09로 변환
    //-----------------------------------------------------------------
    if(month.value.length == 1) {
        month.value = "0" + month.value;
    }

    if(day.value.length == 1) {
        day.value = "0" + day.value;
    }

    //---------------------------------------------------------
    // year, month, day는 input 객체이다.
    //--------------------------------------------------------
    var total_days;            // 각 월별 총 일수  (30 | 31| 28| 29)
    var ckFlg=0;
    //--------------------------------------------------------------------
    // 숫자만 입력받도록 한다.  isNumber()를 사용하면
    //  생략해도 된다.
    //-------------------------------------------------------------------
    var data1 = year.value;
    var data2 = month.value;
    var data3 = day.value;
    for ( var j=1; j< 4; j++ ) {
        var data = eval( "data"+j );
        for ( var i=0; i < data.length; i++)  {
            var ch = data.substring(i,i+1);
            if (ch<"0" | ch>"9") {
                alert ( "\n일자를 바르게 입력하세요." );
                year.focus();
                year.select();
                return false;
            }
        }// end inner for
    } //end outter for


    //------------------------------------------------------------
    // 월 체크 ( 1 ~ 12)
    //-----------------------------------------------------------
    if( (1 > month.value) ||  (12 < month.value) ) {
        ckFlg=1;
    }
    if(ckFlg) {
        alert ( "\n월을 바르게 입력하세요."  );
        month.focus();
        month.select();
        return false;
    }

    //------------------------------------------------------------
    // 1. 각 달의 총 날수를 구한다.
    //----------------------------------------------------------
    if(month.value == 4||month.value == 6||month.value == 9||month.value == 11)  {
        total_days = 30;
    }
    else {
        total_days=31;
    }
    //--------------------------------------------------------
    // 1-1.윤년에 따른 2월 총 날수 구한다.
    //--------------------------------------------------------
    if(month.value ==2) {
        // 윤년조사
        if((year.value % 4 == 0) && (year.value % 100 != 0) || (year.value % 400 == 0)) {
            total_days = 29;
        }
        else{
            total_days = 28;
        }
    }

    //-------------------------------------------------------------------
    // 일자 체크 : 각년월별로 총 날수가 맞는지 조사
    //-------------------------------------------------------------------
    if( ( 1 > day.value ) || ( day.value > total_days ) ) {
        ckFlg=1;
    }
    if(ckFlg) {
        alert ( "\n일자를 바르게 입력하세요."  );
        day.focus();
        day.select();
        return false;
    }

    //-----------------------------------------------------------
    // MM/DD 형식으로 입력해야 하지만,
    //  M 또는 D 형식으로 입력한 경우 앞에 0 추가
    //-------------------------------------------------------------
    if ( data2.length < 2 ) {
        data2 = "0"+data2 ;
    }
    if ( data3.length < 2 ) {
        data3 = "0"+data3 ;
    }
    return true;
}

// is_mgr=y,n에 따라 관리자/관리자이름으로 전환
function toggleMgrNm(oChk, oVUsrNm, oUsrNm, sMgrNm, sUsrNm, sUsrId){
    if(oChk.checked){
        oUsrNm.value=sMgrNm;
        oVUsrNm.value = sMgrNm + "("+sUsrId+")";
    } else {
        oUsrNm.value=sUsrNm;
        oVUsrNm.value =sUsrNm + "("+sUsrId+")";
    }
}


/***************************************************************************
 Select의 Option값을 동적으로 하나씩 추가한다.
 파라메터   name(Select의 name)
 text(option의 text)
 value(option의 value)
 ***************************************************************************/
function addOption(name, text, value) {
    var index = eval(name + ".options.length");
    var select = eval(name);
    select.options[index]  = new Option(text, value);
}

/***************************************************************************
 Select의 Opton값을 동적으로 완전 삭제한다.
 파라메터 : name(Select의 name)
 ***************************************************************************/
function removeAllOptions(name) {
    var index = eval(name + ".options.length");
    var select = eval(name);

    for( var i = index-1; i >= 0; i-- ) {
        select.options[i] = null;
    }
}




/**
 * 정규표현식을 이용한 공백 체크
 */
function isNull( text )
{

    if( text == null ) return true;
    var result = text.replace(/(^\s*)|(\s*$)/g, "");
    if( result )
        return false;
    else
        return true;
}


/* 입력한 글자수 체크하기
ex : fc_chk_byte(this, 4000) 4000바이트 체크
*/
function fc_chk_byte(aro_name, ari_max) {
    var ls_str = aro_name.value;
    var li_str_len = ls_str.length;
    var li_max = ari_max;
    var i = 0;
    var li_byte = 0;
    var li_len = 0;
    var ls_one_char = "";
    var ls_str2 = "";

    for(i=0; i< li_str_len; i++) {
        ls_one_char = ls_str.charAt(i);
        if (escape(ls_one_char).length > 4){
            li_byte += 2;
        }
        else {
            li_byte++;
        }
        if(li_byte <= li_max){
            li_len = i + 1;
        }
    }
    if(li_byte > li_max){
        alert("입력할 수 있는 글의 수(영문·숫자:"+li_max+",한글:"+li_max/2+")가 초과되어\n입력할 수 없습니다. 초과된 내용은 자동으로 삭제 됩니다.");
        ls_str2 = ls_str.substr(0, li_len);
        aro_name.value = ls_str2;
    }

    aro_name.focus();
}

/**
 * textarea line 수 구하기
 * @param text
 * @return
 */
function getTextLine(text) {
    var temp = "";
    var enter = "0";
    var len = text.value.length;

    for(var i=0; i<len; i++) {
        temp = text.value.charAt(i);

        if(temp == '\n') { // 입력 라인 제한을 위해 엔터키 횟수 증가
            ++enter;
        }

    }

    return enter;
}


