<?php
    class Movie{
        private $conn;

        function __construct($conn){
            $this->conn = $conn;
        }
        function addMovie($title,$director,$release_year,$genre){
            $sql = "INSERT INTO movie(movie_name,movie_director,genre,release_year) VALUES('$title','$director','$genre','$release_year')";
        
            if($this->conn->query($sql) === TRUE){
                header('Location:index.php');
            }
            else{
                echo 'Error'.$this->conn->error;
            }
            
          }
          function getMovies(){
            $sql = 'SELECT *  from movie';
            $result =$this->conn->query($sql);
  
            echo '<table>';
            echo '<tr><th>Movie Name</th><th>Genre</th><th>Director</th><th>Year</th><th>Actions</th>';
            if($result->num_rows > 0){
              while($row = $result->fetch_assoc()){
                echo "<tr><td>".$row['movie_name']."</td><td>".$row['genre']."</td><td>".$row['movie_director']."</td><td>".$row['release_year']."</td><td><a class='edit_btn' href='edit.php?id=".$row['movie_id']."'>Edit</a><a class='delete_btn' href='delete.php?id=".$row['movie_id']."'>Delete</a></td></tr>";
              }
            }
            echo '</table>';
          }

          function deleteMovie($id){
            $sql = "DELETE FROM movie WHERE movie_id = '$id'";

            if($this->conn->query($sql) === TRUE){
              header('Location:index.php');
            }
            else {
              echo 'Error: '.$this->conn->error;
            }
          }

          function updateMovie($id,$title,$director,$release_year,$genre){
            $sql = "UPDATE movie SET movie_name='$title',movie_director='$director', genre='$genre',release_year='$release_year' WHERE movie_id = '$id'";

            if($this->conn->query($sql) === TRUE){
              header('Location:index.php');
            }
            else {
              echo 'Error: '.$this->conn->error;
            }

          }

          function __deconstruct(){
            $this->conn->close();
          }
    }
?>