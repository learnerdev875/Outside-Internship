<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Assignment 1</title>
</head>
<body>
    <?php
    $myfile = fopen('input.txt','r') or die('Unable to open file!');
    $sum = 0;
    $sumarray = array();
    
    while(!feof($myfile)){
        $line = fgets($myfile);
        if($line == "\n"){
            array_push($sumarray,$sum);
            $sum = 0;
        }
        $sum += intval($line);
    }

    echo "The monk carrying highest calories is ". max($sumarray);
    echo '<br/>';
    rsort($sumarray);
    echo 'Following are the top three monks carrying highest calories: '.'<br/>';
    for($x=0;$x<3;$x++){
        echo $sumarray[$x]. '<br/>';
    }
    ?>
</body>
</html>