<?php
  $to = "aestivial09@gmail.com";
  $subject = "Test Email";
  $message = "This is a test email to check if your server can send emails.";
  $headers = "From: aestivial09@gmail.com";
  if(mail($to, $subject, $message, $headers)){
      echo "Email sent successfully";
  }else{
      echo "Failed to send email";
  }
?>
