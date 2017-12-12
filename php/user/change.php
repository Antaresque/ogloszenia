<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

if(getPayload()->id == $input['id']) {
  $id = $input['id'];
  $haslo = generate_hash($input['pass']);
  $imie = $input['imie'];
  $nazwisko = $input['nazwisko'];
  $adres = $input['adres'];
  $nr_tel = $input['telefon'];
  $miasto = $input['miasto'];
  $wojewodztwo = $input['region'];
  $o_sobie = $input['opis'];

  DB::update('uzytkownicy', array(
          'imie' => $imie,
          'nazwisko' => $nazwisko,
          'adres' => $adres,
          'nr_tel' => $nr_tel,
          'miasto' => $miasto,
          'wojewodztwo' => $wojewodztwo,
          'o_sobie' => $o_sobie),
          'id_uz=%s', $id);

  if(DB::affectedRows() == 0) error_message('UPDATE_FAIL');
}
else http_response_code(401);

//input: array with data to change
//if id from token is equal to id of edited user OR id is admin
// change stuff that is sent
//output: result of change
