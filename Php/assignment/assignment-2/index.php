<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php assignment 2.1</title>
</head>
<body>
    <?php
    
    abstract class Student{
        public $name;
        public $class;
        public $roll;

        function __construct($name,$class,$roll){
            $this->name = $name;
            $this->class = $class;
            $this->roll = $roll;
        }

        abstract function calculateAverage();
    }

    class ComputerScience extends Student{
        public $digitalLogic;
        public $computerNetwork;
        public $DBMS;

        function __construct($name,$class,$roll,$digitalLogic,$computerNetwork,$DBMS){
            parent::__construct($name,$class,$roll);
            $this->digitalLogic = $digitalLogic;
            $this->computerNetwork = $computerNetwork;
            $this->DBMS = $DBMS;
        }

        function calculateAverage(){
            $average = ($this->digitalLogic + $this->computerNetwork + $this->DBMS)/3;
            echo "The average marks ".$this->name." of class ".$this->class." with roll no ".$this->roll." got in computer science is ".$average.'<br/>';
        }
    }

    class Mathematics extends Student{
        public $algebra;
        public $geometry;
        public $sets;

        function __construct($name,$class,$roll,$algebra,$geometry,$sets){
            parent::__construct($name,$class,$roll);
            $this->geometry = $geometry;
            $this->algebra = $algebra;
            $this->sets = $sets;
        }

        function calculateAverage(){
            $average = ($this->geometry + $this->sets + $this->algebra)/3;
            echo "The average marks ".$this->name." of class ".$this->class." with roll no ".$this->roll." got in mathematics is ".$average;
        }
    }

    $obj1 = new ComputerScience('Ram',10,17,80,78,90);
    $obj1->calculateAverage();

    $obj2 = new Mathematics('Ram',10,17,90,80,70);
    $obj2->calculateAverage();
    ?>
</body>
</html>