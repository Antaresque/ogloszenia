<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

  $id = getPayload()->id;
  $email = $input['email'];
  DB::update('uzytkownicy', array(
          'email' => $email),
          'id_uz=%s', $id);

  if(DB::affectedRows() == 0) error_message('UPDATE_FAIL');
  else $result[] = 'E-mail został zmodyfikowany';
