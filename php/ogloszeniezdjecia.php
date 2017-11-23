<?php
require_once('_host.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');//json output
header('Content-Type: application/json'); //json output

$array = json_decode(file_get_contents('php://input'), true);
$id_og = $array['id'];
$result = DB::query("SELECT * FROM zdjecia WHERE id_og = %i", $id_og);
$array = array();

foreach($result as $row){
  array_push($array, $row['nazwa']);
}
echo json_encode($array);

