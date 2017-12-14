<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access
use \Firebase\JWT\JWT;

$login = $input['login'];
$email = $input['email'];
$register = true;

$check = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE login = %s", $login);
$check2 = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE email = %s", $email);
  // sprawdź czy login/email znajduje się w bazie

if(!is_null($check)) { // jeżeli login znajduje się w bazie to nie można
  error_message('LOGIN_TAKEN');
  $register = false;
}
if(!is_null($check2)) { // jeżeli email znajduje się w bazie to nie można
  error_message('EMAIL_TAKEN');
  $register = false;
}

if($register){
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $haslo = generate_hash($input['pass']);
    $imie = $input['imie'];
    $nazwisko = $input['nazwisko'];
    $adres = $input['adres'];
    $nr_tel = $input['telefon'];
    $miasto = $input['miasto'];
    $wojewodztwo = $input['region'];

    DB::insert('uzytkownicy', array(
        'imie' => $imie,
        'nazwisko' => $nazwisko,
        'adres' => $adres,
        'nr_tel' => $nr_tel,
        'login' => $login,
        'haslo' => $haslo,
        'email' => $email,
        'miasto' => $miasto,
        'wojewodztwo' => $wojewodztwo));

    $id_potw = DB::insertId();

    $payload = array('id_potw' => $id_potw);
    $token = JWT::encode($payload, $jwt_secret);
    $url = 'http://jan-usz-ix.cba.pl/auth/verify?token='.$token;
    mail_message($email, 'VERIFY', $url);

    if(DB::affectedRows() == 0) error_message('INSERT_FAIL', 404);
  }
  else error_message('WRONG_MAIL');
}


