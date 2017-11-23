<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Autorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_hash.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
  {}

//input: array with data to change
//if id from token is equal to id of edited user OR id is admin
// change stuff that is sent
//output: result of change
