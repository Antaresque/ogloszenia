<?php
require_once('host.php');
require_once('hash.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Content-Type: application/json'); //json output

session_start();
$host = "localhost";
$username = "root";
$password = "";
$dbname = "serwis";
$connect = @new mysqli($host, $username, $password, $dbname);
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
	$nr_tel = $_POST['nrtel'];
	$miasto = $_POST['miasto'];
	$wojewodztwo = $_POST['wojewodztwo'];
	
	$sql = sprintf("INSERT INTO uzytkownicy (`imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `miasto`, `wojewodztwo`) 
	VALUES ('$imie', '$nazwisko', '$adres', '$nr_tel', '$haslo', '$login', '$miasto', '$wojewodztwo')");
	$result = $connect->query($sql);
	$connect->close();
}
?>

