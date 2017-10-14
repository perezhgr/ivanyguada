<?php


//if(isset($_POST['tipo']) && isset($_POST['nombre']) && isset($_POST['apellido']) ) {
$emailRecipient ="tuparvyt@gmail.com";
$subject ='Confirmación a la boda';
$message ="Mi nombre es " .$_POST['nombre'] ." ".$_POST['apellido']."</br>Confirmo asistencia al casamiento.";
$headers ="From: tuparvyt@gmail.com";

mail($emailRecipient,$subject,$message,$headers);
//}

if(@mail($emailRecipient, $subject, $message, $headers))
{
  $respuesta_ajax_mail = TRUE;
}else{
  $respuesta_ajax_mail = FALSE;
}
echo json_encode(array('respuesta_ajax'=>$respuesta_ajax_mail));
exit();
?>

