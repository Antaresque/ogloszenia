<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_uz = getPayload()->id;
$id_og = $input['id_og'];

$data = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id_uz);
$obserwowane = json_decode($data['obserwowane']);

array_push($obserwowane, intval($id_og));
$obserwowane_new = array_unique($obserwowane);
$obserwowane_new = json_encode($obserwowane_new);

DB::update('uzytkownicy',
  array('obserwowane' => $obserwowane_new),
  'id_uz = %i', $id_uz);
