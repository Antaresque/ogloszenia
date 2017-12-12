<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_nad = getPayload()->id;
$id_od = $input['odbiorca'];
$tresc = $input['tresc'];
$tytul = $input['temat'];

DB::insert('wiadomosci', array(
  'id_nad' => $id_nad,
  'id_od' => $id_od,
  'tresc' => $tresc,
  'id_og' => '1',
  'tytul' => $tytul
  ));

if(DB::affectedRows() > 0) $result = array('id' => DB::insertId());
else error_message('INSERT_FAIL', 404);

