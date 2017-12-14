<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access


$keys = array('kategoria','nazwa','region'); //tu dopisac atrybuty pewnie
$dirs = array('ASC', 'DESC');
$params = array();

  for($i = 0; $i < count($keys); $i++){
    $key = $keys[$i]; //wez klucz z tabeli $keys
    if(is_null($input[$key]))
      $temp = array($key => "%"); //jezeli jest pusty to przyporządkuj '%' (wszystkie rekordy)
    else $temp = array($key => $input[$key]); //hezeli nie to przyporzadkuj wartosc od uzytkownika
    $params = array_merge($params, $temp); //polacz tabele $params z wygenerowana wartoscia
  }

  if(!is_null($input['page'])) $page = $input['page'];
  else $page = 1;

  if(!is_null($input['sort'])) $sort = $input['sort'];
  else $sort = 'cena';

  if(!is_null($input['dir'])) $dirkey = array_search($input['dir'], $dirs);
  else $dirkey = 0;

  if(!is_null($input['num'])) $num = $input['num'];
  else $num = 25;

  $dir = $dirs[$dirkey];

  $temp = array(
    'numstart' => $num * ($page - 1), //index od ktorego zaczyna
    'numofrows' => $num, //ilosc rzedow
    'sort' => $sort); //po czym sortowac ma

  $params = array_merge($params, $temp);


  if($params['nazwa'] != '%') $params['nazwa'] = '%'.$params['nazwa'].'%'; //dopisuje % na poczatku i koncu dla nazwy

  $data = DB::query("SELECT * FROM ogloszenia_detailed WHERE
        (id_kat LIKE %s_kategoria OR id_kat IN (SELECT id_kat FROM kategorie WHERE id_kat_nad = %s_kategoria))
    && wojewodztwo LIKE %s_region
    && (nazwa LIKE %s_nazwa
    || opis LIKE %s_nazwa)
    ORDER BY promowane DESC, %b_sort $dir
    LIMIT %i_numstart, %i_numofrows",
    $params);

  DB::query("SELECT id_og FROM ogloszenia_detailed  WHERE
    (id_kat LIKE %s_kategoria OR id_kat IN (SELECT id_kat FROM kategorie WHERE id_kat_nad = %s_kategoria))
    && wojewodztwo LIKE %s_region
    && (nazwa LIKE %s_nazwa
    || opis LIKE %s_nazwa)
    ORDER BY promowane DESC, %b_sort $dir",
    $params);

  $count = DB::count();
  $pages = array(ceil($count/$num));

  $data = array_merge($data, $pages);

  if(DB::count() == 0) error_message('NO_RESULTS');
  else $result = $data;



