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

    $array = file_get_contents('php://input');
    $id_uz = $payload->id;

    $imie = $array['imie'];
    $nazwisko = $array['nazwisko'];
    $adres = $array['adres'];
    $nr_tel = $array['telefon'];
    $miasto = $array['miasto'];
    $wojewodztwo = $array['region']; //zmienic na dane ogloszenia

    DB::insert('ogloszenia', array(
      'imie' => $imie,
      'nazwisko' => $nazwisko,
      'adres' => $adres,
      'nr_tel' => $nr_tel,
      'login' => $login,
      'haslo' => $haslo,
      'email' => $email,
      'miasto' => $miasto,
      'wojewodztwo' => $wojewodztwo)); //same same
  }
  else {
    http_response_code(401);
  }
}

//input data of ad in json
//take id from json create ad
//output result of creating
