<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

  $id = getPayload()->id;
  $email = $input['email'];
  $data = DB::queryFirstRow('SELECT * FROM uzytkownicy WHERE id_uz = %i', $id);

  if($data['email'] == $email) error_message('UPDATE_EMAIL_IS_SAME');
  else {
    DB::update('uzytkownicy', array(
            'email' => $email),
            'id_uz=%s', $id);

    if(DB::affectedRows() == 0) error_message('UPDATE_FAIL');
    else $result[] = 'E-mail został zmodyfikowany';
  }
