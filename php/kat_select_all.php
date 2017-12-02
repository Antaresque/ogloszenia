<?php
require_once('_host.php');

$result = DB::query("SELECT * FROM kategorie WHERE id_kat_nad IS NULL");
$data = array();

foreach($result as $row){
    array_push($data, $row);
}
echo json_encode($data);
