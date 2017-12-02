<?php
require_once('_host.php');

if(!empty(json_decode(file_get_contents('php://input')))){
  $array = json_decode(file_get_contents('php://input'), true);
  $id_og = $array['id'];
  $result = DB::queryFirstRow("SELECT * FROM ogloszenia WHERE id_og = %i", $id_og);

  echo json_encode($result);
}

