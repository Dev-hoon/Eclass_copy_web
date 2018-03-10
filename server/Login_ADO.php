<?php


    //서버에 있는 DB에 접속(DB ID/PW를 root/root이라 가정)
    $link = mysql_connet("localhost", "root", "root"):
    mysql_select_db("Login_DB");

    //파일 검색
    $ID_query = "SELECT * FROM Login_tb where userId=".$userId.";"
    $result = mysql_query($ID_query);

    //비밀번호값 확인
    if(!result)

?>