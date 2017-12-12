<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_wiad = $input['id'];
$id_uz = getPayload()->id;

$data = DB::queryFirstRow("SELECT w.*, a.login nadawca, b.login odbiorca
                                 FROM wiadomosci w
                                  INNER JOIN uzytkownicy a ON w.id_nad = a.id_uz
                                  INNER JOIN uzytkownicy b ON w.id_od = b.id_uz
                                 WHERE id_wiad = %i", $id_wiad);

if($id_uz == $data['id_nad'] || $id_uz == $data['id_od'] || getPayload()->funkcja == 'admin'){
  $result = $data;
}
else { http_response_code(401); exit(); }
