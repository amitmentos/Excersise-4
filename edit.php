<?php
$availability = array(
	'green' => array(1, 0, 1),
	'brown' => array(1, 1, 1),
	'pink' => array(0, 0, 1),
	'black' => array(1, 1, 1)
);

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $color = $_GET["color"];
    $size = $_GET["size"];
    $shipping = $_GET["shipping"];
    $email = $_GET["mail"];

    // Check if the selected size is available for the selected color
    $available = $availability[$color];
    if ($available[array_search($size, array('S', 'M', 'L'))] == 1) {
        $availability_text = "In Stock!";
    } else {
        $availability_text = "Sold Out!";
    }

    echo "<h2>ORDER DETAILS:</h2>";
    echo "<p>Color: $color</p>";
    echo "<p>Size: $size ($availability_text)</p>";
    echo "<p>Shipping: $shipping</p>";
    echo "<p>Email: $email</p>";
}
?>