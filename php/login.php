<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json'); //json output

require_once('host.php');
require_once('hash.php');
require_once('JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
{
  $array = json_decode(file_get_contents('php://input'), true);
  $login = $array['login'];
  $pass = $array['pass'];

  $result = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE login = %s", $login);

  $login_result = false;

  if(validate_pw($pass, $result['haslo'])) {
    $login_result = true;
    $data = array('login' => $login); //TODO: dodac do bazy danych i tokena admin/nonadmin
    $token = JWT::encode($data, $jwt_secret);
    $data = array("login_result" => $login_result, "jwt" => $token);
    //data logowania w rekordzie
  } else $data = array("login_result" => $login_result);

  echo json_encode($data);
}


