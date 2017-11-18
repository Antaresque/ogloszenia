<?php
require_once('host.php');
require_once('hash.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');//json output
header('Content-Type: application/json'); //json output

if($connect->connect_errno!=0)
{
	echo "Error: ".$connect->connect_errno;
}
else
{
  $array = json_decode(file_get_contents('php://input'), true);
  $login = $array['login'];
	$haslo = $array['pass'];
	$email = $array['email'];
	$imie = $array['imie'];
	$nazwisko = $array['nazwisko'];
	$adres = $array['adres'];
	$nr_tel = $array['telefon'];
	$miasto = $array['miasto'];
	$wojewodztwo = $array['region'];

	$sql = sprintf("INSERT INTO uzytkownicy (`imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `miasto`, `wojewodztwo`)
  VALUES ('$imie', '$nazwisko', '$adres', '$nr_tel', '$haslo', '$login', '$email', '$miasto', '$wojewodztwo')");
  $result = $connect->query($sql);
  $connect->close();
}

