<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = DB::query("SELECT * FROM wiadomosci WHERE id_nad = %i ORDER BY data DESC", $id);

if(DB::count() > 0) $result = $data;
else error_message('NO_RESULTS', 404);
