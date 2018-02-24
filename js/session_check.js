//과목 사용자 세션 에러처리 결과(교수)
function pfRoomAuthCheck(data) {
    if(data.messageCode == "E_NOSESSION") {
        document.location.href = "/ilos/main/member/login_form.acl";
        return;
    }
    else if(data.messageCode == "E_USER_NOT_SAME") {
        document.location.href="/ilos/lo/logout.acl";
        return;
    }
    else if(data.messageCode == "E_ROOM_AUTH") {
        document.location.href="/ilos/pf/course/submain_form.acl";
        return;
    }
}

function pfSessionRoomCheck(ud,ky){
    var pass = false;
    $.ajax({
        url: "/ilos/co/pf_session_room_auth_check.acl",
        type: "POST",
        data: {
            ud : ud,
            ky : ky,
            returnData : "json",
            encoding : "utf-8"
        },
        async: false,
        success: function(data){
            if(data.isError){
                alert(data.message);
                pfRoomAuthCheck(data);
                pass = true;
            }
            if(data.isKjkey){
                document.location.href="/ilos/pf/course/submain_form.acl";
                pass = true;
            }
        },
        error : function(html) {
            alert("error:"+html);
        }
    });
    return pass;
}

//과목 사용자 세션 에러처리 결과(학생)
function stRoomAuthCheck(data) {
    if(data.messageCode == "E_NOSESSION") {
        document.location.href = "/ilos/main/member/login_form.acl";
        return;
    }
    else if(data.messageCode == "E_USER_NOT_SAME") {
        document.location.href="/ilos/lo/logout.acl";
        return;
    }
    else if(data.messageCode == "E_ROOM_AUTH") {
        document.location.href="/ilos/st/course/submain_form.acl";
        return;
    }
}

function stSessionRoomCheck(ud,ky){
    var pass = false;
    $.ajax({
        url: "/ilos/co/st_session_room_auth_check.acl",
        type: "POST",
        data: {
            ud : ud,
            ky : ky,
            returnData : "json",
            encoding : "utf-8"
        },
        async: false,
        success: function(data){
            if(data.isError){
                alert(data.message);
                pfRoomAuthCheck(data);
                pass = true;
            }
            if(data.isKjkey){
                document.location.href="/ilos/st/course/submain_form.acl";
                pass = true;
            }
        },
        error : function(html) {
            alert("error:"+html);
        }
    });
    return pass;
}