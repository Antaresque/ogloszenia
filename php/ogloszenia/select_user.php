<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = DB::query("SELECT * FROM ogloszenia WHERE id_uz LIKE %i", $id);

  if(DB::count() == 0) error_mesage('NO_RESULTS');
  else $result = $data;

