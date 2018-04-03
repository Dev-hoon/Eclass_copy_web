<?php
  $connect = mysqli('localhost','root','mysql0101','Eclass_project');

  $_query = 'INSERT INTO FAQ_content (created, cre_user, post_title, FAQ_type, user_type, content) VALUES (now(), \''.$_POST[user].'\'
  , \''.$_POST[post_title].'\' , \''.$_POST[FAQ_title].'\', \''.$_POST[content].'\'));';

?>