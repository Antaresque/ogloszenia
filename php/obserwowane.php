<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

// lista funkcji
$path = './obserwowane/';

if(!empty($request)) {
  if($request[0] == 'select'){
    if(checkTokenAccess('user') || checkTokenAccess('admin')) // jest 4 rano nwm czy to dziala
      include_once($path.'select.php');
  }
  else if($request[0] == 'add'){
    if(checkTokenAccess('user') || checkTokenAccess('admin'))
      include_once($path.'add.php');
  }
  else if($request[0] == 'delete'){
    if(checkTokenAccess('user') || checkTokenAccess('admin'))
      include_once($path.'delete.php');
  }
  else error_message('UNDEFINED_FUNCTION', 404);
}
else error_message('UNDEFINED_FUNCTION', 404);
