<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_uz = getPayload()->id;
$id_og = $input['id_og'];

$data = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id_uz);
$obserwowane = json_decode($data['obserwowane']);

$obserwowane_new = array_diff($obserwowane, array($id_og)); //usuwa jezeli znajdzie w tablicy id
$obserwowane_new = array_values($obserwowane_new); //zamienia na zwykla tablice
$obserwowane_new = json_encode($obserwowane_new);

DB::update('uzytkownicy',
      array('obserwowane' => $obserwowane_new),
      'id_uz = %i', $id_uz);

