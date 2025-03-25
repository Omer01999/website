<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "huseynliomr12@gmail.com";
    $subject = "ZEUSFR Destek Talebi";
    $message = "Ad: ".$_POST['isim']."\n\nMesaj: ".$_POST['mesaj'];
    $headers = "From: ".$_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "<p style='color:green'>Mesajınız gönderildi!</p>";
    } else {
        echo "<p style='color:red'>Hata oluştu!</p>";
    }
}
?>