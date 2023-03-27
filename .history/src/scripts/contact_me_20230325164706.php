<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    print_r($_POST);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate form data
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Send email
    $to = "omkarvpatel1234@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Error sending message.";
    }
}
?>
