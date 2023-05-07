
$(document).ready(function() {
    var flagSelect = 0
    const colorSelect = $('.myColor');
    const productImage = $('#product-image');

    // Add an event listener to the select element
    colorSelect.on('change', function() {
        const selectedColor = colorSelect.val();
       debugger
        if(selectedColor == ""){
            colorSelect = 'green'
        }
        else{
        productImage.attr('src', `media/${selectedColor}.jpeg`);
        }
    });
});


