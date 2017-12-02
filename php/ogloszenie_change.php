<?php
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
      if($payload->id == $array['id_uz'] || $payload->funkcja == 'admin')
      {
        $data = array();
        $keys = array('nazwa', 'cena', 'email_wys', 'nr_tel_wys', 'opis', 'id_kat', 'promowane');
        $id_og = $array['id_og'];

        for($i = 0; $i < count($keys); $i++){
          $k = $keys[$i];
          if(!is_null($array[$k])){
            $temp = array($k, $array[$k]);
            array_merge($data, $temp);
          }
        }
        DB::update('ogloszenia', $data, 'id_og=%s', $id_og);
      }
      else http_response_code(401);
    }
    else http_response_code(401);
  }

//input data to change
//check token if valid change
//output result of change
