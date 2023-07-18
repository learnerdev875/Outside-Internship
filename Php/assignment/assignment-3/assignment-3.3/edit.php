<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Movie Data</title>
</head>
<body>
    <?php
        include 'conn.php';
        include 'Movie.php';
        if(isset($_GET['id'])){
            $movie_id = $_GET['id'];

            $sql = "SELECT * FROM movie WHERE movie_id=$movie_id";
            $result = $conn->query($sql);

            if($result->num_rows >0){
                while($row = $result->fetch_assoc()){
                    echo "<form method='post'>
                    <label for='movie_title'>Movie Title</label>
                    <input type='text' name='movie_title' id='movie_title' placeholder='Movie Title' value='".$row['movie_name']."'/><br/><br/>
                    <label for='movie_director'>Movie Director</label>
                    <input type='text' name='movie_director' id='movie_director' value='".$row['movie_director']."'><br/> <br>
                    <label for='movie_genre'>Genre</label>
            <input type='text' name='movie_genre' id='movie_genre' value='".$row['genre']."'><br/> <br>
            <label for='movie_year'>Year</label>
            <input type='text' name='movie_year' id='movie_year' value='".$row['release_year']."'><br/> <br>
            <input type='submit' value='Edit'>
                    </form>";
                }

                if($_SERVER['REQUEST_METHOD'] == 'POST'){

                    $title = $_POST['movie_title'];
                    $director = $_POST['movie_director'];
                    $genre = $_POST['movie_genre'];
                    $release_year = $_POST['movie_year'];
                
                    $movie = new Movie($conn);
                    $movie->updateMovie($movie_id,$title,$director,$release_year,$genre);
                }
            
            }
            else{
                echo 'Error: '.$conn->error;
            }
        }

    ?>
</body>
</html>