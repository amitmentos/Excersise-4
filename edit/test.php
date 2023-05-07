<?php
$availability = array(
	'green' => array(1, 0, 1),
	'brown' => array(1, 1, 1),
	'pink' => array(0, 0, 1),
	'black' => array(1, 1, 1)
);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $color = $_POST["color"];
    $size = $_POST["size"];
    $shipping = $_POST["shipping"];
    $email = $_POST["mail"];
    echo "<h2>Your Input:</h2>";
    echo "<p>Color: $color</p>";
    echo "<p>Size: $size</p>";
    echo "<p>Shipping: $shipping</p>";
    echo "<p>Email: $email</p>";
}
?>