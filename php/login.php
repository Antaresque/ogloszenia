<?php
require_once('host.php');
require_once('hash.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Content-Type: application/json'); //json output

$name = $_POST['name'];
$pass = $_POST['pass'];

$query = sprintf("SELECT * FROM users WHERE login = '$name' AND password = '$pass'");
$result = $connect->query($query);

if($result->num_rows > 0) $login_result = true;
else $login_result = false;

$result->close();
$connect->close();

echo json_encode(array("login_result" => $login_result));


