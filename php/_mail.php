<?php
function mail_message($email, $type, $extra){
  $headers = "From: noreply@jan-usz-ix.cba.pl";

  if($type == 'VERIFY'){
    $subject = 'Potwierdzenie konta na jan-usz-ix.pl';
    $message = 'Oto link aktywacyjny do twojego konta: '.$extra;
  }
  mail($email, $subject, $message, $headers);
}
