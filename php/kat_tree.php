<?php
require_once('_host.php');

if(!empty(file_get_contents('php://input'))){
  $array = json_decode(file_get_contents('php://input'), true);
  $id_kat = $array['id'];
  $result = DB::queryFirstRow("SELECT * FROM kategorie WHERE id_kat = %i", $id_kat);

  echo json_encode($result);
}


//id

//array (=>)
