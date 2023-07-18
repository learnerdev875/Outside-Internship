<?php

    include 'conn.php';
    include 'Movie.php';

    if(isset($_GET['id'])){
        $movie_id = $_GET['id'];

        $movie = new Movie($conn);
        $movie->deleteMovie($movie_id);
    }
?>