<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Autorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
{
  if(isset($headers['Authorization'])) {
    $jwt = getBearerToken();
    echo $jwt;
  }
  else {
    http_response_code(401);
  }
}

//input data of ad in json
//take id from json create ad
//output result of creating
