<?php
    $servername = 'localhost';
    $username = 'dev_outside';
    $password = 'hello2817';
    $dbname = 'dev_outside';

    //creating connection
    $conn = new mysqli($servername,$username,$password,$dbname);

    //checking connection
    if($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }
?>