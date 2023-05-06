var playFleg = 1;
$(document).ready(function() {
    var video = $('#myVideo');
    var form = $('#form-container');
    
    // form.hide();
    video.hide();

    $('.sos-button, .video-container').click(function() {
        $('.sos-button').hide();
        video.show();
        if(playFleg){
            video[0].play();
            playFleg=0;
        }
    });

    // Listen for the "ended" event on the video element
    $('#myVideo').on('ended', function() {
        // Fade out the video element and then fade in the form element
        $('#myVideo').hide();
        form.show();
        });

    
    $('input[name="fullName"]').on('input', function() {
        var value = $(this).val();
        var regex1 = /^(?=.*[0-9])/;
        var regex2 = /^(?=.*\s)/;
        if (regex1.test(value)) {
            $('.number-is-invalid').show();
        } else {
            $('.number-is-invalid').hide();
        }
        if (!regex2.test(value)) {
            console.log("adsf")
            $('.no-spaces').show();
        } else {
            $('.no-spaces').hide();
        }
    });

    $('input[name="phone"]').on('input', function() {
        var value = $(this).val();
        var regex1 = /^[0-9]+$/;
        if (!regex1.test(value)) {
            $('.only-number').show();
        } else {
            $('.only-number').hide();
            if (value.length !== 9) {
                $('.not-9-digits').show();
            } else {
                $('.not-9-digits').hide();
            }
        }
    });

    
});

