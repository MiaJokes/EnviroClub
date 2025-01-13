<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the email parameters
    $to = "danielle29newmarch@gmail.com";  
    $subject = "New Message from Contact Form";
    $body = "You have received a new message from the EnviroClub website contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";
    $headers = "From: $email" . "\r\n" . "Reply-To: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Message sent successfully! Thank you for reaching out.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>
