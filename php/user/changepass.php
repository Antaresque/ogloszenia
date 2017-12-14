<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

  $id = getPayload()->id;
  $haslo = $input['pass'];
  DB::update('uzytkownicy', array(
          'haslo' => $haslo),
          'id_uz=%s', $id);

  if(DB::affectedRows() == 0) error_message('UPDATE_FAIL');
  else $result[] = 'Hasło zostało zmodyfikowane';
