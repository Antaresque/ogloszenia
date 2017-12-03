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
    $id_nad = $payload->id;
    $id_od = $array['odbiorca'];
    $tresc = $array['tresc'];
    $tytul = $array['temat'];


    DB::insert('wiadomosci', array(
      'id_nad' => $id_nad,
      'id_od' => $id_od,
      'tresc' => $tresc,
      'id_og' => '1',
      'tytul' => $tytul
    ));

    echo json_encode(array('id' => DB::insertId()));
  }
  else {
    http_response_code(401);
  }
}
