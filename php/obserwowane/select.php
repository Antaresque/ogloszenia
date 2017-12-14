<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = getPayload()->id;
$type = $input['type'];

$data = DB::queryFirstRow('SELECT obserwowane FROM uzytkownicy WHERE id_uz = %i', $id);

if($type == 'id') $result = $data['obserwowane'];
if($type == 'detailed') {
  $obserwowane = json_decode($data['obserwowane']);

  if(count($obserwowane) == 0) error_message('NO_RESULTS');
  else {
    $data_result = array();

    for($i = 0; $i < count($obserwowane); $i++) {
      $data_loop = DB::queryFirstRow('SELECT o.*, k.nazwa as kategoria, u.login
                                  FROM ogloszenia as o
                                    INNER JOIN uzytkownicy as u ON o.id_uz = u.id_uz
                                    INNER JOIN kategorie as k ON o.id_kat = k.id_kat
                                  WHERE o.id_og = %i', $obserwowane[$i]);
      array_push($data_result, $data_loop);
    }

    $result = $data_result;
  }
}

