<?php 

// Llamando a los campos

$nombres = $_POST['nombres'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];



// Datos para el correo

$destinatario= "cifuentes.kevin@correounivalle.edu.co";
$asunto = "Contacto desde nuestra página";

$carta  = "De: $nombres \n";
$carta .= "Correo: $correo \n"; 
$carta .= "Telefono: $telefono \n"; 
$mensaje .="Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header('location:confirmacion.html')

 ?>
