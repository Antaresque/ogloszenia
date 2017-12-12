<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access
$id_og = $input['id'];
$data = DB::queryFirstRow("SELECT * FROM ogloszenia_detailed  WHERE id_og = %i", $id_og);

$result = $data;


