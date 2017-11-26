<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

if(!empty(file_get_contents('php://input'))){
  $array = json_decode(file_get_contents('php://input'), true);
  $id = $array['id'];
  $data = array();
  $dir = "../zdjecia/".$id.'-*.*';

  foreach(glob($dir) as $zdjecie){
    $zdjecie = substr($zdjecie, 11);
    array_push($data, $zdjecie);
  }
  echo json_encode($data);
}



