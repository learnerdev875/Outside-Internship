<!-- Encapsulation allows us to hide attributes and methods inside a class so that other classes won’t have access to them. Yes Php supports encapsulation through the use of access modifiers such as public, private and protected. -->
<?php
    class Car{
        public $name;

        function __construct($name){
            $this->name = $name;
        }

        public function getCarName(){
            return "The name of this car is ".$this->name;
        }
    }

    $car1 = new Car('mercedes');
    echo $car1->getCarName().'<br/>';
    echo 'The name of car is accessed from outside the class and it is '.$car1->name.'<br/>'; //This is printed because the property name of class is set to public and can be accessed from anywhere

    class Car2{
        private $name;

        function __construct($name){
            $this->name = $name;
        }

        public function getCarName(){
            return "The name of this car is ".$this->name;
        }
    }

    $car2 = new Car2('Tesla');
    echo $car2->getCarName().'<br/>';
    //echo $car2->name; //This throws a fatal error
    class ParentClass {

        protected $parentMsg = "protected parent attribute<br>";
    
        protected function parentDisplay() {
            echo "protected parent method<br>";
            echo $this->parentMsg;
        }
    }
    
    class ChildClass extends ParentClass {
    
        protected $childMsg = "Protected Child attribute.<br>";
    
        public function childDisplay() {
            echo "Public Child method to display protected parent members:<br>";
            $this->parentDisplay();
        }
    
    }
    
    $parent = new ParentClass();
    // $parent->parentDisplay(); //we cannot access protected function from outside

    $child = new ChildClass();
    $child->childDisplay();  //we can access protected either from parent or child

?>