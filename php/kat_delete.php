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
        $id = $array['id_kat'];

        DB::delete('kategorie',
          'id_kat=%i', $id);
      }
      else {
        http_response_code(401);
      }
    }
