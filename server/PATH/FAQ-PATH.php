<?php
 $_con = mysqli_connect('localhost','root','mysql0101','Eclass_project');

//error message check
  if(!$_con){
    echo mysqli_connect_errno();
//다른 페이지로 이동
}
?>
