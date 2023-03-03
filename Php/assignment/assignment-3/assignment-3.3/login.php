<?php
   require_once('conn.php');
   //sql query to check whether the user is available in database or not
   $sql = "SELECT * FROM users WHERE email='".$_POST['email']."' AND password='".$_POST['password']."'";
   $result = $conn->query($sql);

   if($result->num_rows > 0){
    header('Location:index.php');
   }
   else{
    echo 'Unauthorized user';
   }

   $conn->close();

?>