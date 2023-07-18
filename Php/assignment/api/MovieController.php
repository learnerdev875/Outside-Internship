<?php
class MovieController
{
    private $response;
    private $method;
    private $uri;
    private $uriSegments;
    private $result;
    private $conn;
    function __construct($conn)
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->uri = $_SERVER['REQUEST_URI'];
        $this->uriSegments = explode("/", parse_url($this->uri, PHP_URL_PATH));
        $this->conn = $conn;
    }

    function getResponse()
    {
        switch ($this->method) {
            case 'GET':
                return $this->response = $this->getAllMovies();
                break;
            case 'POST':
                return $this->response = $this->addMovie();
                break;
            case 'PUT':
                return $this->response = $this->editMovie();
                break;
            case 'DELETE':
                return $this->response = $this->deleteMovie();
                break;
            default:
                return $this->response = $this->noResponse();
        }
    }

    function getAllMovies()
    {
        $sql = 'select * from movie';
        $res = $this->conn->query($sql);
        $this->result = array();
        if ($res->num_rows > 0) {
            while ($row = $res->fetch_assoc()) {
                array_push($this->result, $row);
            }
        } else {
            echo "0 results";
        }

        return json_encode($this->result);
    }

    function addMovie()
    {
        $this->result = array("Response" => "Successfully added new movie");
        return json_encode($this->result);
    }

    function editMovie()
    {
        $this->result = array("Response" => "Successfully edited movie");
        return json_encode($this->result);
    }

    function deleteMovie()
    {
        $this->result = array("Response" => "Successfully deleted movie");
        return json_encode($this->result);
    }

    function noResponse()
    {
        $this->result = array("Response" => "No response");
        return json_encode($this->result);
    }

    function __deconstruct()
    {
        $this->conn->close();
    }
}
?>