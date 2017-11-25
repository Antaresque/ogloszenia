<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_hash.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;

if(!empty(file_get_contents('php://input')))
  {


  }

//input: formdata with image
//check if image is good size and upload name to database, upload avatar to assets
//output: result of uploading
