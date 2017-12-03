<?php
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
    $array = json_decode(file_get_contents('php://input'), true);
    if($payload->id == $array['id']){
        $id = $array['id'];
        $result = DB::query("SELECT * FROM wiadomosci WHERE id_nad = %i", $id);
        echo json_encode($result);
    }
    else http_response_code(401);
  }
  else {
    http_response_code(401);
  }
}
 