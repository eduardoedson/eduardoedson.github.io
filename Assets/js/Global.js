AOS.init()

$('.links a').click(function(e) {
    let id = $(this).attr('href')
    let $id = $(id)

    if ($id.length === 0) {
        return
    }

    e.preventDefault();

    let pos = $id.offset().top
    $('body, html').animate({ scrollTop: pos - 100 }, 1000)
})

window.addEventListener('scroll', () => {
    var header = document.getElementById('header')
    header.classList.toggle('after-header', window.scrollY > 50)
})

$('#menu-mobile').click(function() {
    $('.links').fadeIn('slow')
    $('.links').css('display', 'flex')
})

$('#close-menu-mobile, .links > a').click(function() {
    $('.links').fadeOut('slow', function() {
        $('.links').css('display', 'none')
    })
})