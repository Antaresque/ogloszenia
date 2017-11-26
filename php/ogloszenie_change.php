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
    if(isset($jwt))
    {
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
      $id_uz = $array['id_uz'];
      if($payload->id == $array['id_uz'])
      {
        $id_og = $arrau['id_og'];
        $nazwa = $array['nazwa'];
        $cena = $array['cena'];
        $email = $array['email'];
        $nr_tel = $array['telefon'];
        $opis = $array['opis'];
        $promowane = $array['promowane'];
        $kategoria = $array['kategoria'];

        DB::update('ogloszenia', array(
          'nazwa' => $nazwa,
          'cena' => $cena,
          'email_wys' => $email,
          'nr_tel_wys' => $nr_tel,
          'opis' => $opis,
          'id_uz' => $id_uz,
          'id_kat' => $kategoria,
          'promowane' => $promowane),
          'id_og=%s', $id_og);
      }
      else http_response_code(401);
    }
    else http_response_code(401);
  }

//input data to change
//check token if valid change
//output result of change
