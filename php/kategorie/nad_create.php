<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_kat = $input['id_kat']; //id kategorii nadrzędnej z listy
$nazwa = $input['nazwa'];

DB::insert('kategorie', array(
  'nazwa' => $nazwa,
  'id_kat_nad' => $id_kat));

if(DB::affectedRows() == 0) error_message('INSERT_FAILED', 404);
