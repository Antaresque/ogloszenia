<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$nazwa = $input['nazwa'];
$atrybuty = array('atrybut1', 'atrybut2', 'atrybut3'); //test <---

DB::insert('kategorie', array(
  'nazwa' => $nazwa,
  'atrybuty' => json_encode($atrybuty)));

if(DB::affectedRows() == 0) error_message('INSERT_FAILED', 404);
