<?php
// Fetching Values from URL.

$modelo = $_POST['modelo1'];
$fecha = $_POST['fecha1'];
$nombre = $_POST['nombre1'];
$correo = $_POST['correo1'];
$tel = $_POST['tel1'];
//$noticias = $_POST['noticias1'];
//$avisos = $_POST['avisos1'];

$correo = filter_var($correo, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {

$subject = $nombre;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $correo. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $correo. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:white;">Hola ' . $nombre . ',<br/>'
. '<br/>Datos del sitio Infiniti.<br/><br/>'
. 'Modelo de Auto:' . $modelo . '<br/>'
. 'Fecha de prueba de manejo:' . $fecha . '<br/>'
. 'Nombre del cliente:' . $nombre . '<br/>'
. 'Correo:' . $correo . '<br/>'
. 'Teléfono:' . $tel . '<br/>'
. 'Desea noticias (vacio no desea):' . $noticias . '<br/>'
. 'acepto terminos:' . $avisos . '<br/>'
. '<br/>'
. 'Fin datos de contacto desde landing page Infiniti Gdl .</div>';
$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function. gdlinfiniti@gmail.com
mail("Info@infinitigdl.mx", $subject, $sendmessage, $headers);
echo "Sus datos fueron enviados.";

} else {
echo "<span>* Email invalido *</span>";
}
?>
