<?php
require_once('_host.php');

$array = json_decode(file_get_contents('php://input'), true);
$keys = array('kategoria','nazwa','region'); //tu dopisac atrybuty pewnie
$dirs = array('ASC', 'DESC');
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

  if(!is_null($array['page'])) $page = $array['page'];
  else $page = 1;

  if(!is_null($array['sort'])) $sort = $array['sort'];
  else $sort = 'cena';

  if(!is_null($array['dir'])) $dirkey = array_search($array['dir'], $dirs);
  else $dirkey = 0;

  if(!is_null($array['num'])) $num = $array['num'];
  else $num = 25;

  $dir = $dirs[$dirkey];

  $temp = array(
    'numstart' => $num * ($page - 1), //index od ktorego zaczyna
    'numofrows' => $num, //ilosc rzedow
    'sort' => $sort); //po czym sortowac ma

  $params = array_merge($params, $temp);


  if($params['nazwa'] != '%') $params['nazwa'] = '%'.$params['nazwa'].'%'; //dopisuje % na poczatku i koncu dla nazwy

  $result = DB::query("SELECT * FROM ogloszenia WHERE
        id_kat LIKE %s_kategoria
    && wojewodztwo LIKE %s_region
    && (nazwa LIKE %s_nazwa
    || opis LIKE %s_nazwa)
    ORDER BY promowane DESC, %b_sort $dir
    LIMIT %i_numstart, %i_numofrows",
    $params);

  DB::query("SELECT id_og FROM ogloszenia WHERE
    id_kat LIKE %s_kategoria
    && wojewodztwo LIKE %s_region
    && (nazwa LIKE %s_nazwa
    || opis LIKE %s_nazwa)
    ORDER BY promowane DESC, %b_sort $dir",
    $params);

  $count = DB::count();
  $pages = array(ceil($count/$num));

  $result = array_merge($result, $pages);

  if(DB::count() == 0) $result = array('result' => false);
  echo json_encode($result);
}


