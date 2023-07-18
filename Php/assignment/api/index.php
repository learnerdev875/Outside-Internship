<?php
    include './config/database.php';
     include 'MovieController.php';
     $obj = new  MovieController($conn);

    header('Content-Type: application/JSON');
     echo $obj->getResponse();
?>