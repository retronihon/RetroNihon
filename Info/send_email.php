<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "contact@retronihon.com";
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: " . $email . "\r\n";
    $body = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por contactarnos! Nos pondremos en contacto contigo lo más rápido posible.";
    } else {
        echo "Error: El correu no se ha podido enviar.";
    }
}
?>

