$(document).ready(function() {
    $('.image-overlay').click(function() {
        var $image = $(this).siblings('img');
        var src = $image.attr('src');
        var alt = $image.attr('alt');
        $('body').append('<div id="overlay"></div><div id="image-popup"><img src="' + src + '" alt="' + alt + '"><div class="close-button"><i class="fas fa-times"></i></div></div>');
        $('#overlay, #image-popup').fadeIn('fast');
    });
    $(document).on('click', '#overlay, .close-button', function() {
        $('#overlay, #image-popup').fadeOut('fast', function() {
            $('#overlay, #image-popup').remove();
            });
        });
    });