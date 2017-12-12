<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

// lista funkcji do 'pracownicy'
$path = './user/';

if(empty($request)) {                       // puste zapytanie
  error_message('UNDEFINED_FUNCTION');
}
else if($request[0] == 'change'){
  if(checkTokenAccess('admin') || checkTokenAccess('user'))
    include_once($path.'change.php');
}
else if($request[0] == 'data'){
  if(checkTokenAccess('admin') || checkTokenID($input['id']))
    include_once($path.'data.php');
  else include_once($path.'data_public.php');
}
else if($request[0] == 'delete') {
  if(checkTokenAccess('admin'))
    include_once($path.'delete.php');
}
else if($request[0] == 'search_name') {
  include_once($path.'search_name.php');
}
else error_message('UNDEFINED_FUNCTION');
