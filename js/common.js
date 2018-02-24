
// popup
function winOpen(url, w, h){
    windowprops = "height="+h+",width="+w+",location=no, scrollbars=yes, menubars=no, toolbars=no, resizable=no";
    window.open(url, "", windowprops);
}

//popup
function winOpen2(url,popname, w, h){
    windowprops = "height="+h+",width="+w+",location=no, scrollbars=yes, menubars=no, toolbars=no, resizable=no";
    var f = window.open(url, popname, windowprops);
    f.focus();
}

function testOpen(url, w, h){
    windowprops = "height="+h+",width="+w+",location=no, scrollbars=yes, menubars=no, toolbars=no, resizable=no";
    window.open(url, "", windowprops);
}

function testOpen2(url,popname, w, h){
    windowprops = "height="+h+",width="+w+",location=no, scrollbars=yes, menubars=no, toolbars=no, resizable=no";
    var f = window.open(url, popname, windowprops);
    f.focus();
}


/*
** Select 폼 객체를 받아 value와 일치하는 element를 선택한다.
*/
function selectedOptionValue( obj, value )
{
    var object = obj;
    if ( object != '[object]' && object != "[object HTMLSelectElement]")
    {
        alert('객체가 아닙니다');
        return;
    }
    for ( i = 0; i < object.length; i++)
    {
        if ( object[i].value == value )
        {
            object[i].selected = true;
            break;
        }
    }
}
/*
radio 및 checkbox 컨트롤 선택
*/
function chk_btn(object, value)
{
    var isArray = false;
    if (value.indexOf(",") > -1)
    {
        isArray = true;
    }

    value = getCheckedValue(value);

    if ( object != '[object]')
    {
        alert('객체가 아닙니다');
        return;
    }

    if ( isArray )
    {
        var i;
        for( i = 0; i < value.length; i++)
        {
            procCheck(object, value[i]);
        }
    }
    else
    {
        procCheck(object, value);
    }
}

function procCheck(object, value)
{
    if ( object.length == null)
    {
        if ( object.value == value)
        {
            object.checked = true;
        }
        return;
    }

    var i;
    for( i = 0; i < object.length; i++)
    {
        if ( object[i].value == value.replace(" ", "") )
        {
            object[i].checked = true;
            break;
        }
    }
}

function getCheckedValue(value)
{
    var arValues
    if (value.indexOf(",") > -1)
    {
        arValues = value.split(",");
    }
    else
    {
        arValues = value;
    }
    return arValues;
}
/*
checkbox의 선택된 개수를 되돌린다.
*/
function getCheckedCnt(obj)
{
    var cnt = 0;

    if (obj != "[object]")
    {
        alert("객체가 아닙니다.");
        return cnt;
    }

    for (var k=0; k<obj.length; k++)
    {
        if (obj[k].checked)
        {
            cnt++;
        }
    }
    return cnt;
}

/*
radio 및 checkbox 컨트롤 선택 여부
// function is_checked_btn
*/
function is_checked_button(obj)
{
    var i;
    var bChecked = false;

    if ( obj.length == null)
    {
        return obj.checked;
    }

    for ( i = 0; i < obj.length; i++ )
    {
        if ( obj[i].checked )
        {
            bChecked = true;
            break;
        }
    }
    return bChecked;
}

function clr_text(obj)
{
    obj.value = "";
}

function set_img(name, src)
{
    var obj = document.all(name);
    obj.src = src;
}
/*
숫자 인지 여부
*/
function isNumeric(s)
{
    /*
         var isNum = /\d/;
         if( !isNum.test(s) ) return 0;
         return 1;
    */
    var pattern = /^[0-9]+$/;
    return (pattern.test(s)) ? true : false;
}

function isDouble(s){
    var patt = /^[0-9]+(.[0-9]{1,2})?$/;
    if ( patt.test(s) ) return 0;	return 1;
}

function isNumericAll(s)
{
    if (s.length > 1)
    {
        for(var i=0; i<s.length; i++)
        {
            if (!isNumeric(s.charAt(i)))
            {
                return false;
            }
        }
    }
    else
    {
        return isNumeric(s);
    }

    return true;
}
/*
한글만으로 이루어져 있는지...
(현재 특수문자 검사 누락)
*/
function isHanOnly(s)
{
    var len;

    len = s.length;

    var isID = /^[a-z0-9_]/;
    if( !isID.test(s) ) {
        return 1;
    }
    return 0;
}
/*
한글 포함 여부
(특수 문자 처리 누락)
*/
function isHanInc(s)
{
    var len;

    len = s.length;

    var isID = /[a-z0-9_]/;
    if( !isID.test(s) ) {
        return 0;
    }
    return 1;
}
/*
문자열의 바이트 길이를 되돌린다
*/
function getByte(s)
{
    var len;
    var iBytes = 0;

    len = s.length;

    for (var i = 0; i < len; i++)  {
        //if (s.charCodeAt(i) != 32 && (s.charCodeAt(i) < 44032 || s.charCodeAt(i) > 55203))
        if (s.charCodeAt(i) == 32 || (s.charCodeAt(i) < 44032 || s.charCodeAt(i) > 55203))
        {
            iBytes++;
        }
        else
        {
            iBytes = iBytes + 2;
        }
    }
    return iBytes;
}
/*
공백 체크
*/
function isEmpty(s)
{
    if ( s == "" )
    {
        return 1;
    }
    return 0;
}

function cut_str(str, length)
{

    var tmpStr;
    var temp=0;
    var onechar;
    var tcount;
    tcount = 0;

    tmpStr = new String(str);
    temp = tmpStr.length;

    for(k=0;k<temp;k++)
    {
        if (tmpStr.charCodeAt(k) == 32 || (tmpStr.charCodeAt(k) < 44032 || tmpStr.charCodeAt(k) > 55203))
        {
            tcount++;
        }
        else
        {
            tcount+=2;
        }

        if(tcount>length) {
            tmpStr = tmpStr.substring(0,k);
            break;
        }

    }
    return tmpStr;
}
/*
해당 값의 길이(byte)를 object의 maxlength를 기반으로 검사한다.
1. obj : 입력 폼
2. msg : 에러 메세지
*/
function chk_length(obj, msg)
{
    if ( obj != "[object]")
    {
        alert("객체가 아닙니다.");
        return;
    }

    var max = obj.maxLength;

    if ( max < getByte(trim(obj.value)) )
    {
        if ( msg != "" ) alert(msg);
        obj.value = cut_str(obj.value, max-2);
        obj.focus();
        return;
    }
}

function chk_length2(obj, max_len, msg)
{
    if ( max_len < getByte(trim(obj.value)) )
    {
        if ( msg != "" ) alert(msg);
        obj.value = cut_str(obj.value, max_len-2);
        obj.focus();
        return false;
    }
    return true;
}

/*
check, radio 컨트롤의 선택된 값을 , 구분자를 이용하여 되돌린다.
*/
function get_checked_value(obj)
{
    var tmp = "";
    var len = obj.length;

    if ( len == null )
    {
        return obj.value;
    }

    for(var k = 0; k < len; k++ )
    {
        if (obj[k].checked)
        {
            tmp = tmp + "," + obj[k].value;
        }
    }

    if ( tmp != "" )
    {
        tmp = tmp.substring(1);
    }

    return tmp;
}

function chk_only_eng(obj)
{
    var s = obj.value;
    if ( s == "")
    {
        return;
    }
    var len;
    len = s.length;
    var isID = /[^a-zA-Z0-9]/;
    if( isID.test(s) ) {
        alert("영문과 숫자만 가능합니다");
        obj.focus();
        return false;
    }
    else return true;
}

function remove_select_item(obj, v)
{
    var len = obj.length;
    var k;
    for(k = 0; k < len; k++)
    {
        if (obj.options[k].value == v)
        {
            obj.remove(k);
            break;
        }
    }
}

function add_select_item(obj, text, value)
{
    var new_elem = document.createElement("OPTION");
    new_elem.text = text;
    new_elem.value = value;
    obj.add(new_elem);
}

function isExist_select_item(obj, value)
{
    var k;
    for (k = 0; k < obj.length; k++)
    {
        if ( obj.options[k].value == value )
        {
            return 1;
        }
    }
    return 0;
}

function get_select_all_item(obj)
{
    var tmp = "";
    var len = obj.options.length;

    if ( len == 0 )
    {
        return "";
    }

    for(var k=0; k<len; k++)
    {
        tmp = tmp + "," + obj.options[k].value;
    }

    if ( tmp != "" )
    {
        tmp = tmp.substring(1);
    }

    return tmp;
}

function is_selected(obj)
{
    for (var i=0; i<obj.options.length; i++)
    {
        if ( obj.options[i].selected)
        {
            return 1;
        }
    }
    return 0;
}

// trim 관련 함수
function Ltrim(str){
    var regL = /^\s+/;
    return str.replace(regL,'');
}
function Rtrim(str){
    var regR = /\s+$/;
    return str.replace(regR,'');
}
function trim(str){
    var regL = /^\s+/;
    var regR = /\s+$/;
    return str.replace(regL,'').replace(regR,'');
}
function NoSpc(str){
    var regS = /\s+/g;
    return str.replace(regS,'');
}

function fn_set_frm_value(obj, v)
{
    if ( obj == null)
    {
        return;
    }

    var elType;
    if ( obj.length != null)
    {
        /*alert(obj.length);
        alert(obj.name);
        alert(obj.tagName);
        alert(obj[0].type);
        */

        if ( obj[0].type != null && obj[0].type != "undefined" )
        {
            if ( obj[0].type == "checkbox" || obj[0].type == "radio")
            {
                elType = "check";
            }
        }
    }

    else{

        if ( obj.type == "checkbox" || obj.type == "radio")
        {
            elType = "check";
        }

    }

    if ( elType == "check" ) {
    } else if (obj.type == "file") {
        elType = "file";
    } else if (obj.tagName.toLowerCase() == "select") {
        elType = "select";
    } else {
        elType = "text";
    }

    elType = elType.toLowerCase();
    switch ( elType )
    {
        case "text" : obj.value = v; break;
//		case "hidden" : obj.value = v; break;
//		case "textarea" : obj.value = v; break;
        case "select" : selectedOptionValue( obj, v); break;
        case "check" : chk_btn( obj, v); break;
    }
}

function addField (form, fieldType, fieldName, fieldValue) {
    if (document.getElementById) {
        var input = document.createElement('INPUT');
        if (document.all) { // what follows should work
            // with NN6 but doesn't in M14
            input.type = fieldType;
            input.name = fieldName;
            input.value = fieldValue;
        }
        else if (document.getElementById) { // so here is the
            // NN6 workaround
            input.setAttribute('type', fieldType);
            input.setAttribute('name', fieldName);
            input.setAttribute('value', fieldValue);
        }
        form.appendChild(input);
    }
}

/*
select박스에 숫자를 채운다.
*/
function setSelectSeqNum(obj, startNum, endNum){
    if ( obj != null ){
        for ( var i=startNum; i<=endNum; i++ ){
            obj[obj.length] = new Option(i, i);
        }
    }
}

/*
문자 치환(정규식 사용)
*/
function replace(src, patt, dest){
    var regexp = new RegExp(patt, "gi");
    while ((arr = regexp.exec(src)) != null){
        src = src.replace(patt, dest);
    }
    return src;
}

/*
메세지 길이 체크
*/

function calculate_msglen(message)
{
    var nbytes = 0;
    for (i=0; i<message.length; i++) {
        var ch = message.charAt(i);
        if (escape(ch).length > 4) {
            nbytes += 2;
        } else if (ch != '\r') {
            nbytes++;
        }
    }
    return nbytes;
}
function assert_msglen(message, maximum)
{
    var inc = 0;
    var nbytes = 0;
    var msg = "";
    var msglen = message.length;
    for (i=0; i<msglen; i++) {
        var ch = message.charAt(i);
        if (escape(ch).length > 4) {
            inc = 2;
        } else if (ch != '\r') {
            inc = 1;
        }
        if ((nbytes + inc) > maximum) {
            break;
        }
        nbytes += inc;
        msg += ch;
    }
    return msg;
}

/* renew07에 있던 공통 js end */
///////////////////////////// Start sort order by  ///////////////////////////////
function createSort2(id, group, searchMethod) {
    //this.id = id;

    //Defualt 항목 셋팅
    $.ajax({
        url: "/ilos/co/sorting_list.acl",
        type: "POST",
        data: {
            sorting_group_id : group,
            encoding : "utf-8"
        },
        async: false,
        success: function(data){
            $("#sortable_block").html(data);
        },
        error : function(html) {
            alert("error:"+html);
        }
    });

    //항목이동처리부분
    $("#"+id).sortable({
        /*placeholder: "ui-state-highlight" ,*/
        create : function() {
            $(this).find("li").each(function() {
                if($(this).attr("m") == 'desc') {
                    $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                }
                else {
                    $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                }

                $(this).bind('dblclick',function(){
                    if($(this).attr("m") == 'desc') {
                        $(this).attr("m", "asc");
                        $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                    }
                    else {
                        $(this).attr("m", "desc");
                        $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                    }

                    var col = [];
                    var m = [];
                    $("#"+id+">li").each(function(index) {
                        col.push($(this).attr("col"));
                        m.push($(this).attr("m"));
                    });
                    var cols = col.join("$");
                    var ms = m.join("$");
                    $.ajax({
                        url: "/ilos/co/sorting_save.acl",
                        type: "POST",
                        data: {
                            sorting_group_id : group,
                            cols : cols,
                            ms : ms,
                            encoding : "utf-8"
                        },
                        async: true,
                        success: function(data){
                            //no result message
                        },
                        error : function(html) {
                            //alert("error:"+html);
                        }
                    });
                    if(typeof searchMethod == 'function') searchMethod();

                });
            });
        },
        stop : function() {
            var col = [];
            var m = [];
            $("#"+id+">li").each(function(index) {
                col.push($(this).attr("col"));
                m.push($(this).attr("m"));
            });
            var cols = col.join("$");
            var ms = m.join("$");
            $.ajax({
                url: "/ilos/co/sorting_save.acl",
                type: "POST",
                data: {
                    sorting_group_id : group,
                    cols : cols,
                    ms : ms,
                    encoding : "utf-8"
                },
                async: true,
                success: function(data){
                    //no result message
                },
                error : function(html) {
                    //alert("error:"+html);
                }
            });

            if(typeof searchMethod == 'function') searchMethod();
        }
    });
}

function createSort3(id, group, searchMethod , values) {
    //this.id = id;

    //Defualt 항목 셋팅
    $.ajax({
        url: "/ilos/co/sorting_list.acl",
        type: "POST",
        data: {
            sorting_group_id : group,
            encoding : "utf-8"
        },
        async: false,
        success: function(data){
            $("#sortable_block").html(data);
        },
        error : function(html) {
            alert("error:"+html);
        }
    });

    //항목이동처리부분
    $("#"+id).sortable({
        /*placeholder: "ui-state-highlight" ,*/
        create : function() {
            $(this).find("li").each(function() {
                if($(this).attr("m") == 'desc') {
                    $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                }
                else {
                    $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                }

                $(this).bind('dblclick',function(){
                    if($(this).attr("m") == 'desc') {
                        $(this).attr("m", "asc");
                        $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                    }
                    else {
                        $(this).attr("m", "desc");
                        $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                    }

                    var col = [];
                    var m = [];
                    $("#"+id+">li").each(function(index) {
                        col.push($(this).attr("col"));
                        m.push($(this).attr("m"));
                    });
                    var cols = col.join("$");
                    var ms = m.join("$");
                    $.ajax({
                        url: "/ilos/co/sorting_save.acl",
                        type: "POST",
                        data: {
                            sorting_group_id : group,
                            cols : cols,
                            ms : ms,
                            encoding : "utf-8"
                        },
                        async: true,
                        success: function(data){
                            //no result message
                        },
                        error : function(html) {
                            //alert("error:"+html);
                        }
                    });
                    if(typeof searchMethod == 'function') searchMethod(values);

                });
            });
        },
        stop : function() {
            var col = [];
            var m = [];
            $("#"+id+">li").each(function(index) {
                col.push($(this).attr("col"));
                m.push($(this).attr("m"));
            });
            var cols = col.join("$");
            var ms = m.join("$");
            $.ajax({
                url: "/ilos/co/sorting_save.acl",
                type: "POST",
                data: {
                    sorting_group_id : group,
                    cols : cols,
                    ms : ms,
                    encoding : "utf-8"
                },
                async: true,
                success: function(data){
                    //no result message
                },
                error : function(html) {
                    //alert("error:"+html);
                }
            });

            if(typeof searchMethod == 'function') searchMethod(values);
        }
    });
}

function createSort(id, searchMethod) {
    //this.id = id;

    $("#"+id).sortable({
        /*placeholder: "ui-state-highlight" ,*/
        create : function() {
            $(this).find("li").each(function() {
                if($(this).attr("m") == 'desc') {
                    $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                }
                else {
                    $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                }

                $(this).bind('dblclick',function(){
                    if($(this).attr("m") == 'desc') {
                        $(this).attr("m", "asc");
                        $(this).find("img").attr("src", "/ilos/images/sort_asc.gif");
                    }
                    else {
                        $(this).attr("m", "desc");
                        $(this).find("img").attr("src", "/ilos/images/sort_desc.gif");
                    }
                    if(typeof searchMethod == 'function') searchMethod();
                });
            });
        },
        stop : function() {
            if(typeof searchMethod == 'function') searchMethod();
        }
    });
}

function getSortString(id) {
    var str = "";
    $("#"+id+">li").each(function(index) {
        str += index == 0  ? "" : ",";
        str += $(this).attr("col") + " " + $(this).attr("m");
    });

    return str;
}
///////////////////////////// End sort order by  ///////////////////////////////