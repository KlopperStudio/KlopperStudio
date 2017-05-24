<?php
	$mail="jdgranados@hotmail.edu.co"
	$nombre=$_POST ['tfNombre'];
	$email=$_POST ['tfCorreo'];
	$asunto=$_POST ['tfAsunto'];
	$comentario=$_POST ['tfMensaje'];

	$message ="
	Nombre: ".$nombre"
	Email: ".$email"
	Asunto: ".$asunto"
	comentarios: ".$comentario"
	";
	if(mail ($mail,"Nuevo mensaje", $message))
		echo "mensaje enviado correctamente";
		;
?>