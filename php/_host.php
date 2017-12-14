<?php
  require_once('_meekrodb.2.3.class.php');

  DB::$host = "mysql.cba.pl";
  DB::$user = "ogloszenia12";
  DB::$password = "januszX12";
  DB::$dbName = "ogloszeniaprojekt12";
  DB::$encoding = 'utf8';

  //header('Access-Control-Allow-Origin: *'); //only for localhost
  header('Access-Control-Allow-Headers: Content-Type, Authorization'); //token check
  header('Content-Type: application/json'); //json output
