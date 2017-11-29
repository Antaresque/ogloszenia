<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$result = DB::query("SELECT * FROM ogloszenia WHERE promowane = %i ORDER BY RAND() LIMIT 20", 1);

echo json_encode($result);
