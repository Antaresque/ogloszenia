<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_kat = $input['id'];
$data = array();

while($id_kat != null){
  $temp = DB::queryFirstRow("SELECT * FROM kategorie WHERE id_kat = %i", $id_kat);
  array_push($data, $temp);
  $id_kat = $temp['id_kat_nad'];
}
$data = array_reverse($data);

$result = $data;

