<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];

if(getPayload()->funkcja = 'admin' || getPayload()->id == $id) {
  DB::delete('uzytkownicy', 'id_uz=%i', $id);
  if(DB::affectedRows() == 0) error_message('DELETE_ERROR', 404);
}
else http_response_code(401);
