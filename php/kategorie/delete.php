<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id_kat'];

DB::delete('kategorie',
  'id_kat=%i', $id);

if(DB::affectedRows() == 0) error_message('DELETE_ERROR', 404);
