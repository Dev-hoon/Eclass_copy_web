/*
setCookie( name, value, expireFlag ) Set Cookie
getCookie( name ) get Cookie
jsChangeComma( str ) ' -> ` 로 대치
jsSplitCode(varString, varSplitChar, varIndex) 구분자로 구분해서 index의 문자를 리턴
jsCheckNull( toCheck ) toCheck의 값이 Null값인지를 체크
jsCheckIp(toCheck) toCheck값이 정확한 IP Address인지 체크
jsCheckNumber(toCheck) Number타입인지 체크 소수점은 Number타입으로 인식하지 않음
jsStrCheck(checkStr, checkOK) 들어가서는 안되는 데이타(checkOK)가 checkStr에 포함되어있는지 체크
jsCheckFloat(toCheck) Folat형인지를 체크 정수도 Float으로 인식
jsCheckPoint( toCheck , Positive , Negative ) 자리수 체크 정수 몇자리 소수 몇자리
jsCheckYYYY(toCheck) 년도를 체크
jsCheckYYYYMM(toCheck) 년월을 체크
jsCheckMM(toCheck) 월을 체크
jsCheckDD(yyyy,mm,toCheck) 일을 체크
jsCheckDate( dateVal ) 날짜를 체크
jsAddYear( startDt, plusYear ) 날짜에 년수를 더함
jsAddMonths( startDt, plusMonth ) 날짜에 월수를 더함
jsGetBetweenDay( startDt, endDt ) 날짜와 날짜사이의 일수를 리턴
jsCheckTime( toCheck ) 시간포맷인지를 체크
jsCheckJumin(toCheck) 주민등록번호 체크
jsCheckSaupJa(toCheck) 사업자등록번호 체크
jsCheckEmail( emailVal ) 이메일을 체크 - 보완요망
jsCheckFloatType( varNum, varLeft, varRight ) 정수부분자리수 소수부분자리수 체크
jsShowHelp( helpfile ) helpfile를 팝업으로 오픈
getByteLength(s) 한글2바이트, 영문 1바이트로 바이트수를 리턴
jsGetObjCnt( FormObj, varObjName ) 특정폼에서 해당오브젝트가 몇개인지를 리턴
jsCheckSelectBox ( sb ) SelectBox에서 선택된 값의 value를 리턴
jsCheckSelectBoxNm ( sb ) SelectBox에서 선택된 값의 Text를 리턴
jsClearFrame( fr ) 특정프레임에 공백 jsp를 띄워줌
jsToggle(FormObj, elemNm, checkYn) 특정 폼안의 체크박스오브젝트를 전체선택하거나 전체반전시킴
jsMoveFocus( varTextObj, varLength, varFocusToObj ) TextBox에서 조건이 만족하면 특정객체로 포커스를 이동
jsParseInt( varStr ) 문자를 숫자로 변환 null일때
jsConvertNumberToHangul( varNum ) 숫자를 한글로 변환
jsMakeCurrency( varTextObj ) 넘어온 숫자에 컴마를 찍어서 리턴 소숫점 허용안함
jsMakeForeignCurrency( varTextObj ) 넘어온 숫자에 컴마를 찍어서 리턴 소숫점 허용함
jsOnlyNumber( varTextObj ) 해당 텍스트박스 객체에 숫자만 입력받을수 있도록
jsOnlyFloat( varTextObj ) 해당 텍스트박스 객체에 숫자와 1개의 point만을 입력받게 해준다.
jsMakeYyyyMm( varTextObj ) 해당 텍스트박스 객체필드에 YYYY/MM형식으로 [/]를 찍어서 채워준다.
jsMakeYyyyMmString( varText ) 넘어온 값에 날짜형식으로 [/]를 찍어서 리턴.
jsMakeDate( varTextObj ) 넘어온 Object의 값을 날짜형식으로 채워줌
jsMakeDateString( varText )넘어온 값을 날짜형식으로 리턴
jsAddComma( varNumber ) 숫자를 받아서 comma를 찍어서 리턴한다 소수점 인식 숫자가 아닌값 -1을 리턴 음수표현가능
jsAddCommaAndZero( varNumber ) 숫자를 받아서 comma를 찍어서 리턴한다 소수점 인식 숫자가 아닌값 -1을 리턴 음수표현 불가능
jsDeleteComma( varNumber ) 컴마를 삭제하고 리턴
jsDeleteChar( varText, varDelete ) 문자열에서 해당 character를 지우고 리턴
jsDeleteCharAll( FormObj ) 해당 폼에 해당하는 모든 오브젝트의 값들에서 ',' and '/'문자를 지워준다.
jsCheckBoxSelectedCnt( FormObj, checkBoxName ) FormObj에서 checkBox 가 몇개 선택되었는지  리턴한다.
isAlphaNum(input) 영문과 숫자로만 이루어졌는지를 체크
containsCharsOnly(input,chars) 입력값이 특정 문자(chars)만으로 되어있는지 체크
popup1( varAction, varWinName, varWidth, varHeight ) 팝업을 호출
toTimeString( varDateObj ) DateObj를 넘겨주면 년월일을 리턴  20030201
jsAfterThisDate( varStdDate , varYYYY , varMM , varDD ) 날짜형식의 문자열에 특정 년, 월, 일을 더한값을 리턴
jsOnlyNumberKey() text 입력시 숫자이외의 키를 눌렀을때 무효화시킨다.
jsBack() 이전 페이지로 이동
jsVisible( str ) 특정조건에 해당하면 모래시계를 보여줌
jsRunAfterTime() 설정한 시간뒤에 특정 function을 호출
getCutNumber(num, place) 소수점 아래 몇자리 이하 절삭
trim(text) ltrim(text) rtrim(text) text의 좌우측, 좌측, 우측의 공백을 제거해서 리턴
cmInitSelectBox( varObjFullNm, varDeleteCnt ) 해당 SelectBox를 초기화 시킨다. varDeleteCnt가 1이면 첫번째값을 지우지 않는다.
cmMakeSelectBox( varObjFullNm, varText, varValue ) 해당 selectBox에 하나의 값을 추가시킴
*/


/////////////////////////////////////////////////////////////////
//////    GENERAL VALIDATION  CHECK  RETURN MESSAGE /////////////
/////////////////////////////////////////////////////////////////
/*--------------------------------------------------
  기능   : Cookie Setting
  INPUT  : name, value
           expireFg : 'Y' : 2020년 까지 쿠키저장
           expireFg : 'N' : session이 끊어질때 쿠키지움
  RETURN : NONE
----------------------------------------------------*/
function setCookie( name, value, expireFg ) {
    var expireDate = new Date ( 2020, 1, 1, 1, 1, 1 ) ;

    if ( expireFg = 'Y' )
        document.cookie = name + "=" + value + "; expires=" + expireDate.toGMTString() ;
    else
        document.cookie = name + "=" + value + ";" ;

}
/*--------------------------------------------------
  기능   : Cookie Get
  INPUT  : name
  RETURN : 쿠키값( 없으면 "" )
----------------------------------------------------*/
function getCookie( name ) {
    var cookieFound = false ;
    var start = 0 ;
    var end   = 0 ;
    var cookieString = document.cookie ;

    var i = 0 ;

    // name에 해당되는 cookie를 찾는다.
    while ( i <= cookieString.length ) {
        start = i ;
        end = start + name.length ;
        if ( cookieString.substring( start, end ) == name ) {
            cookieFound = true ;
            break ;
        }
        i++ ;
    }

    // cookie를 찾았으면 해당하는 값을 그렇지 않으면 ""을 return ;
    if ( cookieFound ) {
        start = end + 1 ;
        end   = document.cookie.indexOf(";",start) ;
        if ( end < start )
            end = document.cookie.length ;
        return document.cookie.substring( start, end ) ;
    }

    return "" ;
}

/*-----------------------------------------------
 ' ->문자를 쿼리문에 사용시 에러가 발생하므로 `로 대치
 INPUT  : str
 RETURN : 문자열안의 문자중 ' 문자를 ` 로 변경한 문자열
-------------------------------------------------*/
function jsChangeComma( str ){
    while( str.indexOf("'") != -1 ){
        str = str.replace("'","`");
    }
    return str;
}

/*----------------------------------------------------------
  기능   : Split Code RETURN Splited code by varSplitChar
  INPUT  : varString 문자
     : varSplitChar 구분자
   : varIndex 구분자의 위치
  RETURN : Splited code by varSplitChar
  예     : jsSplitCode( "111^222^333", "^", 2 ) == "222"
-----------------------------------------------------------*/
function jsSplitCode(varString, varSplitChar, varIndex) {
    var varArray = varString.split(varSplitChar) ;

    return varArray[eval(varIndex)-1];
}

/*--------------------------------------------------
  기능   : Check Null RETURN T/F
  INPUT  : check  data
  RETURN : true  -> NULL
           false -> NOT NULL
----------------------------------------------------*/
function jsCheckNull( toCheck )
{
    var chkstr = toCheck + "";
    var is_Space = true ;

    if ( ( chkstr == "") || ( chkstr == null ) )
        return( true );

    for ( j = 0 ; is_Space && ( j < chkstr.length ) ; j++)
    {
        if( chkstr.substring( j , j+1 ) != " " )
        {
            is_Space = false ;
        }
    }
    return ( is_Space );
}

/*--------------------------------------------------
  기능   : Check IP address RETURN T/F
  INPUT  : toCheck  -> check data
  RETURN : true  -> IP address
           false -> not IP address
----------------------------------------------------*/
function jsCheckIp(toCheck)
{
    var chkstr = toCheck+"" ;
    var isIp = true ;

    if ( jsCheckNull(toCheck) )
        return false;

    for (j = 0 ; isIp && (j < toCheck.length) ; j++)
    {
        if ((toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9"))
        {
            if ( toCheck.substring(j,j+1) == "." )
                if ( j == 0 )
                    isIp = false ;
                else
                    isIp = false ;
        }
    }

    return isIp;
}

/*--------------------------------------------------
  기능   : Check Number RETURN T/F ( 소수점"."은 Number로 취급안함 )
  INPUT  : toCheck  -> check data
  RETURN : true  -> number ( "."이 포함안됨 )
           false -> not number
----------------------------------------------------*/
function jsCheckNumber(toCheck)
{
    var chkstr = toCheck+"" ;
    var isNum = true ;

    if ( jsCheckNull(toCheck) )
        return false;

    for (j = 0 ; isNum && (j < toCheck.length) ; j++)
    {
        if ((toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9"))
        {
            if ( toCheck.substring(j,j+1) == "-" || toCheck.substring(j,j+1) == "+")
            {
                if ( j != 0 )
                {
                    isNum = false;
                }
            }
            else
                isNum = false;
        }
    }

    if (chkstr == "+" || chkstr == "-") isNum = false;

    return isNum;
}

/*--------------------------------------------------
  기능   : Check data RETURN T/F
  INPUT  : toCheck  -> check data
           checkOK  -> 들어가서는 안되는 data
  RETURN : false -> 들어가서는 안되는 data가 없다
           true  -> 들어가서는 안되는 data가 있다.
  예1    : jsStrCheck( '12345', 'ABab' )
           string '12345'에는 'ABab'가 없으므로
           false를 리턴
  예2    : jsStrCheck( '12$45', 'ABab$#%' )
           string '12$45'에는 '$'가 있으므로
           true를 리턴
----------------------------------------------------*/
function jsStrCheck(checkStr, checkOK) {
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            return false;
            break;
        }
    }
    return true;
}

/*--------------------------------------------------
  기능   : Check Float RETURN T/F (정수도 Float로 취급)
  INPUT  : toCheck  -> check data
  RETURN : true  -> number
           false -> not number
----------------------------------------------------*/
function jsCheckFloat(toCheck)
{
    var chkstr = toCheck+"" ;
    var isFloat = true;

    var chkPoint = false;
    var chkMinus = false;

    if ( jsCheckNull(toCheck) )
    {
        return false;
    }

    for (j = 0 ; isFloat && (j < toCheck.length); j++)
    {
        if ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9"))
        {

            if ( toCheck.substring(j,j+1) == "." )
            {
                if ( !chkPoint ) chkPoint = true ;
                else  isFloat = false ;
            }
            else if ( toCheck.substring(j,j+1) == "-" || toCheck.substring(j,j+1) == "+")
            {
                if ( ( j == 0 ) && ( !chkMinus ) ) chkMinus = true ;
                else isFloat = false;
            }
            else isFloat = false;
        }
    }

    return isFloat;
}

/*--------------------------------------------------
  기능   : 자릿수 check RETURN T/F
  INPUT  : toCheck  -> check data
  RETURN : true  -> number
           false -> not number
----------------------------------------------------*/
function jsCheckPoint( toCheck , Positive , Negative )
{
    var strPos = toCheck + "" ;
    var isPoint = true ;

    if ( jsCheckFloat ( toCheck ) )
    {

        var inx = strPos.indexOf(".") ;

        if ( inx == -1 )
        {
            if ( strPos.length > parseInt(Positive) )
                isPoint = false ;
            else
                isPoint = true ;
        }
        else
        {
            var pos = strPos.substring( 0, inx ) ;
            var nev = strPos.substring(inx + 1) ;

            if ( pos.length > parseInt(Positive) )
                isPoint = false ;
            else if ( nev.length > parseInt(Negative) )
                isPoint = false ;
            else
                isPoint = true ;
        }
    }
    else if ( jsCheckNumber (toCheck) )
        isPoint = true  ;
    else
        isPoint = false ;

    return isPoint ;

}

////////////////////////////////////////////////////////////////n
////////////    DATE  VALIDATION  CHECK    //////////////////////
/////////////////////////////////////////////////////////////////

/*--------------------------------------------------
  기능   : calender에서 사용할 월별 배열를 만든다.
  INPUT  : 각 인자의 값
----------------------------------------------------*/
function jsMonthArray(m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11)
{
    this[0] = m0;
    this[1] = m1;
    this[2] = m2;
    this[3] = m3;
    this[4] = m4;
    this[5] = m5;
    this[6] = m6;
    this[7] = m7;
    this[8] = m8;
    this[9] = m9;
    this[10] = m10;
    this[11] = m11;
}


/*--------------------------------------------------
  기능   : 년도를 check한다.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/

function jsCheckYYYY(toCheck)
{
    return ( ( toCheck.length == 4) && ( jsCheckNumber(toCheck)  ) && ( toCheck != "0000") );
}

/*--------------------------------------------------
  기능   : 년월을 check한다.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/

function jsCheckYYYYMM(toCheck)
{
    var isDate  = true ;

    if ( toCheck.length != 6 )
    {
        isDate = false ;
    }
    else
    {

        var yy = toCheck.substring(0,4) +"" ;
        var mm = toCheck.substring(4,6) +"" ;

        if ( !jsCheckYYYY(yy) )
            isDate = false ;
        else if ( !jsCheckMM(mm) )
            isDate = false ;
    }

    return isDate ;
}

/*--------------------------------------------------
  기능   : 월을 check한다.
  INPUT  : toCheck
  RETURN :
    MSG  :
----------------------------------------------------*/
function jsCheckMM(toCheck)
{
    return ((toCheck.length > 0) && (jsCheckNumber(toCheck)) && (0< eval(toCheck)) && (eval(toCheck) < 13));
}

/*--------------------------------------------------
  기능   : 일을 check한다.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckDD(yyyy,mm,toCheck)
{
    var isYMD  = false;
    var monthDD= new jsMonthArray(31,28,31,30,31,30,31,31,30,31,30,31);
    var im     = eval(mm) - 1;
    if ( toCheck.length == 0 )  return false;
    if ( !jsCheckNumber(toCheck)  )  return false;
    var dd     = eval(toCheck);
    if ( ( (yyyy%4 == 0) && (yyyy%100 != 0) ) || (yyyy%400 == 0) )
    {
        monthDD[1] = 29;
    }
    if ( (0 < dd) && (dd <= monthDD[im]) ) isYMD = true;
    return isYMD;
}

/*--------------------------------------------------
  기능   : 날짜를 check한다.
  INPUT  : dateVal '20030321'
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckDate( dateVal )
{

    var isDate  = true ;

    if ( dateVal.length != 8 )
    {
        isDate = false ;
    }
    else
    {

        var yy = dateVal.substring(0,4) +"" ;
        var mm = dateVal.substring(4,6) +"" ;
        var dd = dateVal.substring(6,8) +"" ;

        if ( !jsCheckYYYY(yy) )
            isDate = false ;
        else if ( !jsCheckMM(mm) )
            isDate = false ;
        else if ( !jsCheckDD (yy,mm,dd) )
            isDate = false ;
    }

    return isDate ;

}

/*--------------------------------------------------
  기능   : 날짜에 년수를 더한다.
  INPUT  : startDt(YYYYMMDD), year
  RETURN : rtnValue : 날짜에 년수를 더한 날짜
           -1       : ERROR..!
           예) 20000110 + 1년 = 20010110
           예) 20000229 + 1년 = 20010228
     MSG :
----------------------------------------------------*/
function jsAddYear( startDt, plusYear ) {
    var rtnValue = -1 ;

    // input date의 날짜 체크
    if ( !jsCheckDate(startDt) || !jsCheckNumber(plusYear) ) {
        rtnValue = -1 ;
        return rtnValue ;
    }

    var yyyy = startDt.substring(0,4) +"" ;
    var mm   = startDt.substring(4,6) +"" ;
    var dd   = startDt.substring(6,8) +"" ;

    var newYyyy = (eval(yyyy) + eval(plusYear)) ;

    // 윤달(29일) 인 경우 28일로 고침
    // 예) 20000229 에 1년을 더하면 20000228
    var isYoonYear = false ;
    // 4 로 나누어 떨어지면 윤년
    // 100 으로 나누어 떨어지면 윤년 아님
    // 400 으로 나누어 떨어지면 윤년
    if ( (eval(newYyyy)%4) == 0 ) isYoonYear = true ;
    if ( (eval(newYyyy)%100) == 0 ) isYoonYear = false ;
    if ( (eval(newYyyy)%400) == 0 ) isYoonYear = true ;

    if ( (mm == '02') && (dd == '29') && !isYoonYear ) dd = '28' ;

    rtnValue = newYyyy + mm + dd ;

    return rtnValue ;
}

/*--------------------------------------------------
  기능   : 날짜에 월수를 더한다.
  INPUT  : startDt(YYYYMMDD), year
  RETURN : rtnValue : 날짜에 월수를 더한 날짜
           -1       : ERROR..!
           예) 20000110 + 3월  = 20000410
           예) 20000229 + 12월 = 20000228
     MSG :
----------------------------------------------------*/
function jsAddMonths( startDt, plusMonth ) {
    var rtnValue = -1 ;

    // input date의 날짜 체크
    if ( !jsCheckDate(startDt) || !jsCheckNumber(plusMonth) ) {
        rtnValue = -1 ;
        return rtnValue ;
    }

    var yyyy = startDt.substring(0,4) +"" ;
    var mm   = startDt.substring(4,6) +"" ;
    var dd   = startDt.substring(6,8) +"" ;

    var newMm = null;

    // 월수를 더하여 1년이 넘는 경우
    if ( (eval(mm) + eval(plusMonth)) > 12 ) {
        yyyy  = eval(yyyy) + 1 ;
        newMm = eval(mm) + eval(plusMonth) - 12 ;
    } else {
        newMm = eval(mm) + eval(plusMonth) ;
    }

    // 윤년 처리
    var isYoonYear = false ;
    // 4 로 나누어 떨어지면 윤년
    // 100 으로 나누어 떨어지면 윤년 아님
    // 400 으로 나누어 떨어지면 윤년
    if ( (eval(yyyy)%4) == 0 ) isYoonYear = true ;
    if ( (eval(yyyy)%100) == 0 ) isYoonYear = false ;
    if ( (eval(yyyy)%400) == 0 ) isYoonYear = true ;

    // 윤년인 경우
    if ( isYoonYear ) {
        if ( (newMm == '02') && ( dd=='30' || dd=='31' ) ) dd = '29' ;
        // 평년인 경우
    } else {
        if ( (newMm == '02') && ( dd=='29' || dd=='30' || dd=='31' ) ) dd = '28' ;
    }

    // 월의 자리수를 맞춘다. ( 2 월 -> 02 )
    if ( eval(newMm) < 10 ) { newMm = "0" + newMm  } ;
    rtnValue = yyyy + newMm + dd ;

    return rtnValue ;
}

/*--------------------------------------------------
  기능   : 날짜와 날짜 사이의 일수를 리턴한다.
  INPUT  : startDt(YYYYMMDD), endDt(YYYYMMDD)
  RETURN : rtnValue : 날짜와 날짜 사이의 일수
           -1       : ERROR..!
     MSG :

----------------------------------------------------*/
function jsGetBetweenDay( startDt, endDt )
{
    var rtnValue = 0 ;

    // input date의 날짜 체크
    if ( !jsCheckDate(startDt) || !jsCheckDate(endDt) ) {
        rtnValue = -1 ;
    }
    else {
        var yyyy = startDt.substring(0,4) +"" ;
        var mm   = startDt.substring(4,6) +"" ;
        var dd   = startDt.substring(6,8) +"" ;
        var startDate = new Date(yyyy,(eval(mm)-1),dd) ; // 달 은 한달이 느리므로 1을 빼준다.

        yyyy = endDt.substring(0,4) +"" ;
        mm   = endDt.substring(4,6) +"" ;
        dd   = endDt.substring(6,8) +"" ;
        var endDate = new Date(yyyy,(eval(mm)-1),dd) ;

        // 1000분의 1초 단위를 일 단위로 바꾸기
        rtnValue = ((endDate-startDate)/60/60/24/1000) ;
    }

    return rtnValue ;

}
/*--------------------------------------------------
  기능   : Check Time RETURN T/F
  INPUT  : check  time
  RETURN : true  -> TIME
           false -> NOT TIME
----------------------------------------------------*/
function jsCheckTime( toCheck )
{
    var chkstr  = toCheck + "";

    if ( ( chkstr == "") || ( chkstr == null ) )
        return( false );

    var mm = chkstr.substring( 0 ,2 );
    var ss = chkstr.substring( 3 ,5 );

    if (( mm <= "23" ) && ( mm >= "00" ))
    {
        if (( ss <= "60" ) && ( ss >= "00" ))
        {
            if ( chkstr.substring( 2 ,3 ) == ":")
            {
                return( true );
            }
        }
    }
    return( false );
}

/*--------------------------------------------------
  기능   : Check 주민등록번호 RETURN T/F
  INPUT  : toCheck
  RETURN : true  -> 올바른 번호
           false ->
----------------------------------------------------*/
function jsCheckJumin(toCheck) {
    var isJumin = true;
    if ( jsCheckNull(toCheck) ) {
        return false;
    } else if ( toCheck.length < 13 || toCheck.length > 13 ) {
        return false;
    } else if ( toCheck.substring(2,3) > "1" || toCheck.substring(6,7) > "2" || toCheck.substring(6,7) == "0" ) {
        return false;
    } else if ( toCheck.substring(2,3) == "1" && toCheck.substring(3,4) > "2" ){
        return false;
    } else if (!(toCheck.substring(4,6) >= "01" && toCheck.substring(4,6) <= "31")){
        return false;
    }
    for (j = 0; isJumin && (j < toCheck.length); j++) {
        if ( ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9")) ) {
            isJumin = false;
        }
    }


    var a1=toCheck.substring(0,1)
    var a2=toCheck.substring(1,2)
    var a3=toCheck.substring(2,3)
    var a4=toCheck.substring(3,4)
    var a5=toCheck.substring(4,5)
    var a6=toCheck.substring(5,6)
    var check_digit=a1*2+a2*3+a3*4+a4*5+a5*6+a6*7
    var b1=toCheck.substring(6,7)
    var b2=toCheck.substring(7,8)
    var b3=toCheck.substring(8,9)
    var b4=toCheck.substring(9,10)
    var b5=toCheck.substring(10,11)
    var b6=toCheck.substring(11,12)
    var b7=toCheck.substring(12,13)

    var check_digit=check_digit+b1*8+b2*9+b3*2+b4*3+b5*4+b6*5
    check_digit = check_digit%11
    check_digit = 11 - check_digit
    check_digit = check_digit%10
    if (check_digit != b7){
        isJumin = false;
    }

    return isJumin;
}

/*--------------------------------------------------
  기능   : Check 사업자 등록번호 RETURN T/F
  INPUT  : toCheck
  RETURN : true  -> 올바른 번호
           false ->
----------------------------------------------------*/
function jsCheckSaupJa(toCheck) {
    var isSaupJa = true;
    if ( jsCheckNull(toCheck) ) {
        return false;
    } else if ( toCheck.length < 10 || toCheck.length > 10 ) {
        return false;
    }
    for (j = 0; isSaupJa && (j < toCheck.length); j++) {
        if ( ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9")) ) {
            isSaupJa = false;
        }
    }
    return isSaupJa;
}

/*--------------------------------------------------
  기능   : E-Mail를 check한다.
  INPUT  : emailVal
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckEmail( emailVal )
{
    if ( jsCheckNull(emailVal) ) return true;

    var inx = emailVal.indexOf("@") ;

    if ( inx <= 0 || inx==emailVal.length-1 ) return false;

    return true ;
}
/*--------------------------------------------------
  기능   :
  INPUT  : varNum : 실수
       varLeft : 정수부분 자리수
       varRight : 소수부분 자리수
  RETURN : true : 실수가 정/소수부분의 자리수를 초과하지 않는다.
       false : 실수가 정/소수부분의 자리수를 초과한다.
----------------------------------------------------*/
function jsCheckFloatType( varNum, varLeft, varRight ) {

    var resultFlag = true ;

    if ( varNum.charAt(0) == "-" ){
        varNum = varNum.substring(1,varNum.length);
    }

    var PointIndex = varNum.indexOf(".");

    if ( PointIndex < 0 ){
        if ( varNum.length > varLeft )
            resultFlag = false ;
    }else{
        var LeftLength = varNum.substring(0,PointIndex).length;
        var RightLength = varNum.substring(PointIndex+1, varNum.length ).length;

        if ( (LeftLength > varLeft) || (RightLength > varRight) )
            resultFlag = false ;
    }

    return resultFlag ;

}

/*--------------------------------------------------
  기능   :
  INPUT  : helpfile
  RETURN :
----------------------------------------------------*/
function jsShowHelp( helpfile )
{
    var helpstr = helpfile + "" ;
    var URL     = "" ;
    var cWin ;

    URL = "/help/"+helpfile+".html" ;

    cWin = window.open(URL,"help","toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=560,height=320");

    cWin.focus();
}

/*--------------------------------------------------
  기능   : 한글이든 영문이든 제대로 갯수 체크를 해준다.
  INPUT  : String
  RETURN :
----------------------------------------------------*/
function getByteLength(s){
    var len = 0;
    if ( s == null ) return 0;
    for(var i=0;i<s.length;i++){
        var c = escape(s.charAt(i));
        if ( c.length == 1 ) len ++;
        else if ( c.indexOf("%u") != -1 ) len += 2;
        else if ( c.indexOf("%") != -1 ) len += c.length/3;
    }
    return len;
}

/*--------------------------------------------------
  기능   : FormObj에서 varObjName이 몇개 존재하는지 리턴한다.
  INPUT  : FormObj : FormName
     : varObjName : 객체명
  RETURN :
----------------------------------------------------*/
function jsGetObjCnt( FormObj, varObjName ){
    var cnt = 0 ;
    for(var inx = 0; inx < FormObj.elements.length ; inx++ ) {
        if ( FormObj.elements[inx].name == varObjName ) {
            cnt++ ;
        }
    }
    return cnt;
}

/*--------------------------------------------------
  기능   :  SELECT OPTION BOX의 값을 RETURN 한다.
  INPUT  : sb = selectBoxName
  RETURN :
----------------------------------------------------*/
function jsCheckSelectBox ( sb )
{
    var temp = sb.options[sb.selectedIndex].value ;
    return ( temp );
}

function jsCheckSelectBoxNm ( sb )
{
    var temp = sb.options[sb.selectedIndex].text ;
    return ( temp );
}

/*--------------------------------------------------
  기능   :  해당 Frame을 공백페이지로 변경
  INPUT  : fr : FrameName
  RETURN :
----------------------------------------------------*/
function jsClearFrame( fr ) {
    fr.location = "/common/blank.jsp";
}

/*--------------------------------------------------
  기능   : checkBox를 전체선택 및 해제를 할수 있게 한다.
  INPUT  : FormObj FormName
       elemNm CheckBox name
       checkYn boolean
  RETURN :
----------------------------------------------------*/
function jsToggle(FormObj, elemNm, checkYn){
    var i =0;
    while (i < FormObj.elements.length)
    {
        if (FormObj.elements[i].name== elemNm )
        {
            FormObj.elements[i].checked= checkYn;
        }
        i++;
    }
}

/*--------------------------------------------------
  기능   : focus 옮기기
  INPUT  : varTextObj : TextBox 객체명
       varLength  : 조건에 맞는 textLength
       varFocusToObj : Focus를 옮겨갈 객체명
  RETURN :
----------------------------------------------------*/
function jsMoveFocus( varTextObj, varLength, varFocusToObj ) {
    if ( varTextObj.value.length == varLength ) {
        varFocusToObj.focus() ;
        varFocusToObj.select() ;
        return ;
    }
}

/*--------------------------------------------------
  기능   : 문자를 숫자로 convert 한다. 단,
       parseFloat 와 다른 점은 null 이 올때 0 으로 인식한다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsParseInt( varStr ) {
    if ( varStr == null || varStr == "" )
        return 0 ;
    else
        return parseInt(varStr) ;
}

/*--------------------------------------------------
  기능   : 숫자를 한글로 변환한다.
   예) 450,000,000 -> 사억오천만
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsConvertNumberToHangul( varNum )
{
    // 리턴할 문자열
    var returnStr = "" ;

    // 음수일 때는 에러
    if ( eval(varNum) < 0 ) {
        return returnStr ;
    }

    // 넘어온 숫자를 문자로 변환
    var numLen = varNum.length ;
    // 변환된 문자를 앞에서 부터 한자씩 잘라서 보관할 변수
    var oneChar = null ;
    var isDone1 = true ;
    var isDone2 = true ;
    var isDone3 = true ;
    var isDone4 = true ;
    var isDone5 = false ;
    for ( var inx = 0 ; inx < numLen ; inx++ ) {
        oneChar = varNum.substring( inx, inx+1 ) ;
        isDone5 = false ;

        if ( oneChar == "0" ) {
            // 아무일도 안함
        } else if ( oneChar == "1" ) {
            returnStr = returnStr + "일" ;
            isDone5 = true ;
        } else if ( oneChar == "2" ) {
            returnStr = returnStr + "이" ;
            isDone5 = true ;
        } else if ( oneChar == "3" ) {
            returnStr = returnStr + "삼" ;
            isDone5 = true ;
        } else if ( oneChar == "4" ) {
            returnStr = returnStr + "사" ;
            isDone5 = true ;
        } else if ( oneChar == "5" ) {
            returnStr = returnStr + "오" ;
            isDone5 = true ;
        } else if ( oneChar == "6" ) {
            returnStr = returnStr + "육" ;
            isDone5 = true ;
        } else if ( oneChar == "7" ) {
            returnStr = returnStr + "칠" ;
            isDone5 = true ;
        } else if ( oneChar == "8" ) {
            returnStr = returnStr + "팔" ;
            isDone5 = true ;
        } else if ( oneChar == "9" ) {
            returnStr = returnStr + "구" ;
            isDone5 = true ;
        }

        if ( ((numLen-inx) % 4) == 0 && oneChar != "0" ) {
            returnStr = returnStr + "천" ;
        } else if ( ((numLen-inx) % 4) == 3 && oneChar != "0" ) {
            returnStr = returnStr + "백" ;
        } else if ( ((numLen-inx) % 4) == 2 && oneChar != "0" ) {
            returnStr = returnStr + "십" ;
        } else if ( ((numLen-inx) % 4) == 1 ) {
            if ( numLen >= 17 && isDone1 && isDone5 ) {
                returnStr = returnStr + "경" ;
                isDone1 = false ;
            } else if ( numLen >= 13  && isDone2 && isDone5 ) {
                returnStr = returnStr + "조" ;
                isDone2 = false ;
            } else if ( numLen >= 9  && isDone3 && isDone5 ) {
                returnStr = returnStr + "억" ;
                isDone3 = false ;
            } else if ( numLen >= 5  && isDone4 && isDone5 ) {
                returnStr = returnStr + "만" ;
                isDone4 = false ;
            }
        }
    }

    return returnStr ;
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 필드에 comma를 찍어서 comma 를 찍어서 채워준다.
      소수점 허용 안함
    예) 1000.00 -> 1,000
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeCurrency( varTextObj ) {
    varTextObj.value = jsDeleteComma( varTextObj.value ) ;

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    var isPointed = false ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
            varText = varText + varTextObj.value.substring(inx, inx+1) ;
        }
    }

    varTextObj.value = jsAddComma( varText ) ;
}


/*--------------------------------------------------
  기능   : 파라메터로 넘어온 필드에 comma를 찍어서 comma 를 찍어서 채워준다.
      소수점 허용 함
    예) 1000.00 -> 1,000.00
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeForeignCurrency( varTextObj ) {
    varTextObj.value = jsDeleteComma( varTextObj.value ) ;

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    var isPointed = false ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) || (varTextObj.value.substring(inx, inx+1)=='.') ) {
            // 점이 안찍히고 처음으로 점이 들어왔을때
            if ( !isPointed && varTextObj.value.substring(inx, inx+1)=='.' ) {
                isPointed = true ;
                varText = varText + varTextObj.value.substring(inx, inx+1) ;
                // 숫자 일때
            } else if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
                varText = varText + varTextObj.value.substring(inx, inx+1) ;
            }

        }
    }

    varTextObj.value = jsAddComma( varText ) ;
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 객체필드에 숫자만을 입력받게 해준다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsOnlyNumber( varTextObj ) {

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
            varText = varText + varTextObj.value.substring(inx, inx+1) ;
        }
    }

    // 앞에 붙은 0 없애기 (예) 00200 -> 200
    varLength = varText.length ;
    var varTempReturnNumber = varText;
    var varReturnNumber = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
            // '0' 이 넘어왔을 경우 '0'을 그대로 리턴해야 한다.
            if ( varLength == 1 ) varReturnNumber = "0" ;
            else if ( eval(jsDeleteComma(varTempReturnNumber)) == '0' ) {
                varReturnNumber = "0" ;
                break ;
            }
        } else {
            varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
            break ;
        }
    }

    varTextObj.value = varReturnNumber;
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 필드에 숫자와 1개의 point만을 입력받게 해준다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsOnlyFloat( varTextObj ) {

    varTextObj.value = jsDeleteComma( varTextObj.value ) ;

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    var isPointed = false ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) || (varTextObj.value.substring(inx, inx+1)=='.') ) {
            // 점이 안찍히고 처음으로 점이 들어왔을때
            if ( !isPointed && varTextObj.value.substring(inx, inx+1)=='.' ) {
                isPointed = true ;
                varText = varText + varTextObj.value.substring(inx, inx+1) ;
                // 숫자 일때
            } else if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
                varText = varText + varTextObj.value.substring(inx, inx+1) ;
            }

        }
    }

    // 앞에 붙은 0 없애기 (예) 00200 -> 200
    varLength = varText.length ;

    var varReturnNumber = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varText.substring(inx, inx+1) == '0' ) {
            // '0' 이 넘어왔을 경우 '0'을 그대로 리턴해야 한다.
            if ( varLength == 1 ) varReturnNumber = "0" ;
            else if ( eval(jsDeleteComma(varText)) == '0' ) {
                varReturnNumber = "0" ;
                break ;
            }
        } else {
            varReturnNumber = varText.substring(inx, varLength+1) ;
            break ;
        }
    }

    varTextObj.value = varReturnNumber ;

}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 필드에 YYYY/MM형식으로 [/]를 찍어서 채워준다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeYyyyMm( varTextObj ) {
    varTextObj.value = jsDeleteChar( varTextObj.value, '/' ) ;

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
            varText = varText + varTextObj.value.substring(inx, inx+1) ;
        }
    }

    if ( varText.length < 6 ) {
        varTextObj.value = varText ;
    } else {
        varTextObj.value = varText.substring(0,4) + "/" + varText.substring(4,6) ;
    }
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 String에 날짜형식으로 [/]를 찍어서 리턴.
    예) 200103 -> 2001/03
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeYyyyMmString( varText ) {
    if ( varText.length != 6 || !jsCheckNumber( varText ) ) {
        return varText ;
    }

    var varReturnText   = "" ;

    varReturnText = varText.substring(0,4) + "/" + varText.substring(4,6) ;

    return varReturnText
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 필드에 날짜형식으로 [/]를 찍어서 채워준다.
    예) 20010301 -> 2001/03/01
  INPUT  : Text Object
  RETURN :
----------------------------------------------------*/
function jsMakeDate( varTextObj ) {
    varTextObj.value = jsDeleteChar( varTextObj.value, '/' ) ;

    var varLength = varTextObj.value.length ;
    var varText   = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
            varText = varText + varTextObj.value.substring(inx, inx+1) ;
        }
    }

    if ( varText.length < 8 ) {
        varTextObj.value = varText ;
    } else {
        varTextObj.value = varText.substring(0,4) + "/" + varText.substring(4,6) + "/" + varText.substring(6,8) ;
    }
}

/*--------------------------------------------------
  기능   : 파라메터로 넘어온 String에 날짜형식으로 [/]를 찍어서 채워준다.
    예) 20010301 -> 2001/03/01
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeDateString( varText ) {
    if ( varText.length != 8 || !jsCheckNumber( varText ) ) {
        return varText ;
    }

    var varReturnText   = "" ;

    varReturnText = varText.substring(0,4) + "/" + varText.substring(4,6) + "/" + varText.substring(6,8) ;

    return varReturnText
}

/*--------------------------------------------------
  기능   : 숫자를 받아서 comma를 찍어서 리턴한다. 음수도 표현가능
    예) 1000.00 -> 1,000.00
    예) 숫자가 아닌 값 -> -1 리턴
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsAddComma( varNumber ){
    // 숫자가 아니면 -1을 리턴한다.
    if ( jsCheckNull(varNumber) ) return "" ;
    if ( !jsCheckFloat(varNumber) ) {
        return -1 ;
    }

    // 소수 이상, 이하 부분을 따로 보관.
    var PointIndex = varNumber.indexOf(".") ;
    var varUnderPoint = "" ;
    var isPointed = false ;
    // 소수 이하가 없을때
    if ( PointIndex < 0 ) {
        isPointed = false ;
        // 소수 이하 부분
        varUnderPoint = "" ;
        // 소수 이상 부분
        varOverPoint = varNumber ;
        // 소수 이하가 있을때
    } else {
        isPointed = true ;
        // 소수 이하 부분
        varUnderPoint = varNumber.substring(PointIndex+1, varNumber.length ) ;
        // 소수 이상 부분
        varOverPoint = varNumber.substring(0, PointIndex) ;
    }

    // 음수일때 앞의 "-" 따로 보관
    var negativeFlag = false ;
    if ( varOverPoint.substring(0,1) == "-" ) {
        negativeFlag = true ;
        varOverPoint = varOverPoint.substring(1,varOverPoint.length+1) ;
    }

    // 소수 이상 부분에 comma 넣기
    var varLength = varOverPoint.length ;
    var varCnt = 0 ;
    var varTempReturnNumber = "" ;
    for ( var inx = varLength-1 ; inx >= 0 ; inx-- ) {
        varCnt++ ;

        // 소수점 찍기
        if ( varCnt == 4 ) {
            varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + "," + varTempReturnNumber ;
            varCnt = 1 ;
            // 소수점 안찍기
        } else {
            varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + varTempReturnNumber ;
        }

    }

    // 앞에 붙은 0 없애기 (예) 00200 -> 200
    varLength = varTempReturnNumber.length ;
    var varReturnNumber = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
            // '0' 이 넘어왔을 경우 '0'을 그대로 리턴해야 한다.
            if ( varLength == 1 ) varReturnNumber = "0" ;
            else if ( eval(jsDeleteComma(varTempReturnNumber)) == '0' ) {
                varReturnNumber = "0" ;
                break ;
            }
        } else {
            varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
            break ;
        }
    }

    // 소수점 이하 붙이기
    if ( isPointed ) {
        varReturnNumber = varReturnNumber + "." + varUnderPoint ;
    }

    // 음수 붙이기
    if ( negativeFlag ) {
        varReturnNumber = "-" + varReturnNumber ;
    }

    return varReturnNumber ;

}

/*--------------------------------------------------
  기능   : 숫자를 받아서 comma를 찍어서 리턴한다.
    예) 1000 -> 1,000.00
    예) 숫자가 아닌 값 -> -1 리턴
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsAddCommaAndZero( varNumber ){
    // 숫자가 아니면 -1을 리턴한다.
    if ( jsCheckNull(varNumber) ) return "" ;
    if ( !jsCheckFloat(varNumber) ) {
        return -1 ;
    }

    // 소수 이상, 이하 부분을 따로 보관.
    var PointIndex = varNumber.indexOf(".") ;
    var varUnderPoint = "" ;
    // 소수 이하가 없을때
    if ( PointIndex < 0 ) {
        // 소수 이하 부분
        varUnderPoint = "" ;
        // 소수 이상 부분
        varOverPoint = varNumber ;
        // 소수 이하가 있을때
    } else {
        // 소수 이하 부분
        varUnderPoint = varNumber.substring(PointIndex+1, varNumber.length ) ;
        // 소수 이상 부분
        varOverPoint = varNumber.substring(0, PointIndex) ;
    }

    // 소수 이상 부분에 comma 넣기
    var varLength = varOverPoint.length ;
    var varCnt = 0 ;
    var varTempReturnNumber = "" ;
    for ( var inx = varLength-1 ; inx >= 0 ; inx-- ) {
        varCnt++ ;

        // 소수점 찍기
        if ( varCnt == 4 ) {
            varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + "," + varTempReturnNumber ;
            varCnt = 1 ;
            // 소수점 안찍기
        } else {
            varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + varTempReturnNumber ;
        }

    }

    // 앞에 붙은 0 없애기 (예) 00200 -> 200
    varLength = varTempReturnNumber.length ;
    var varReturnNumber = "" ;
    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
        } else {
            varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
            break ;
        }
    }

    // 소수점 이하 붙이기
    if ( varUnderPoint.length == 0 ){
        varReturnNumber = varReturnNumber + "." + "00" ;
    }else if ( varUnderPoint.length == 1 ){
        varReturnNumber = varReturnNumber + "." + varUnderPoint + "0";
    }else if ( varUnderPoint.length == 2 ){
        varReturnNumber = varReturnNumber + "." + varUnderPoint ;
    }

    return varReturnNumber ;

}

/*--------------------------------------------------
  기능   : 숫자를 받아서 comma를 없애고 리턴한다
    예) 1,000.00 -> 1000.00
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsDeleteComma( varNumber ){
    var varLength = varNumber.length ;

    varReturnNumber = "" ;

    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varNumber.substring( inx, inx+1 ) != "," ) {
            varReturnNumber = varReturnNumber + varNumber.substring( inx, inx+1 ) ;
        }
    }

    return varReturnNumber ;
}

/*--------------------------------------------------
  기능   : 글자를 받아서 param를 없애고 리턴한다.
    예) 2001/01/01 -> 20010101
  INPUT  : varText 문자열 varDelete 삭제하고자하는 Character
  RETURN :
----------------------------------------------------*/
function jsDeleteChar( varText, varDelete ){
    var varLength = varText.length ;

    varReturnText = "" ;

    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varText.substring( inx, inx+1 ) != varDelete ) {
            varReturnText = varReturnText + varText.substring( inx, inx+1 ) ;
        }
    }

    return varReturnText ;
}

/*--------------------------------------------------
  기능   : 폼 이름을 받아서 모든 text,hidden값에 comma, / 문자를 없애준다
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsDeleteCharAll( FormObj ) {
    for ( i=0; i<FormObj.elements.length; i++ ) {
        if ( FormObj.elements[i].type == "text" || FormObj.elements[i].type == "hidden" ) {
            if ( !jsCheckNull(FormObj.elements[i].value) && jsCheckFloat(jsDeleteComma(FormObj.elements[i].value)) ) {
                FormObj.elements[i].value = jsDeleteComma(FormObj.elements[i].value);
            } else if ( !jsCheckNull(FormObj.elements[i].value) && jsCheckDate(jsDeleteChar(FormObj.elements[i].value,'/')) ) {
                FormObj.elements[i].value = jsDeleteChar( FormObj.elements[i].value, '/' );
            }
        }
    }
}

/*--------------------------------------------------
  기능   : FormObj에서 checkBox 가 몇개 선택되었는지  리턴한다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsCheckBoxSelectedCnt( FormObj, checkBoxName ){
    var cnt = 0 ;
    for(var inx = 0; inx < FormObj.elements.length ; inx++ ) {
        if ( FormObj.elements[inx].name == checkBoxName && FormObj.elements[inx].checked ) {
            cnt++ ;
        }
    }
    return cnt;
}

/*--------------------------------------------------
  기능   : 영문 과 숫자로만 이루어 졌는지  체크를 해준다.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function isAlphaNum(input) {
    var chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/*----------------------------------------------------
  입력값이 특정 문자(chars)만으로 되어있는지 체크
  특정 문자만 허용하려 할 때 사용
  ex) if (!containsCharsOnly(form.blood,"ABO")) {
          alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
      }
------------------------------------------------------*/
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
        if (chars.indexOf(input.value.charAt(inx)) == -1)
            return false;
    }
    return true;
}

/*--------------------------------------------------
  기능   : POPUP OPEN Script
  INPUT  :
  RETURN :
----------------------------------------------------*/
function popup1( varAction, varWinName, varWidth, varHeight ){
    var win = window.open( varAction, varWinName , "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1, width=" + varWidth + ",height=" + varHeight + ", left=50,top=50");
    return win;

    //var FormObj = document.dataForm;
    //FormObj.target = varWinName ;
    //FormObj.action = varAction ;
    //FormObj.submit() ;
}


function toTimeString( varDateObj ) { //formatTime(date)
    var year  = varDateObj.getFullYear();
    var month = varDateObj.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = varDateObj.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day );
}

function jsAfterThisDate( varStdDate , varYYYY , varMM , varDD ) {

    var varDateObj = new Date();

    varStdDate = jsDeleteChar( varStdDate, "/" );

    var yyyy = varStdDate.substring(0,4) +"" ;
    var mm   = varStdDate.substring(4,6) +"" ;
    var dd   = varStdDate.substring(6,8) +"" ;

    var startDate = new Date(yyyy,(eval(mm)-1),dd) ; // 달 은 한달이 느리므로 1을 빼준다.

    varDateObj.setFullYear(startDate.getFullYear() + eval(varYYYY) ); //년을 더함
    varDateObj.setMonth(startDate.getMonth() + eval(varMM) );       //월을 더함
    varDateObj.setDate(startDate.getDate() + eval(varDD)  );         //일을 더함

    return toTimeString(varDateObj);
}

/*--------------------------------------------------
  기능   : text 입력시 숫자이외의 키를 눌렀을때 무효화시킨다.
  INPUT  : 없음
  RETURN : 이벤트 무효화

  주의!  : onKeypress 이벤트만 사용할것
          예) <input type="text" onKeypress="jsOnlyNumberKey();">
----------------------------------------------------*/
function jsOnlyNumberKey() {
    if ( event != null) {
        if ( event.keyCode < 48 || event.keyCode > 57 ) {
            event.returnValue = false;
        }
    }
}

/* 이전페이지로 이동 */
function jsBack(){
    history.go(-1);
}

/* 모래시계 보이게 하기 */
function jsVisible( str ){
    if( str == '1' )
        document.body.style.cursor='wait'
    else
        document.body.style.cursor='auto'
}

/* 15초후에 jsRefresh()라는 function을 호출 */
var timeId   = null ;

function jsRunAfterTime() {
    //15초 후에 Refresh
    timeId = setTimeout( "jsRefresh()", 15000 ) ;
}

/**
 * 소수점 아래 몇자리 이하 절삭.
 *
 * @param num 숫자
 * @param place 자리수
 * @return 절삭된 숫자
 */
function getCutNumber(num, place) {
    var returnNum;
    var str = "1";

    return Math.floor( num * Math.pow(10,parseInt(place,10)) ) / Math.pow(10,parseInt(place,10));
}

/* text의 좌우 공백을 제거해서 리턴*/
function trim(text) {
    if (text == "") {
        return text;
    }

    var len = text.length;
    var st = 0;

    while ((st < len) && (text.charAt(st) <= ' ')) {
        st++;
    }

    while ((st < len) && (text.charAt(len - 1) <= ' ')) {
        len--;
    }

    return ((st > 0) || (len < text.length)) ? text.substring(st, len) : text;
}

/* text의 좌측의 공백을 제거해서 리턴*/
function ltrim(text) {
    if (text == "") {
        return text;
    }

    var len = text.length;
    var st = 0;

    while ((st < len) && (text.charAt(st) <= ' ')) {
        st++;
    }

    return (st > 0) ? text.substring(st, len) : text;
}

/* text의 우측의 공백을 제거해서 리턴*/
function rtrim(text) {
    if (text == "") {
        return text;
    }

    var len = text.length;
    var st = 0;

    while ((st < len) && (text.charAt(len - 1) <= ' ')) {
        len--;
    }

    return (len < text.length) ? text.substring(st, len) : text;
}

/*--------------------------------------------------
  기능   : select box 를 CLEAR 시킨다.
  INPUT  : varObjFullNm : select box 객체
           varDeleteCnt : 첫번째 아이템 삭제 여부 결정
  RETURN : NONE
----------------------------------------------------*/
function cmInitSelectBox( varObjFullNm, varDeleteCnt ) {
    varObj = eval( varObjFullNm ) ;
    varObj.length = varDeleteCnt ;
}

/*--------------------------------------------------
  기능   :  select box 를 만든다.
  INPUT  : varObjFullNm :  select box 객체
           varText      :
           varValue     :
  RETURN : NONE
----------------------------------------------------*/
function cmMakeSelectBox( varObjFullNm, varText, varValue ) {
    varObj = eval( varObjFullNm ) ;

    var empOption = null ;

    empOption = document.createElement("OPTION");
    empOption.text = varText ;
    empOption.value = varValue ;
    varObj.options.add(empOption);
}
