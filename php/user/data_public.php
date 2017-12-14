<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];

$data = DB::queryFirstRow("SELECT id_uz, login, imie, nazwisko, wojewodztwo, miasto, adres, nr_tel, email, data_rej, o_sobie, funkcja
  FROM uzytkownicy WHERE id_uz = %i", $id);

http_response_code(200);
$result = $data;
