<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

// lista funkcji
$path = './ogloszenia/';

if(empty($request)){
  include_once($path.'select.php'); //dla wsyz
}
else if($request[0] == 'search'){
  include_once($path.'search.php'); //dla wszys
}
else if($request[0] == 'select_user'){
  include_once($path.'select_user.php');
}
else if($request[0] == 'select_user_inactive'){
  include_once($path.'select_user_inactive.php');
}
else if($request[0] == 'uploadzdj'){
  if(checkTokenAccess('user') || checkTokenAccess('admin'))
    include_once($path.'uploadzdj.php');
}
else if($request[0] == 'create') {        // TODO: kod do dodawania =w=
  if(checkTokenAccess('user') || checkTokenAccess('admin'))
    include_once($path.'create.php');
}
else if($request[0] == 'change') {
  if(checkTokenAccess('admin'))
    include_once($path.'change.php');
}
else if($request[0] == 'delete') {                              // TODO: kod do usuwania też =w=
  if(checkTokenAccess('admin') || checkTokenAccess('user'))
    include_once($path.'delete.php');
}
else if($request[0] == 'refresh') {
  if(checkTokenAccess('admin') || checkTokenAccess('user'))
    include_once($path.'refresh.php');
}
else if($request[0] == 'promowane') {
  include_once($path.'promowane.php');
}
else if($request[0] == 'zdjecia') {
  include_once($path.'zdjecia.php');
}
else error_message('UNDEFINED_FUNCTION', 404);
