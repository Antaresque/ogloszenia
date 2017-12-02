<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_hash.php');

if(!empty(file_get_contents('php://input')))
{
  $array = json_decode(file_get_contents('php://input'), true);
  $login = $array['login'];
  $email = $array['email'];
  $result = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE login = %s OR email = %s", $login, $email);
  if(is_null($result))
  {
    $haslo = generate_hash($array['pass']);
    $imie = $array['imie'];
    $nazwisko = $array['nazwisko'];
    $adres = $array['adres'];
    $nr_tel = $array['telefon'];
    $miasto = $array['miasto'];
    $wojewodztwo = $array['region'];

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
  }
  else echo "Error: nazwa lub email już istnieje";
}

