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
	$search = $_POST['search'];
	$kategoria = $_POST['kategoria'];
	$sql = sprintf("SELECT id_og FROM ogloszenia
	INNER JOIN kategorie ON ogloszenia.id_kat = kategorie.id_kat
	WHERE nazwa LIKE '*$search*' AND id_kat LIKE '$kategoria'");
	$result = $connect->query($sql);
  $connect->close();
}
