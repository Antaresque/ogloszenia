<?php
require_once('_host.php');

if(!empty(file_get_contents('php://input'))){
  $array = json_decode(file_get_contents('php://input'), true);
  $id = $array['id'];
  $result = DB::query("SELECT * FROM kategorie WHERE id_kat_nad = %i", $id);

  echo json_encode($result);
}

