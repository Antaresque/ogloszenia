<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$array = json_decode(file_get_contents('php://input'), true);
$id_kat = $array['id_kat'];
$result = DB::query("SELECT * FROM kategorie WHERE id_kat_nad = %i", $id_kat);

foreach($result as $row){
    array_push($array, $row['nazwa']);
  }
  echo json_encode($array);
  
