<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_uz = getPayload()->id;

$id_kat = $input['id_kat']; //nie wiem czy to tak
$nazwa = $input['nazwa'];
$cena = $input['cena'];
$email = $input['email'];
$nr_tel = $input['nr_tel'];
$opis = $input['opis'];
$wojewodztwo = $input['wojewodztwo'];
$miasto = $input['miasto'];
$adres = $input['adres'];
if(array_key_exists('promowane', $input)) $prom = $input['promowane'];
else $prom = 0;

$date = date("Y-m-d H:i:s");
$date_wygasniecie = date("Y-m-d H:i:s", strtotime("+1 month", $date));

$atrybuty = json_encode($input['atrybuty']);

DB::insert('ogloszenia', array(
      'nazwa' => $nazwa,
      'cena' => $cena,
      'email_wys' => $email,
      'nr_tel_wys' => $nr_tel,
      'opis' => $opis,
      'id_uz' => $id_uz,
      'id_kat' => $id_kat,
      'promowane' => $prom,
      'data_wys' => $date,
      'data_wyg' => $date_wygasniecie,
      'atrybuty' => $atrybuty));

if(DB::affectedRows() == 0) error_message('INSERT_FAIL');
else $result = array('id' => DB::insertId());


//input data of ad in json
//take id from json create ad
//output result of creating
