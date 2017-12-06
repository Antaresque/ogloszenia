<?php
require_once('_host.php');

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

      $id = $payload->id;

      $result = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id);
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
    else {
      http_response_code(401);
    }
}
