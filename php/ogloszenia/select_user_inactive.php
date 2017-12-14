<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];
$data = DB::query("SELECT * FROM ogloszenia_detailed WHERE id_uz LIKE %i
                                                       AND id_og NOT IN (SELECT id_og FROM ogloszenia_detailed_notarchived)", $id);

if(DB::count() == 0) error_message('NO_RESULTS');
else $result = $data;

