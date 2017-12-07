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
    $id_wiad = $array['id'];
    $id_uz = $payload->id;

    $result = DB::queryFirstRow("SELECT w.*, a.login nadawca, b.login odbiorca
                                 FROM wiadomosci w
                                  INNER JOIN uzytkownicy a ON w.id_nad = a.id_uz
                                  INNER JOIN uzytkownicy b ON w.id_od = b.id_uz
                                 WHERE id_wiad = %i", $id_wiad);
    if($id_uz == $result['id_nad'] || $id_uz == $result['id_od'] || $payload->funkcja == 'admin'){
      echo json_encode($result);
    }
    else http_response_code(401);
  }
  else {
    http_response_code(401);
  }
}
