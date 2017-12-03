<?php
require_once('_host.php');

if(!empty(file_get_contents('php://input'))){
  $array = json_decode(file_get_contents('php://input'), true);
  $id_kat = $array['id'];
  $result = array();

  while($id_kat != null){
    $temp = DB::queryFirstRow("SELECT * FROM kategorie WHERE id_kat = %i", $id_kat);
    array_push($result, $temp);
    $id_kat = $temp['id_kat_nad'];
  }
  $result = array_reverse($result);

  echo json_encode($result);
}


//id

//array (=>)
