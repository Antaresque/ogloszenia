<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = DB::query("SELECT * FROM ogloszenia_detailed WHERE id_uz LIKE %i AND aktywne LIKE '0'", $id);

if(DB::count() == 0) error_message('NO_RESULTS');
else $result = $data;

