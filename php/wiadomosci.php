<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

// lista funkcji
$path = './wiadomosci/';

if(!empty($request)) {
  if($request[0] == 'insert'){
    if(checkTokenAccess('admin') || checkTokenAccess('klient'))
      include_once($path.'insert.php');
  }
  else if($request[0] == 'odebrane'){
    if(checkTokenID($input['id']))
      include_once($path.'odebrane.php');
  }
  else if($request[0] == 'search'){
    if(checkTokenAccess('admin') || checkTokenAccess('klient'))
      include_once($path.'search.php');
  }
  else if($request[0] == 'wyslane'){
    if(checkTokenID($input['id']))
      include_once($path.'wyslane.php');
  }
  else error_message('UNDEFINED_FUNCTION', 404);
}
else error_message('UNDEFINED_FUNCTION', 404);
