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
  $login = $_POST['login'];
	$haslo = $_POST['pass'];
	$email = $_POST['email'];
	$imie = $_POST['imie'];
	$nazwisko = $_POST['nazwisko'];
	$adres = $_POST['adres'];
	$nr_tel = $_POST['telefon'];
	$miasto = $_POST['miasto'];
	$wojewodztwo = $_POST['region'];

	$sql = sprintf("INSERT INTO uzytkownicy (`imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `miasto`, `wojewodztwo`)
	VALUES ('$imie', '$nazwisko', '$adres', '$nr_tel', '$haslo', '$login', '$miasto', '$wojewodztwo')");
	$result = $connect->query($sql);
  $connect->close();

}
?>

