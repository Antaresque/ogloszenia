<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = DB::query("SELECT * FROM kategorie WHERE id_kat_nad = %i", $id);

if(DB::count() > 0) $result = $data;
else error_message('NO_RESULTS', 404);
