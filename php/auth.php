<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct accesss

// logowanie i rejestracja
$path = './auth/';

if(!empty($request)) {                   // nie ma pustego zapytania wiec musi sprawdzic zeby errora nie sypnelo
  if($request[0] == 'login'){
    include_once($path.'login.php');
  }
  else if($request[0] == 'register'){
    include_once($path.'register.php');
  }
  else if($request[0] == 'verify'){
    include_once($path.'verify.php');
  }
  else error_message('UNDEFINED_FUNCTION', 404);
}
else error_message('UNDEFINED_FUNCTION', 404);

