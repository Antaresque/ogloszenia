<?php
if(!defined('NO_ACCESS')){ http_response_code(403); exit(); } // block direct access

$file = $_FILES;
$id = $_POST['id'];
for($i = 0; $i < count($_FILES); $i++){
  if ((($file[$i]["type"] == "image/jpeg")
      || ($file[$i]["type"] == "image/jpg")
      || ($file[$i]["type"] == "image/png"))
      && ($file[$i]["size"] < 5000000)){
        $uploaddir = '../zdjecia/'; //zmienic po wrzuceniu na strone
        $uploadext = get_extension($file[$i]["type"]);
        $uploadname = $id.'-'.$i.$uploadext;

        $filename = $uploaddir.$uploadname;

        if (move_uploaded_file($file[$i]['tmp_name'], $filename)) {
          echo json_encode(array('result' => "Plik został wrzucony"));
          if($i == 0)
            DB::update('ogloszenia', array(
              'zdjecie' => $uploadname),
              'id_og=%i', $id);
        } else {
          echo json_encode(array('result' => "Upload fail"));
        }
      }
      else{
        echo json_encode(array('result' => "Plik ma zły typ lub jest za duży"));
      }
    }

//input data of ad in json
//take id from json create ad
//output result of creating
