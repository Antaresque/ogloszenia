<?php
require_once('host.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');//json output
header('Content-Type: application/json'); //json output
$connect = @new mysqli($host, $username, $password, $dbname);
if($connect->connect_errno!=0)
{
	echo "Error: ".$connect->connect_errno;
}
else
{
	$id_og = $_POST['id_og'];
	$sql = sprintf("SELECT * FROM ogloszenia
	WHERE id_og LIKE '$id_og'");
	$result = $connect->query($sql);
	while ($row = mysql_fetch_array($result, MYSQL_BOTH))
	{
		$array = $row;
		echo json_encode($array);
	}
  $connect->close();
}
