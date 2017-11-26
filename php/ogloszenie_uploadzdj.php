<?php
header('Access-Control-Allow-Origin: *'); //only for localhost
header('Access-Control-Allow-Headers: Content-Type, Authorization');
//header('Content-Type: application/json'); //json output

require_once('_host.php');
require_once('_imagetype.php');
require_once('_JWT.php');
use \Firebase\JWT\JWT;


if(!($_FILES == null)){
  $jwt = getBearerToken();
  if(isset($jwt)){
    try{
      $payload = JWT::decode($jwt, $jwt_secret, array('HS256'));
    }
    catch(SignatureInvalidException $e){
      http_response_code(401);
    }
    catch(UnexpectedValueException $e){
      echo $e->getMessage();
    }

    $file = $_FILES;
    $id = $_POST['id'];
    for($i = 0; $i < count($_FILES); $i++){
      if ((($file[$i]["type"] == "image/jpeg")
      || ($file[$i]["type"] == "image/jpg")
      || ($file[$i]["type"] == "image/png"))
      && ($file[$i]["size"] < 5000000)){
        $uploaddir = '../zdjecia/'; //zmienic po wrzuceniu na strone
        $uploadext = get_extension($file[$i]["type"]);
        $uploadfile = $uploaddir.$id.'-'.$i.$uploadext;

        if (move_uploaded_file($file[$i]['tmp_name'], $uploadfile)) {
          echo "Plik został wrzucony";
        } else {
          echo "Upload fail";
        }
      }
      else{
        echo "Plik ma zły typ lub jest za duży";
      }
    }
  }
  else {
    http_response_code(401);
  }
}
//input data of ad in json
//take id from json create ad
//output result of creating
