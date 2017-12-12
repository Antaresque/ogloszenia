<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

use \Firebase\JWT\JWT;

$login = $input['login'];
$pass = $input['pass']; // pobierz login/hasło z POST

$data = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE login = %s", $login);
// sprawdź, czy istnieje użytkownik w tabeli

if(is_null($data)) { // brak wyników
  error_message('LOGIN_NOT_FOUND', 401);
}
else {
  $id = $data['id_uz'];
  $funkcja = $data['funkcja'];

  if(validate_pw($pass, $data['haslo'])) {
    $payload = array('id' => $id, 'funkcja' => $funkcja, 'exp' => time() + 7*24*60*60);
    $token = JWT::encode($payload, $jwt_secret);
    $result = array("jwt" => $token);
  }
  else error_message('WRONG_PASS', 401);
}


