<?php

  $mysql_hostname = 'localhost';
  $mysql_username = 'root';
  $mysql_password = 'root123';
  $mysql_database = 'eclass_db';
  $mysql_port = '3306';
  $mysql_charset = 'utf8';

  //1. DB 연결
  $connect = new mysqli($mysql_hostname, $mysql_username, $mysql_password, $mysql_database, $mysql_port);

function call_left(){
  if($connect->connect_errno){
    echo '[연결실패] : '.$connect->connect_error.''; 
    echo '</br>';
  } else { 
  //echo '[연결성공]';
  }

  $_query= 'SELECT (title) From FAQ_title_list ;';
  $_title_list = mysqli_query($connect,$_query);

  //출력하기
  while($current_title = mysqli_fetch_array($_title_list)){
    // 실제 데이터 읽어오기 
    $_query = 'SELECT user_type,title,FAQ_type FROM FAQ_tb where FAQ_type=\''.$current_title['title'].'\';';
    $_FAQ_DATA = mysqli_query($connect, $_query);

    echo '<div class="FAQ_content_table">';
    echo '<div class="FAQ_content_title">'.$current_title['title'].'</div>';

    while($_current_data = mysqli_fetch_array($_FAQ_DATA)){
      if (strcmp($current_title['title'],$_current_data['FAQ_type'])==0){
        echo '<div class="FAQ_content">';
        echo '<span class="FAQ_content_span"> [' .$_current_data['user_type']. ']  '. $_current_data['title'] . '</span> ';
        echo '</div>';
      }//if  
    }//while

    
    echo "</div>";
  }//while
}//function

?>


<?php
/*
  //title 리스트 받아오기
  $_query= 'SELECT (title) From FAQ_title_list ;';
  $_title_list = mysqli_query($connect,$_query);


  // 실제 데이터 읽어오기 
  $_query = 'SELECT user,user_type,title,FAQ_type FROM FAQ_tb;';
  $_FAQ_DATA = mysqli_query($connect, $_query);
  $_FAQ_DATA_DE = $_FAQ_DATA;

  //출력하기
 
  while($current_title = mysqli_fetch_array($_title_list)){
    echo '<div class="FAQ_content_table">';
    echo '<div class="FAQ_content_title">'.$current_title['title'].'</div>';

    while($_current_data = mysqli_fetch_array($_FAQ_DATA)){
      if (strcmp($current_title['title'],$_current_data['FAQ_type'])==0){
        echo '<div class="FAQ_content">';
        echo '<span class="FAQ_content_span"> [' .$_current_data['user_type']. ']  '. $_current_data['title'] . '</span> ';
        echo '</div>';
      }//if
       echo "끝~~~~!!!".'</BR>';
    }//while
    echo "</div>";
    $_FAQ_DATA = mysqli_query($connect, $_query);
  }//while
  */


  //title 리스트 받아오기

  
/*
  $_query= 'SELECT user, user_type, FAQ_type, title From FAQ_tb ;';
  $_source = mysqli_query($connect,$_query);
  $_result_res= mysqli_fetch_array($_source); 


echo $_source;
echo $_result_res;
*/
/*

  foreach($_result_title['title'] $key as $value){

    echo '<div class="FAQ_content_table">';

      echo '<div class="FAQ_content_title">"'.'$title'.'"</div>';
/*
      foreach($_result_res){ // 전부를 한번식 봄 ){
        if($_result_res['title' == $_key){
        echo '<div class="FAQ_content">'.$_query;
        echo '<span class="FAQ_content_span"> ['.$_result_res['user_type'].']  '.$_result_res['title'].'</span> ';
        echo '</div>';
        }//if
      }//foreach
*/
      /*
      //이럼 너무 많이 돌아야 하지 않나 ??                
      echo "</div>";
  }
  //function Show_title_left(){
    $_query = '['.'$user_type'.']  '.'$title';


  	echo '<div class="FAQ_content_table">';

    echo '<div class="FAQ_content_title">"'.'$FAQ_type'.'"</div>';

    echo '<div class="FAQ_content">'.$_query;
                                

    echo "</div>";

  //}//좌측 리스트 출력
*/

/*
  function Show_list_right(){

  	$list_right = array('_HOT', '_NEW', '_UPDATE');

  	$row = mysql_fetch_array($list_result);

  	foreach($list_right as $key => $value){

  		echo "<div class="FAQ_content_side_table">";

   		echo "<div class="FAQ_content_title">".$value."</div>";
   			$count = 1;
   			foreach(){
   				echo "<div class="FAQ_right_title">".$count." ".$FAQ_type."  ".$title."</div>";
   				count++;
   			}//while
   
   		echo "</div>";
    }//while
  }
  
*/

?>