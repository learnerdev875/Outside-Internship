<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic functions in php</title>
</head>
<body>
    <?php
    //__call($name, $parameters) Method: This method gets called when a method or property is called which has not been defined.
        class MagicMethod1{
            function __call($name,$parameters){
                echo 'Name of method is '.$name.'<br/>';
                echo 'Parameters provided are: '.'<br/>';
                print_r($parameters);
            }
        }

        //__get($name) Method: This method gets called when an inaccessible (private or protected  ) variable or non-existing variables are used.
        class MagicMethod2{
            public $age;
            private $name;

            function __construct($name,$age){
                $this->age = $age;
                $this->name = $name;
            }

            function __get($name){
                echo '<br/>'."You are trying to get '".$name."' which is either inaccessible or non existing member";
            }
        }

        $obj1 = new MagicMethod1();
        $obj1->getStudents('Ram','Shyam');

        $obj2 = new MagicMethod2(12,'Sita');
        $obj2->age;
        $obj2->name;
        
    ?>
</body>
</html>