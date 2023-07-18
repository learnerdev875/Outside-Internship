<?php

    include 'conn.php';
    include 'Movie.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $title = $_POST['movie_title'];
        $director = $_POST['movie_director'];
        $genre = $_POST['movie_genre'];
        $release_year = $_POST['movie_year'];
    
        if(!empty($title) && !empty($director) && !empty($genre) && !empty($release_year)){
            $movie = new Movie($conn);
            $movie->addMovie($title,$director,$release_year,$genre);
        }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Movie</title>
</head>
<body>
    <h1>Add New Movie</h1>
    <form method='post'>
        <input type="text" name='movie_title' id='movie_title' placeholder='Movie Name'><br/> <br>
        <input type="text" name='movie_director' id='movie_director' placeholder='Director'><br/> <br>
        <input type="text" name='movie_genre' id='movie_genre' placeholder='Genre'><br/> <br>
        <input type="text" name='movie_year' id='movie_year' placeholder='year'><br/> <br>
        <input type="submit" value="Add">
    </form>
</body>
</html>