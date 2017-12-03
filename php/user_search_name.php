<?php
require_once('_host.php');

if(!empty(json_decode(file_get_contents('php://input')))){
  $array = json_decode(file_get_contents('php://input'), true);
  $nazwa = $array['nazwa'];
  $result = DB::queryFirstRow("SELECT id_uz FROM uzytkownicy WHERE login LIKE %s", $nazwa);
  echo json_encode($result);
}
