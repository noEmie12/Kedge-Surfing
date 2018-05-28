$('.switch').hover(function() {
        $(this).find('.avg_words').hide();
        $(this).find('.avg_num').show();
    }, function() {
        $(this).find('.avg_num').hide();
        $(this).find('.avg_words').show();
});