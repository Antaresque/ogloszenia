<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$result = DB::query("SELECT * FROM kategorie WHERE id_kat_nad IS NULL");
$data = array();

foreach($result as $row){
    $temp = array('id' => $row['id_kat'], 'nazwa' => $row['nazwa']);
    array_push($data, $temp);
}
echo json_encode($data);
