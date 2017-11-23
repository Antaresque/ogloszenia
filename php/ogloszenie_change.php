<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Autorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
  {}

//input data to change
//check token if valid change
//output result of change
