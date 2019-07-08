import $ from 'jquery';
$(function(){
    $('.gnav_trigger').on('click', function() {
        $(this).toggleClass('_active');
        $('.gnav').toggleClass('_active');
    })
})
