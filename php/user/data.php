<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];

$data = DB::queryFirstRow("SELECT * FROM uzytkownicy WHERE id_uz = %i", $id);
$result = $data;


//input: id and type: (free, public, private)
//free - no need for token
//public - needs to buy sth from owner
//private - owner or admin
//output: requested data in JSON
