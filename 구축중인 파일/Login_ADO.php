<?php
    // 받아온 파일 저장
    $userId = $_POST['userId'];
    $userPassword = $_POST['userPassword'];

    //서버에 있는 DB에 접속(DB ID/PW를 root/root이라 가정)
    $link = mysql_connet("localhost", "root", "root"):
    mysql_select_db("ID_PW_TB");

    //파일 검색
    $ID_query = "SELECT * FROM userId where userId=".$userId.";"
    $result = mysql_query($ID_query);
    if(!result)

?>