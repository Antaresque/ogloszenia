<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json'); //json output

require_once('_host.php');


if(!empty(file_get_contents('php://input')))
  {}

//input id or IDs of categories
//select ids from query tkae names
//output name/names of categories in JSON (id: name) format
