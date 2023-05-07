
$(document).ready(function() {
    // Get the select element and the image element
    const colorSelect = $('.myColor');
    const productImage = $('#product-image');

    // Add an event listener to the select element
    colorSelect.on('change', function() {
        // Get the selected option value
        const selectedColor = colorSelect.val();

        // Update the image source based on the selected color
        productImage.attr('src', `${selectedColor}.jpeg`);
    });
});


green[1,0,1];
brown[1,1,1];
pink[0,0,1];
black[1,1,1]