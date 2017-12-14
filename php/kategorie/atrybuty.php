<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_kat = $input['id'];
$data = array();

while($id_kat != null){
  $temp = DB::queryFirstRow("SELECT * FROM kategorie WHERE id_kat = %i", $id_kat);
  $temp2 = json_decode($temp['atrybuty']);
  $data = array_merge($temp2, $data);
  $id_kat = $temp['id_kat_nad'];
}

$result = $data;

