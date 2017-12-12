<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$nazwa = $input['nazwa'];
$data = DB::queryFirstRow("SELECT id_uz FROM uzytkownicy WHERE login LIKE %s", $nazwa);

if(!is_null($data)) $result = $data;
else error_message('USER_NOT_FOUND', 404);
