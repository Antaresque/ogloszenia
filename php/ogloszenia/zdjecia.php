<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = array();
$dir = "../zdjecia/".$id.'-*.*';

foreach(glob($dir) as $zdjecie){
  $zdjecie = substr($zdjecie, 11);
  array_push($data, $zdjecie);
}

$result = $data;




