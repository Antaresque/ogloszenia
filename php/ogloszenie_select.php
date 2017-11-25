<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$array = json_decode(file_get_contents('php://input'), true);
$id_og = $array['id'];
$result = DB::queryFirstRow("SELECT * FROM ogloszenia WHERE id_og = %i", $id_og);

echo json_encode($result);

