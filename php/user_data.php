<?php
require_once('_host.php');
require_once('_hash.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
  {
    $array = json_decode(file_get_contents('php://input'), true);
    $id = $array['id'];

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
      if($payload->funkcja == 'admin' || $payload->id == $array['id'])
      {
        $result = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE id_uz = %i", $id);
        echo json_encode($result);
      }
      else
      {
        $result = DB::queryFirstRow("SELECT id_uz, imie, nazwisko, wojewodztwo, miasto, adres, nr_tel, email, data_rej, data_log
        FROM uzytkownicy WHERE id_uz = %i", $id);
        echo json_encode($result);
      }
    }
    else{
      $result = DB::queryFirstRow("SELECT id_uz, imie, nazwisko, wojewodztwo, miasto, adres, nr_tel, email, data_rej, data_log FROM uzytkownicy WHERE id_uz = %i", $id);
      echo json_encode($result);
    }
  }

//input: id and type: (free, public, private)
//free - no need for token
//public - needs to buy sth from owner
//private - owner or admin
//output: requested data in JSON
