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

      $array = json_decode(file_get_contents('php://input'), true);
      $id = $payload->id;
      $type = $array['type'];

      $result = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id);

      if($type == 'id') echo $result['obserwowane'];
      if($type == 'detailed') {
        $obserwowane = json_decode($result['obserwowane']);
        $data = array();

        for($i = 0; $i < count($obserwowane); $i++){
          $result = DB::query('SELECT o.*, k.nazwa as kategoria, u.login
                              FROM ogloszenia as o
                                INNER JOIN uzytkownicy as u ON o.id_uz = u.id_uz
                                INNER JOIN kategorie as k ON o.id_kat = k.id_kat
                              WHERE o.id_og = %i', $id);
          array_push($data, $result);
        }
        echo json_encode($data);
      }
    }
    else {
      http_response_code(401);
    }
}
