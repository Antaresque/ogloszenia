<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
{
  $jwt = getBearerToken();
  if(isset($jwt)){
    try{
      $payload = JWT::decode($jwt, $jwt_secret, array('HS256'));
    }
    catch(SignatureInvalidException $e){
      http_response_code(401);
    }
    catch(UnexpectedValueException $e){
      echo $e->getMessage();
    }

    if($payload->funkcja == 'admin'){
      $array = json_decode(file_get_contents('php://input'), true);
      $nazwa = $array['nazwa'];
      $atrybuty = array('atrybut1', 'atrybut2', 'atrybut3'); //test <---

      DB::insert('kategorie', array(
        'nazwa' => $nazwa,
        'atrybuty' => json_encode($atrybuty)));
    }
    else http_response_code(401);
  }
  else {
    http_response_code(401);
  }
}
