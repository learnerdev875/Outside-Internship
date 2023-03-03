<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie Dashboard</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Movie Dashboard</h1>
    <a href="add.php" class='add_btn'>Add Movie</a>
    <?php
      include 'conn.php';
      include 'Movie.php';

      $movie = new Movie($conn);
      $movie->getMovies();
    ?>
  </body>
</html>
