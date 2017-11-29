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

    $array = json_decode(file_get_contents('php://input'), true);
    $id_uz = $payload->id;

    $id_kat = $array['id_kat']; //nie wiem czy to tak
    $nazwa = $array['nazwa'];
    $cena = $array['cena'];
    $email = $array['email'];
    $nr_tel = $array['telefon'];
    $opis = $array['opis'];
    if(is_null($array['promowane'])) $prom = 0;
    else $prom = $array['promowane'];

    DB::insert('ogloszenia', array(
      'nazwa' => $nazwa,
      'cena' => $cena,
      'email_wys' => $email,
      'nr_tel_wys' => $nr_tel,
      'opis' => $opis,
      'id_uz' => $id_uz,
      'id_kat' => $id_kat,
      'promowane' => $prom));

    echo json_encode(array('id' => DB::insertId()));
  }
  else {
    http_response_code(401);
  }
}

//input data of ad in json
//take id from json create ad
//output result of creating
