<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$result = DB::query("SELECT * FROM kategorie WHERE id_kat_nad IS NULL");
$data = array();

foreach($result as $row){
    array_push($data, $row['nazwa']);
}
echo json_encode($data);
