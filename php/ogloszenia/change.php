<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id_uz = $input['id_uz'];
if(getPayload()->id == $input['id_uz'] || getPayload()->funkcja == 'admin') {
  $data = array();
  $keys = array('nazwa', 'cena', 'email_wys', 'nr_tel_wys', 'opis', 'id_kat', 'promowane');
  $id_og = $input['id_og'];

  for($i = 0; $i < count($keys); $i++){
    $k = $keys[$i];
    if(!is_null($input[$k])){
      $temp = array($k, $input[$k]);
      array_merge($data, $temp);
    }
  }
  DB::update('ogloszenia', $data, 'id_og=%s', $id_og);
}


//input data to change
//check token if valid change
//output result of change
