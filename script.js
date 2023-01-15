$(window).ready(function(){
    console.log('ready')

    if($('.navbar').css('display') == 'none'){
        $('.hamburger-down').on('click', function(){
            $('.navbar').show()
            $('.hamburger-down').hide()
            $('.hamburger-up').show()
        })
    }
    else($('.navbar').css('display') == 'block');{
        $('.hamburger-up').on('click', function(){
            $('.navbar').hide()
            $('.hamburger-down').show()
            $('.hamburger-up').hide()
        })
    }
})