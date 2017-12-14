<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id'];

$data = DB::queryFirstRow('SELECT * FROM ogloszenia WHERE id_og = %i', $id);
$date = date("Y-m-d H:i:s", strtotime("+1 month"));

if($data['id_uz'] == getPayload()->id) {

  DB::update('ogloszenia', array('data_wyg' => $date), 'id_og = %i', $id);

  if(DB::affectedRows() == 0) error_message('UPDATE_FAIL', 404);
}
else http_response_code(401);


