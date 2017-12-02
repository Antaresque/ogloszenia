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
        $id = $array['id'];

        if($payload->id == $id || $payload->funkcja == "admin")
          $result = DB::query("SELECT * FROM ogloszenia WHERE id_uz LIKE %i", $id);
        else http_response_code(401);

        if(DB::count() == 0) $result = array('result' => false);
        echo json_encode($result);
      }
      else {
        http_response_code(401);
      }
    }
