<?php

class MyInt {
    private $value;

    public function __construct($value) {
        $this->value = $value;
    }

    public function __toString() {
        return (string)$this->value;
    }

    public function __invoke() {
        return $this->value;
    }

    public function __set($name, $value) {
        if ($name == 'value') {
            $this->value = $value;
        }
    }

    public function __get($name) {
        if ($name == 'value') {
            return $this->value;
        }
    }

    public function __call($name, $arguments) {
        if ($name == 'decrease') {
            $this->value--;
        }
    }

    public function __destruct() {
        echo "The value of the integer is now {$this->value}\n";
    }
}

$myInt = new MyInt(5);
echo "The initial value of the integer is {$myInt}\n";
$myInt->decrease();
echo "After decreasing by 1, the value of the integer is {$myInt}\n";
?>