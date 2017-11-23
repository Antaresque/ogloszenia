<?php
require_once 'jwt/BeforeValidException.php';
require_once 'jwt/ExpiredException.php';
require_once 'jwt/SignatureInvalidException.php';
require_once 'jwt/JWT.php';

$jwt_secret = json_decode(file_get_contents('secret.json'), true)['secret'];
