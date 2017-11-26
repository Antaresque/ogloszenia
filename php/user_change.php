<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_hash.php');
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
      $id = $payload->id;

      $haslo = generate_hash($array['pass']);
      $imie = $array['imie'];
      $nazwisko = $array['nazwisko'];
      $adres = $array['adres'];
      $nr_tel = $array['telefon'];
      $miasto = $array['miasto'];
      $wojewodztwo = $array['region'];
      $bank = $array['bank'];
      $nr_konta = $array['nr_konta'];

      DB::update('uzytkownicy', array(
        'imie' => $imie,
        'nazwisko' => $nazwisko,
        'adres' => $adres,
        'nr_tel' => $nr_tel,
        'miasto' => $miasto,
        'wojewodztwo' => $wojewodztwo,
        'nazwa_banku' => $bank,
        'nr_konta_bank' => $nr_konta),
        'id_uz=%s', $id);

      echo json_encode(array('id' => $id));
    }
    else {
      http_response_code(401);
    }
  }
//input: array with data to change
//if id from token is equal to id of edited user OR id is admin
// change stuff that is sent
//output: result of change
