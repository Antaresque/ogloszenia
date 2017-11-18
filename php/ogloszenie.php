<?php
require_once('host.php');
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
	$id_og = $array['id'];
	$sql = sprintf("SELECT * FROM ogloszenia
	WHERE id_og LIKE '$id_og'");
	$result = $connect->query($sql);
	while ($row = mysqli_fetch_assoc($result))
	{
		echo json_encode($row);
	}
  $connect->close();
}
