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
	$id_og = $_POST['id'];
	$sql = sprintf("DELETE FROM ogloszenia WHERE id_uz LIKE '$id_og'");
	$result = $connect->query($sql);
  $connect->close();
}