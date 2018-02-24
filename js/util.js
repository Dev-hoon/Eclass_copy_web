/*************************************************************************
 *
 * 이 JavaScript파일은 서버로 가기전후에 에러체크등 해 주어야할 처리를
 * 보다 쉽게 하기 위한 유익한 함수들로 이루어져있다.
 *
 * 함수에 추가적인 사항이나 수정시에는 21C정보기술 솔루션 사업부에
 * 통보함으로써 수정 또는 추가적인 함수를 개발자들이  공유할 수 있도록
 * 재배포 할 것임을 명시한다.
 *
 * 수정일 : 2001-01-29
 * 모은이 : 조인상(isjo@email.intra21.co.kr)
 *
 *************************************************************************/


/***************************************************************************
 주민번호 체크
 입력항목:
 preNoRes : 주민번호앞 6자리 필드
 postNoRes:주민번호뒤7자리필드
 ***************************************************************************/
function checkNoRes(preNoRes, postNoRes){
    if (preNoRes.value.length != 6){
        alert("올바른 주민등록번호를 입력해주세요.");
        preNoRes.focus();
        return false;
    }
    else if (postNoRes.value.length != 7){
        alert("올바른 주민등록번호를 입력해주세요.");
        postNoRes.focus();
        return false;
    }
    else {
        var str_serial1 = preNoRes.value;
        var str_serial2 = postNoRes.value;

        var digit=0
        for (var i=0;i<str_serial1.length;i++){
            var str_dig=str_serial1.substring(i,i+1);
            if (str_dig<'0' || str_dig>'9'){
                digit=digit+1
            }
        }

        if ((str_serial1 == '') || ( digit != 0 )){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            preNoRes.focus();
            return false;
        }

        var digit1=0
        for (var i=0;i<str_serial2.length;i++){
            var str_dig1=str_serial2.substring(i,i+1);
            if (str_dig1<'0' || str_dig1>'9'){
                digit1=digit1+1
            }
        }

        if ((str_serial2 == '') || ( digit1 != 0 )){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            postNoRes.focus();
            return false;
        }

        if (str_serial1.substring(2,3) > 1){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            preNoRes.focus();
            return false;
        }

        if (str_serial1.substring(4,5) > 3){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            preNoRes.focus();
            return false;
        }

        if (str_serial2.substring(0,1) > 4 || str_serial2.substring(0,1) == 0){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            postNoRes.focus();
            return false;
        }

        var a1=str_serial1.substring(0,1)
        var a2=str_serial1.substring(1,2)
        var a3=str_serial1.substring(2,3)
        var a4=str_serial1.substring(3,4)
        var a5=str_serial1.substring(4,5)
        var a6=str_serial1.substring(5,6)

        var check_digit=a1*2+a2*3+a3*4+a4*5+a5*6+a6*7

        var b1=str_serial2.substring(0,1)
        var b2=str_serial2.substring(1,2)
        var b3=str_serial2.substring(2,3)
        var b4=str_serial2.substring(3,4)
        var b5=str_serial2.substring(4,5)
        var b6=str_serial2.substring(5,6)
        var b7=str_serial2.substring(6,7)

        var check_digit=check_digit+b1*8+b2*9+b3*2+b4*3+b5*4+b6*5

        check_digit = check_digit%11
        check_digit = 11 - check_digit
        check_digit = check_digit%10

        if (check_digit != b7){
            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            postNoRes.focus();
            return false;
        }
    }
    return true;
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





/**************************************************************************
 년월 체크 함수
 입력항목 :
 - year : 년을 입력할 폼의 input 객체
 - month :  월을 입력할 폼의 input 객체
 **************************************************************************/
function checkYM(optionFlg, year, month) {
    //----------------------------------------------------------
    // year, month, day 를 모두 입력했는지 조사
    //----------------------------------------------------------
    if(optionFlg) {
        if(!year.value|| !month.value) {
            alert("년월은 필수 입력항목입니다");
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
                alert("년월이 모두 입력되거나 모두 생략되어야  합니다.");
                year.focus();
                return false;
            }
        }
    }

    //-----------------------------------------------------------------
    // 월 한자리면 앞에 0을 추가한다.
    //
    // 월 : 1 - 9 = 01 - 09로 변환
    //-----------------------------------------------------------------
    if(month.value.length == 1) {
        month.value = "0" + month.value;
    }

    //---------------------------------------------------------
    // year, month input 객체이다.
    //--------------------------------------------------------
    var ckFlg=0;

    //--------------------------------------------------------------------
    // 숫자만 입력받도록 한다.  isNumber()를 사용하면
    //  생략해도 된다.
    //-------------------------------------------------------------------
    var  data1 = year.value;
    var data2 = month.value;
    for ( var j=1; j< 3; j++ ) {
        var data = eval( "data"+j );
        for ( var i=1; i < data.length; i++)  {
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
    //-----------------------------------------------------------
    // MM 형식으로 입력해야 하지만,
    //  M 형식으로 입력한 경우 앞에 0 추가
    //-------------------------------------------------------------
    if ( data2.length < 2 ) {
        data2 = "0"+data2 ;
    }
    return true;
}

/*********************************************************
 달의 마지막 일을 구한다.
 param : 년, 월
 return : 마지막 일
 ************************************************************/
function getMonthOfLastDay(year, month) {
    var totalDays;
    if(month == 4||month == 6||month == 9||month == 11)  {
        totalDays = 30;
    } else {
        totalDays = 31;
    }

    //--------------------------------------------------------
    // 윤년에 따른 2월 총 날수 구한다.
    //--------------------------------------------------------
    if(month == 2) {
        // 윤년조사
        if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            totalDays = 29;
        } else {
            totalDays = 28;
        }
    }

    return totalDays;
}

/********************************************************************
 다음 달을 구한다.
 param 날짜
 return 날짜
 *********************************************************************/
function getNextMonth(inDate) {
    var dayInx = inDate.length-2;
    var monthInx = dayInx-2;

    var day   = inDate.substring(dayInx, dayInx+2);
    var month = inDate.substring(monthInx, dayInx);
    var year  = inDate.substring(0, monthInx);

    if(month == 12) {
        year = new String(eval(year) + 1);
        month = "01";
    }
    else if(month < 9) {
        month = "0" + (eval(month) + 1);
    }
    else {
        month = new String(eval(month) + 1);
    }

    return year + month + day;
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

/***************************************************************************
 Select의 Option값을 동적으로 원하는 내용을 삭제한다.

 파라메터 : name(Select의 name)
 locate(지울내용의 인텍스)
 ***************************************************************************/
function removeOption(name, locate) {
    var index = eval(name + ".options.length");
    var select = eval(name);

    if( index <= locate ) {
        alert("JavaScrpt error : removeOption함수를 잘못사용하고 있습니다.");
        return;
    }

    for( var i = index-1; i > locate; i-- ) {
        select.options[i-1] = select.options[i];
    }

    select.options[index-1] = null;
}



/*************************************************************************
 location.search 부분의 키에 해당하는 값을 가져오는 프로그램

 파라메터 : parma -> location.search에 해당하는 값
 key   -> 찾고자하는 값의 키
 return   : key에 해당하는 값
 *************************************************************************/
function getParameter(param, key) {
    var index = param.indexOf(key);

    if( index == -1 ) return "";

    param = param.substring(index); // 파라메터가 있는 부분까지의 내용을 substring한다.

    var value;
    if( param.indexOf("&") == -1 ) {
        value = param.substring(key.length + 1);
    }
    else {
        value = param.substring(key.length + 1, param.indexOf("&"));
    }

    return value;
}

/**************************************************************************
 문자의 앞과 뒤에 있는 모든 공백을 없앤다.
 **************************************************************************/
function trim(s) {
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
 문자에 있는 모든 공백을 없앤다.
 **************************************************************************/
function trim2(s) {
    var st = "";

    for(var i = 0; i < s.length; i++) {
        if(s.charAt(i) <= ' ') continue;
        st += s.charAt(i);
    }

    return st;
}

/**************************************************************************
 String을 꺼꾸로 만들어 준다.
 **************************************************************************/
function reverse(s) {
    var rev = "";

    for(var i = s.length-1; i >= 0 ; i--) {
        rev += s.charAt(i);
    }

    return rev;
}

/*************************************************************************
 입력받은 문자에서 숫자만 가져오게한다.
 *************************************************************************/
function getRealNumber(format) {
    var number="";
    for(var i=0; i < format.length; i++) {
        if(format.charAt(i) >= '0' && format.charAt(i) <= '9') number += format.charAt(i);
    }
    return eval(number);
}

/*************************************************************************
 형식화된 내용의 심볼들을 없애고 원래의 내용만을 보여준다.

 ex)
 var str = "31,000";
 var res = removeFormat(str, ",");

 result : res -> 31000
 *************************************************************************/
function removeFormat(content, sep) {
    var real = "";
    var contents = content.split(sep);

    for(var i = 0; i < contents.length; i++) {
        real += contents[i];
    }

    return real;
}

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


/********************************************************************************************
 *
 *    작성일 : 2001-10-18
 *    작성자 : 최용준
 *
 *    입력한 날로 부터 일정기간 만큼의 전후 날짜를 구해온다.
 *
 *   사용예) 2001년 10월 18일 부터 5년   후의 날짜  : getDiffDate('20011018',5,0,0,1)
 *                                 3개월 후의 날짜  : getDiffDate('20011018',0,3,0,1)
 *                                 48일  후의 날짜  : getDiffDate('20011018',0,0,48,1)
 *
 *           2001년 10월 18일 부터 5년   전의 날짜  : getDiffDate('20011018',5,0,0,0)
 *                                 3개월 전의 날짜  : getDiffDate('20011018',0,3,0,0)
 *                                 48일  전의 날짜  : getDiffDate('20011018',0,0,48,0)
 *
 *           2001년 10월 18일 부터 5년 3개월 38 일 후의 날짜  : getDiffDate('20011018',5,3,38,1)
 *           2001년 10월 18일 부터 5년 3개월 38 일 전의 날짜  : getDiffDate('20011018',5,3,38,0)
 *
 *    paremeter : 1. strdate : 입력 날짜
 *                2. yy      : 년도
 *                3. mm      : 달
 *                4. dd      : 날짜
 *                5. ab      : 전후를 구분 ( 전(before) = 0, 후(after) = 1   )
 *
 **********************************************************************************************/

function getDiffDate(strdate, yy, mm, dd, ab)
{
    var year = strdate.substr(0,4);
    var month = strdate.substr(4,2);
    var day = strdate.substr(6,2);

    var Intyear,Intmonth,Intday ;

    if(ab == 0){

        Intyear = parseInt(year) - yy;
        Intmonth = parseInt(month) -1 - mm ;
        Intday = parseInt(day) - dd;

    }else if(ab == 1){

        Intyear = parseInt(year) + yy;
        Intmonth = parseInt(month) -1 + mm ;
        Intday = parseInt(day) + dd;
    }

    var d1 = new Date();

    d1.setYear(Intyear);
    d1.setMonth(Intmonth);
    d1.setDate(Intday);

    year = d1.getYear();
    month = d1.getMonth() + 1;
    day = d1.getDate();

    year = year.toString();

    if(month < 10){
        month = "0" + month.toString();
    }else{
        month = month.toString();
    }

    if(day < 10){
        day = "0" + day.toString();
    }else{
        day = day.toString();
    }

    s = year + month + day ;
    return(s);
}

//----------------------------------------------------------------------
// input box에 날짜 셋팅
// Param
//   today : "YYYYMMDD" 문자열8자리
//   yyBox : 년도 input box 명
//   mmBox : 년도 input box 명
//   ddBox : 년도 input box 명
// 사용법
//   setDate("20010101", formname.yyBox, formname.mmBox, formname.ddBox);
//----------------------------------------------------------------------
function setDate(today, yyBox, mmBox, ddBox){
    if(today.length == 8){
        yyBox.value = today.substring(0,4);
        mmBox.value = today.substring(4,6);
        ddBox.value = today.substring(6);
    }
}

//----------------------------------------------------------------------
// input box에 날짜 셋팅
// Param
//   today : "YYYYMM" 문자열8자리
//   yyBox : 년도 input box 명
//   mmBox : 년도 input box 명
// 사용법
//   setDate("20010101", formname.yyBox, formname.mmBox);
//----------------------------------------------------------------------
function setDate2(today, yyBox, mmBox){
    if(today.length >= 6){
        yyBox.value = today.substring(0,4);
        mmBox.value = today.substring(4,6);
    }
}

//----------------------------------------------------------------------
// input box에 날짜 셋팅
// Param
//   today : "YYYYMM" 문자열8자리
//   yyBox : 년도 input box 명
// 사용법
//   setDate("20010101", formname.yyBox);
//----------------------------------------------------------------------
function setDate3(today, yyBox){
    if(today.length >= 4){
        yyBox.value = today.substring(0,4);
    }
}


//-----------------------------------------------------------------------
// input box에 주민번호 셋팅
// Param
//   resNo  : 주민번호 13자리
//   resNo1 : 주민번호 앞자리 input box 명
//   resNo2 : 주민번호 뒷자리 input box 명
//-----------------------------------------------------------------------
function setResNo(resNo, resNo1, resNo2) {
    if(resNo.length == 13) {
        resNo1.value = resNo.substring(0, 6);
        resNo2.value = resNo.substring(6);
    }
}

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

//-------------------------------------------------------------------------------
// 레디오 버튼이 체크된 곳의 값을 가져온다.
// Param
//   name : 레이오 버튼 이름
//
// return
//   value
//
// 주의사항 : 레디오 버튼이 하나일때 절대 사용해서는 않된다.
//-------------------------------------------------------------------------------
function radioValue(name) {
    var value;
    for(var i = 0; i < name.length; i++) {
        if(name[i].checked) {
            value = name[i].value;
            break;
        }
    }

    if(value == null) value = "";
    return value;
}

//-------------------------------------------------------------------------------
// 체크할 값의 레디오를 체크한다.
// Param
//   name : 레이오 버튼 이름 object
//   value : 체크할 값 string
//
//
// 주의사항 : 레디오 버튼이 하나일때 절대 사용해서는 않된다.
//-------------------------------------------------------------------------------
function radioCheck(name, value) {

    for(var i = 0; i < name.length; i++) {
        if(name[i].value == value) {
            name[i].checked;
            break;
        }
    }
}

//-----------------------------------------------------------------------------
// Select value를 이용해 selected되게 해준다.
//
// param
//   name : select 이름
//
// return
//  value
//----------------------------------------------------------------------------
function selected(name,value) {
    for(i = 0; i < name.options.length; i++) {
        if(name.options[i].value == value) {
            name.selectedIndex = i;
            break;
        }
    }
}

/*
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 *
 * @param date  날짜
 */
function toTimeString(date) {

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();


    if(("" + month).length == 1) { month = "0" + month; }
    if(("" + day).length   == 1) { day   = "0" + day;   }



    return ("" + year + month + day);
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 구한다.
 *
 * @param time  Time 객체
 * @param y   y년 차이
 * @param m   m월 차이
 * @param d   d일 차이
 * @param h   h시 차이
 * @return
 */
function shiftTime(time, y, m, d) {

    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); // y년을 더함
    date.setMonth(date.getMonth() + m); // m월을 더함
    date.setDate(date.getDate() + d); // d일을 더함


    return toTimeString(date);

}

/*
 * Time 스트링을 자바스크립트 Date 객체로 변환
 *
 * @param time  Time 형식의 String
 */
function toTimeObject(time) {

    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    return new Date(year,month,day);

}

/*
 * curDay로부터 지정한 만큼(befDay)의 이전일을 구한다.
 *
 * @param curDay  기준일
 * @param befDay  비교일
 * @return
 */
function getDay(curDay, val)
{
    return shiftTime(curDay, 0, 0, val);
}

/*
 * curMonth로부터 지정한 만큼(befMonth)의 이전월을 구한다.
 *
 * @param curMonth  기준월
 * @param befMonth  비교월
 * @return
 */
function getMonth(curMonth, val)
{
    return shiftTime(curMonth, 0, val, 0);
}

/*
 * curYear로부터 지정한 만큼(befYear)의 이전연도를 구한다.
 *
 * @param curYear 기준년도
 * @param befYear 비교년도
 * @return
 */
function getYear(curYear, val)
{
    return shiftTime(curYear, val, 0, 0);
}

/*------------------------------------------------------------------------------
  addDate(obj)
  Spec     : 조건에 해당하는 년, 월, 일을 더한다.
  Argument : stType(Year, Month, Day), stValue(더하고자 할 값)
  Return   :
  Example  : addDate('Month', 10)
------------------------------------------------------------------------------*/
function jsAddDate(stDate, stType, stValue) {

    var year  = stDate.substr(0,4);
    var month = stDate.substr(4,2) - 1; // 1월=0,12월=11
    var day   = stDate.substr(6,2);


    var date = "";
    if (stType == 'Year') {
        date = getYear(stDate, stValue);
    } else if (stType == 'Month') {
        date = getMonth(stDate, stValue);
    } else {
        date = getDay(stDate, stValue);
    }

    year  = date.substr(0,4);
    month = date.substr(4,2); // 1월=0,12월=11이므로 1 더함
    day   = date.substr(6,2);


    return  (""+year + month + day);

}

/*-----------------------------------------
 checkDay(year, month);
 Spec   : 조건에 해당하는 년, 월에 대한 일을 체크한다.

--------------------------------------------*/
function checkDay(year, month, day) {

    var m = month+1;
    var lastDay = getMonthOfLastDay(year, m);
    for(var i = 1; i < lastDay+1; i++) {
        if(i == day) {
            return i;
        }
    }

    return lastDay;
}

/*------------------------------------------------------------------------------
  addDate(obj)
  Spec     : 조건에 해당하는 년, 월, 일을 더한다.
  Argument : stType(Year, Month, Day), stValue(더하고자 할 값)
  Return   :
  Example  : addDate('Month', 10)
------------------------------------------------------------------------------*/
function jsAddDate2(stDate, stType, stValue) {

    var year  = stDate.substr(0,4);
    var month = stDate.substr(4,2) - 1; // 1월=0,12월=11
    var day   = stDate.substr(6,2);
    var toDay = day;     //오늘일수


    var y = 0;
    var m = 0;
    var d = 0;
    var nowDate = new Date(year,month,day);
    var date = new Date();

    if (stType == 'Year') {
        y =  nowDate.getFullYear() + eval(stValue);
        date.setFullYear(y); // y년을 더함
    } else if (stType == 'Month') {
        m = nowDate.getMonth()+eval(stValue);

        date.setMonth(m); // m월을 더함

        day = checkDay(date.getFullYear(), date.getMonth(), day);
        date.setDate(day);
    } else {

        d = nowDate.getDate() + eval(stValue);
        date.setDate(nowDate.getDate() + d); // d일을 더함
    }

    year  = date.getFullYear();
    month = toDay > day ? date.getMonth() : date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    day   = date.getDate();


    if(("" + month).length == 1) { month = "0" + month; }
    if(("" + day).length   == 1) { day   = "0" + day;   }


    return  (""+year + month + day);

}




//--------------------------
// 날짜 형식을 만들어 준다 .
// 20060101 -> 2006/01/01
//
//--------------------------
function fmDate(d) {
    var t = unFormat(d);
    if(d.length == 8 ) {
        t = d.substring(0,4) + "-" + d.substring(4,6) + "-" + d.substring(6);
    }
    return t;
}

//--------------------------
//날짜 형식을 만들어 준다 .
//20060101 -> 2006.01.01
//
//--------------------------
function fmDate2(d) {
    var t = unFormat(d);
    if(d.length == 8 ) {
        t = d.substring(0,4) + "." + d.substring(4,6) + "." + d.substring(6);
    }
    return t;
}


//---------------------------
// -,/:를 제거해주는 함수
// 2006,003,000 -> 2006003000
// 2006/01/01 -> 20060101
// 2006-01-01 -> 20060101
// 12:23:00  -> 122300
//---------------------------
function unFormat(obj) {
    var f = "-,/:.";
    var u ="";
    if(obj == undefined) return "";
    for(var i = 0; i < obj.length; i++) {
        if(f.indexOf(obj.charAt(i)) < 0) {
            u += obj.charAt(i);
        }
    }
    return u;
}


//-----------------------------------
// 숫자 리턴
//-----------------------------------
function convertInt(obj){
    var u = unFormat(obj);
    if(u == "") return 0;
    else return parseInt(u);
}

//--------------------------------------------------------------------------
// 권한 체크
//------------------------------------
function checkAuth(proc) {
    var authority = top.authority;

    if(authority == null) {
        var obj = top.opener;
        if(obj != null) {
            authority = obj.top.authority;
        }
    }


    if(proc == 'W' && authority == 'R') {
        alert("사용자는 메뉴의 쓰기 권한이 없습니다.");
        return false;
    }
    else if(proc == 'P' && authority != 'P') {
        alert("사용자는 메뉴의 처리 권한이 없습니다.");
        return false;
    }

    return true;
}

//------------------------
// form 객체 체크
// return 숫자
//------------------------
function checkObj(form,name) {
    var cnt = 0;
    for(var i = 0; i< eval(form).length; i++) {
        if(eval(form).elements[i].name == name) {
            cnt++;
            if(cnt>1) break;
        }
    }

    return cnt;
}

function setCookie(name, value, expiredays){
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


function getCookie(name){

    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;

    while(i< clen){
        var j = i + alen;
        if(document.cookie.substring(i,j)==arg){
            var end = document.cookie.indexOf(";",j);
            if(end == -1)
                end = document.cookie.length;
            return unescape(document.cookie.substring(j,end));
        }
        i=document.cookie.indexOf(" ",i)+1;
        if (i==0) break;
    }
    return "";
}

function getFlash(FlashURL, Width_Size, Height_Size)
{
    var ObjectString = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
        + 'width="' + Width_Size + '" height="' + Height_Size + '"'
        + 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab">'
        + '<param name="movie" value="' + FlashURL + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />'
        + '<embed src="' + FlashURL + '" quality="high" bgcolor="#ffffff" '
        + 'width="' + Width_Size + '" height="' + Height_Size + '" name="test" align="middle"'
        + 'play="true"'
        + 'loop="false"'
        + 'quality="high"'
        + 'allowScriptAccess="sameDomain"'
        + 'type="application/x-shockwave-flash"'
        + 'pluginspage="http://www.macromedia.com/go/getflashplayer">'
        + '<\/embed>'
        + '<\/object>'
    document.write(ObjectString);
}

//-------------------------------------------------------
// 함수명: 문자열 치환함수
// 설  명: 해당문자열에서 대상이 되는 모든 문자열을 치환한다.
// 인  자: tgt - 대상문자
//         repl - 치환문자
// 리  턴: 치환된 문자열
//-------------------------------------------------------
String.prototype.replaceAll = function(tgt, repl) {
    if(arguments.length != 2) return this;

    var result = this;
    if(this != "" && tgt != repl) {
        while(result.indexOf(tgt) != -1){
            result = result.replace(tgt, repl);
        }
    }
    return result;
}



/********************************************
 ** 테이블 컬럼 합치기
 *********************************************
 **  param
 **
 **  return
 **
 *********************************************/
function fncCollapseColumn( tid, coln ) {
    var  t  = document.getElementById( tid );
    var  tr, rowc, atext, btext;

    if ( coln == null ) coln  = 1;

    for ( var cn = coln - 1; cn >= 0; cn-- ) {
        rowc  = 1;
        tr  = -1;

        if ( t.rows.length > 0 ) {
            for ( var i = 0 ; i < t.rows.length ; i++ ) {
                if ( tr >= 0 ) {
                    atext  = fncAllColumnText( t, tr, cn );
                    btext  = fncAllColumnText( t, i, cn );
                }
                if ( tr >= 0 && atext == btext ) {
                    t.rows(i).deleteCell(cn);
                    rowc++;
                } else {
                    if ( tr >= 0 && rowc > 1 ) {
                        t.rows(tr).cells(cn).rowSpan  = rowc;
                    }

                    tr  = i;
                    rowc  = 1;
                }
            }

            if ( tr >= 0 && rowc > 1 ) {
                t.rows(tr).cells(cn).rowSpan  = rowc;
            }
        }
    }
}
/** 이전 컬럼값 가져오기 **/
function fncAllColumnText( tt, row, col ) {
    try {
        var  allText  = "";
        for ( var i = 0 ; i <= col ; i++ ) {
            allText  += ( "#" + tt.rows(row).cells(i).innerText + "#;" );
        }
    } catch ( e ) {
        alert( "row=" + row + ",col=" + col + ",error=" + e.message );
    }

    return allText;
}




/*
 * 년,월,일의 조합이 날짜형식에 맞는지 체크한다.
 */
function isValidDate ( year, month, day ) {

    year  = parseInt( year ,10 );
    month = parseInt( month,10 );
    day   = parseInt( day  ,10 );

    if (year < 0 || year > 9999 ) return false;
    if (month < 1 || month > 12) return false;

    var endDay = getEndDay(year, month);
    if (day < 1 || day > endDay) return false;

    return true;
}

/*
 * 해당년월의 마지막 일을 구한다.
 */
function getEndDay( year, month ) {

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

    year  = parseInt( year ,10 );
    month = parseInt( month,10 );

    if ( isLeapYear( year ) ) {
        end[1] = 29;
    }

    return end[ month-1 ];
}

/*
 * 해당년도가 윤년인지 체크한다.
 */
function isLeapYear( year ) {

    if ( (year % 4) == 0 ) {

        if ((year % 100) != 0) return true;
        if ((year % 400) == 0) return true;

    }

    return false;
}


/*
 * 문자열이 날짜형식에 맞는지 체크한다.
 */
function checkDate( dat ){
    if ( !isEmpty ( dat ) ) {

        dat = dat.replace( /\/|\.|\./g, "" ); // 특수문자 제거
        //date = replaceAll(date, ".");
        if ( dat.length < 8 ) return false;
        if(isNaN(dat)) return false;
        var year  = dat.substring( 0, 4 );
        var month = dat.substring( 4, 6 );
        var day   = dat.substring( 6, 8 );

        if ( !isValidDate( year, month, day ) ) {

            return false;

        }

    }

    return true;

}

/*
 * 문자열이 날짜형식에 맞는지 체크한후
 * 유효하지 않은 날짜이면 alert창 띄움
 */
function checkDateAlert( obj ){

    var dat = obj.value;

    if ( !isEmpty ( dat ) ) {
        dat = dat.replace( /\/|\.|\./g, "" ); // 특수문자 제거


        if ( dat.length < 8 ) return false;

        var year  = dat.substring( 0, 4 );
        var month = dat.substring( 4, 6 );
        var day   = dat.substring( 6, 8 );

        if ( !isValidDate( year, month, day ) ) {

            alert('유효한 날짜가 아닙니다.');
            obj.focus();
            return false;

        }

    }

    return true;

}


/*
 * 값이 null 혹은 ''(공란)인지 check
 */
function isEmpty( obj ) {

    var val = "";

    if ( typeof ( obj ) == 'object' ) {

        val = obj.value;

    } else {

        val = obj;

    }

    if ( val == null || trim(val) == '' ) {
        return true;
    } else {
        return false;
    }

    return false;

}

function editor_OnComplete(editorInstance) {

    editorInstance.Config['LinkBrowser'] = false;
    editorInstance.Config['ImageBrowser'] = false;
    editorInstance.Config['FlashBrowser'] = false;
    editorInstance.Config['LinkUpload'] = false;
    editorInstance.Config['ImageUpload'] = false;
    editorInstance.Config['FlashUpload'] = false;

    this.eFCK = editorInstance;
    //eFCK.InsertHtml("<table border='1'><tr><td>하이<td></tr></table>");
    //eFCK.InsertHtml("<p align='right'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //eFCK.InsertHtml("<p align='center'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //eFCK.InsertHtml("<p align='left'><img src='http://cfile218.uf.daum.net/image/203DCC0B4A0941C52EDF1A'></p>");
    //alert(eFCK.GetXHTML() );
}


/**
 * java의 StringBuffer
 * 이태희 (2010.01.15)
 * 사용법
 *  var html = new StringBuffer('');
 *  html.append('11111');
 *  html.toString();
 * @param value
 * @return
 */

/**
 * java의 StringBuffer
 * 이태희 (2010.01.15)
 * 사용법
 *  var html = new StringBuffer('');
 *  html.append('11111');
 *  html.toString();
 * @param value
 * @return
 */
var StringBuffer = function(){
    this.buffer = new Array();
}

//순서대로 문자열을 추가한다.
StringBuffer.prototype.append = function( strValue ) {
    this.buffer[this.buffer.length] = strValue;
    // this.buffer.push( strValue ); //IE5.5 NS4
}

//문자열의 형식을 지정해서 추가한다.
StringBuffer.prototype.appendFormat = function()
{
    var count = arguments.length;
    if( count < 2 ) return "";
    var strValue = arguments[0];
    for(var i=1; i<count; i++)
        strValue = strValue.replace("{"+ (i-1) + "}", arguments[i] );
    this.buffer[this.buffer.length] = strValue;
}

//해당하는 위치에 문자열을 추가한다. (문자위치가 아님);
StringBuffer.prototype.insert = function( idx, strValue ) {
    this.buffer.splice( idx, 0, strValue );     //IE5.5 NS4
}

//해당문자열을 새로운 문자열로 바꾼다.
//(배열방 단위로 바꾸므로 배열방 사이에 낀 문자열은 바꾸지 않음)
StringBuffer.prototype.replace = function( from, to ) {
    for( var i=this.buffer.length-1; i>=0; i--)
        this.buffer[i] = this.buffer[i].replace(new RegExp(from, "g"), to); //IE4  NS3
}

//문자열로 반환한다.
StringBuffer.prototype.toString = function() {
    return this.buffer.join("");    //IE4 NS3
}

/*
function StringBuffer( value )
{
    this._Strings = new Array( value || '' ) ;
}

StringBuffer.prototype.append = function( value )
{
    if ( value )
        this._Strings.push( value ) ;
}

StringBuffer.prototype.toString = function()
{
    return this._Strings.join( '' ) ;
}
*/
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


//문자를 숫자타입으로 값을 리턴한다.
function getNumber(s) {
    var str2 = formatNumber1(s);
    var retval = str2 == "" ? 0 : parseFloat(str2);
    if(isNaN(retval)){
        return 0;
    }else{
        return new Number(retval);
    }
}

function formatNumber1(s) {
    var retval = "";
    s += "";
    for ( i = 0; i < s.length; i++) {
        str2 = s.charAt(i);
        if ((str2 >= '0' && str2 <= '9') || (str2 == '-') || (str2 == "."))  {
            retval = retval + str2 ;
        }
    }
    return retval;
}

function getKeyCode(e) {
    return window.event ?  e.keyCode :e.which;
}

function getSrcElement(e) {
    return window.event ? e.srcElement : e.target;
}

function byteConvertor(bytes) {
    var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    var bt = bytes;
    if(bt == 0) return "0 " + s[0];

    var e = Math.floor(Math.log(bt)/Math.log(1024));
    if(e >= s.length) e = s.length - 1;//s의 마지막 단위로 표시할 수 없이 크다면, 마지막 단위로 처리
    if(e == "-Infinity") return "0 " + s[0];
    else return (bt/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
}