<?php
require_once('_host.php');

if(!empty(file_get_contents('php://input')))
{
  $array = json_decode(file_get_contents('php://input'), true);
  $id = $array['id'];

  $result = DB::query("SELECT * FROM ogloszenia WHERE id_uz LIKE %i", $id);

  if(DB::count() == 0) $result = array('result' => false);
  echo json_encode($result);
}
