<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
  if(isset($_COOKIE['PHPSESSID'])){
   //echo '<script>document.location.href=\'http://192.168.56.102\'</script>';
  }

 $_con = mysqli_connect('localhost','root','mysql0101','Eclass_project');

//error message check
  if(!$_con){
    echo mysqli_connect_errno();
//다른 페이지로 이동
}
 mysqli_query($_con,'SET NAMES utf8;');

 $_query = 'SELECT FAQ_title, place FROM FAQ_title_list ; ';

 $_FAQ_title = mysqli_query($_con,$_query);

 if(!isset($_SESSION['menu']))
   $_SESSION['menu'] = array();
 
 while($_temp=mysqli_fetch_array($_FAQ_title,MYSQLI_ASSOC)){

 array_push($_SESSION['menu'], $_temp);

 }

 if(!isset($_SESSION['FAQ_POST']))
   $_SESSION['FAQ_POST'] = array();

 $_query = 'SELECT post_key, cre_user, created, post_title, user_type, FAQ_type FROM FAQ_content ;';

 $_FAQ_post = mysqli_query($_con,$_query);

 while($_temp=mysqli_fetch_array( $_FAQ_post,MYSQLI_ASSOC)){

 array_push($_SESSION['FAQ_POST'], $_temp);

 }

?>
