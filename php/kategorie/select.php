<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_kat = $input['id'];
$data = DB::queryFirstRow("SELECT * FROM kategorie WHERE id_kat = %i", $id_kat);

if(is_null($data)) error_message('CATEGORY_NOT_FOUND', 404);
else $result = $data;

