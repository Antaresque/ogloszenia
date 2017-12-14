<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

// lista funkcji do 'pracownicy'
$path = './kategorie/';

if(empty($request)) {                     // puste zapytanie
  include_once($path.'select_all.php');     // zbiera wszystkie rekordy
}
else if($request[0] == 'select'){
  include_once($path.'select.php');
}
else if($request[0] == 'nad_select'){
  include_once($path.'nad_select.php');
}
else if($request[0] == 'tree'){
  include_once($path.'tree.php');
}
else if($request[0] == 'atrybuty'){
  include_once($path.'atrybuty.php');
}
else if($request[0] == 'create') {
  if(checkTokenAccess('admin'))            // dodawanie tylko dla szefa
    include_once($path.'create.php');
}
else if($request[0] == 'nad_create') {
  if(checkTokenAccess('admin'))
    include_once($path.'nad_create.php');
}
else if($request[0] == 'delete') {
  if(checkTokenAccess('admin'))            // usuwanie tylko dla szefa
    include_once($path.'delete.php');
}
else if($request[0] == 'change') {
  if(checkTokenAccess('admin'))
    include_once($path.'change.php');
}
else error_message('UNDEFINED_FUNCTION');
