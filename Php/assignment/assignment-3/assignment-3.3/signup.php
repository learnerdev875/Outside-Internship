<?php
      require_once('conn.php');

        //Getting form data
        $fullName = $_POST['fullname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];

        //query to insert new users
        $sql = "INSERT INTO users(fullName,email,password,confirm_password) VALUES ('".$fullName."','".$email."','".$password."','".$confirm_password."')";

        if($conn->query($sql) === TRUE){
            header('Location:signup.html');
        }
        else {
            echo 'Error: '.$sql.'<br/>'.$conn->error;
        }

        //closing database
        $conn->close();
?>