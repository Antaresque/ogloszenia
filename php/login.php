<?php
require_once('host.php');
require_once('hash.php');
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json'); //json output

if(!empty(file_get_contents('php://input')))
{
  $array = json_decode(file_get_contents('php://input'), true);
  $login = $array['login'];
  $pass = $array['pass'];

  $query = sprintf("SELECT * FROM uzytkownicy WHERE login = '$login'");
  $result = $connect->query($query);

  $login_result = false;

  if($result->num_rows == 1){
    $row = mysqli_fetch_assoc($result);
    if(validate_pw($pass, $row['haslo'])) $login_result = true;
  }

  $result->close();
  $connect->close();

  echo json_encode(array("login_result" => $login_result));
}


