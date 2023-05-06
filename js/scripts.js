var playFleg = 1;
$(document).ready(function() {
    var video1 = $('#myVideo');
    var video2 = $('#myVideo2');
    var form = $('#form-container');
    var sos =$('.sos-button');
    var minAge = 23;
    var maxAge = 38;
    var select = $(".age-select");
    var audio = new Audio('alert.mp3');
    var flegStart = 0;
    var flagvideo2 =0;

    sos.hide();
    form.hide();
    video1.hide();
    video2.hide();


    for (var i = minAge; i <= maxAge; i++) {
        select.append($('<option></option>').val(i).html(i));
    }

    $('#hide-alert-btn, .video-container').click(function() {
        $('.alert').hide();
        sos.show()
        audio.play();
        flegStart++;
    });
    
    $('.sos-button, .video-container').click(function() {
        if(flegStart==2){
            $('.sos-button').hide();
            video1.show();
            audio.pause();
            if(playFleg){
                video1[0].play();
                playFleg=0;
            }
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

    $('.age-select').click(function() {
        if(!flagvideo2){
            video2.show();
            video2[0].play();
            form.hide();
            flagvideo2=1;
        }
    });


    video2.on('ended', function() {
        video2.hide();
        form.show()
    });

    $('form').on('submit', function(event) {
        var checkedCount = $('input[type="checkbox"]:checked').length;
        if (checkedCount < 3) {
            $(".3-hobbies").show();
            event.preventDefault();
        }
        else{
            $(".3-hobbies").hide();
        }
    });

    
});

