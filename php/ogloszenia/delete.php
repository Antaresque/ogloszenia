<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$id = $input['id_og'];
DB::delete('ogloszenia', 'id_og=%i', $id);
if(DB::affectedRows() == 0) error_message('DELETE_ERROR', 404);
