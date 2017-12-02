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

    if($payload->funkcja == 'admin'){
      $array = json_decode(file_get_contents('php://input'), true);
      $id_kat = $array['id_kat']; //id kategorii nadrzędnej z listy
      $nazwa = $array['nazwa'];

      DB::insert('kategorie', array(
        'nazwa' => $nazwa,
        'id_kat_nad' => $id_kat));

      echo json_encode(array('result' => true));
    }
    else http_response_code(401);
  }
  else {
    http_response_code(401);
  }
}
