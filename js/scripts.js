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
    
});

