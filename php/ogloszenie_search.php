<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');//json output
header('Content-Type: application/json'); //json output

require_once('_host.php');

$array = json_decode(file_get_contents('php://input'), true);
$keys = array('kategoria','nazwa','region');
$params = array();

if(!empty(file_get_contents('php://input')))
{
  for($i = 0; $i < count($keys); $i++){
    $key = $keys[$i]; //wez klucz z tabeli $keys
    if(is_null($array[$key]))
      $temp = array($key => "%"); //jezeli jest pusty to przyporządkuj '%' (wszystkie rekordy)
    else $temp = array($key => $array[$key]); //hezeli nie to przyporzadkuj wartosc od uzytkownika
    $params = array_merge($params, $temp); //polacz tabele $params z wygenerowana wartoscia
  }

  if(array_key_exists('nazwa', $params)) $params['nazwa'] = '%'.$params['nazwa'].'%'; //dopisuje % na poczatku i koncu dla nazwy

  $result = DB::query("SELECT * FROM ogloszenia WHERE
        id_kat LIKE %s_kategoria
    && nazwa LIKE %s_nazwa
    || opis LIKE %s_nazwa
    && wojewodztwo LIKE %s_region",
    $params);

  echo json_encode($result);
}


