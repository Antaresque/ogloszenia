<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = getPayload()->id;
$haslo = $input['pass'];
$data = DB::queryFirstRow('SELECT * FROM uzytkownicy WHERE id_uz = %i', $id);

if($data['pass'] == $pass) error_message('UPDATE_PASS_IS_SAME');
else {

  DB::update('uzytkownicy', array(
          'haslo' => $haslo),
          'id_uz=%s', $id);

  if(DB::affectedRows() == 0) error_message('UPDATE_FAIL');
  else $result[] = 'Hasło zostało zmodyfikowane';
}
