<?php
require_once('host.php');
require_once('hash.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json'); //json output

if(!empty(file_get_contents('php://input')))
{
  $array = json_decode(file_get_contents('php://input'), true);
  $login = $array['login'];
  $pass = $array['pass'];

  $result = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE login = %s", $login);

  $login_result = false;

  if(validate_pw($pass, $result['haslo'])) {
    $login_result = true;
    //jwt token?
    //data logowania w rekordzie
  }

  $result->close();
  $connect->close();

  echo json_encode(array("login_result" => $login_result));
}


