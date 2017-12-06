<?php
require_once('_host.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input'))) {
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

    $id_uz = $payload->id;
    $id_og = $array['id_og'];

    $result = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id_uz);
    $obserwowane = json_decode($result['obserwowane']);

    array_push($obserwowane, $id_og);
    $obserwowane_new = array_unique($obserwowane);
    $obserwowane_new = json_encode($obserwowane_new);

    DB::update('uzytkownicy',
      array('obserwowane' => $obserwowane_new),
      'id_uz = %i', $id_uz);
  }
  else {
    http_response_code(401);
  }
}
