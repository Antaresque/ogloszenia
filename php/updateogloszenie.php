<?php
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
	$id = $_POST['id'];
	$id_kat = $_POST['id_kat'];
	$atrybuty = $_POST['atrybuty'];
	$id_zdj = $_POST['id_zdj'];
	$email = $_POST['email'];
	$nr_tel_wys = $_POST['nr_tel'];
	$opis = $_POST['opis'];
	
	$sql = sprintf("UPDATE ogloszenia SET id_kat='$id_kat', atrybuty='$atrybuty', id_zdj='$id_zdj', email_wys='$email', nr_tel_wys='$nr_tel', opis='$opis' WHERE id_og='$id'");
	$result = $connect->query($sql);
  $connect->close();
}