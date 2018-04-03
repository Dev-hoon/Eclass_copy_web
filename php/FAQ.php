<?php
ini_set("include_path","/var/www/html/server/DTO/");
include "/var/www/html/server/DTO/FAQ-DTO.php";

echo '<div class="FAQ_left_wrap">';

foreach($_SESSION['menu'] as  $array){

if(strcmp($array["place"],"left")==0){
    echo '<div class="FAQ_content_table">';
    echo '<div class="FAQ_content_title">'.$array["FAQ_title"].'</div>';

    foreach($_SESSION['FAQ_POST'] as $POST){
       	if (strcmp($array["FAQ_title"],$POST["FAQ_type"])==0){
          echo '<div class="FAQ_content">';
          echo '<li class="FAQ_content_li"> [' .$POST['user_type']. ']  '. $POST['post_title'];
          echo '</div>';
	}
     }//while
    echo "</div>";
   }//if 
  }//while
echo "</div>";

echo '<div class="FAQ_right_wrap">';

foreach($_SESSION['menu'] as  $array){

if(strcmp($array["place"],"right")==0){
    echo '<div class="FAQ_content_side_table">';
    echo '<div class="FAQ_content_title">'.$array["FAQ_title"].'</div>';

    foreach($_SESSION['FAQ_POST'] as $POST){
       	if (strcmp($array["FAQ_title"],$POST["FAQ_type"])==0){
          echo '<div class="FAQ_content">';
          echo '<li class="FAQ_content_li"> [' .$POST['user_type']. ']  '. $POST['post_title'];
          echo '</div>';
	}
     }//while
    echo "</div>";
   }//if 
  }//while

echo '</div>';
?>

