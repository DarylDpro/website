$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = 'daryltaykongzhi@gmail.com';
$headers = "From: $email\r\n";
$message_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
mail($to, $subject, $message_body, $headers);
if (mail($to, $subject, $message_body, $headers)) {
  echo 'Thank you for your message!';
} else {
  echo 'There was a problem sending your message. Please try again.';
}