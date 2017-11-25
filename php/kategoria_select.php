<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$array = json_decode(file_get_contents('php://input'), true);
$result = DB::queryFirstRow("SELECT * FROM kategorie");

foreach($result as $row){
    array_push($array, $row['nazwa']);
  }
  echo json_encode($array);
  