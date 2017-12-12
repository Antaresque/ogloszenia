<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$data = DB::query("SELECT * FROM ogloszenia WHERE promowane = %i ORDER BY RAND() LIMIT 9", 1);

if(DB::count() > 0 ) $result = $data;
else error_message('NO_RESULTS');
