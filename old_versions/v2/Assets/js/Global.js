$('#mobile-menu-icon').click(function() {
  if($('.header-items').css('display') === 'flex') {
    $('.header-items').fadeOut('slow')
    $('.header-items').css('display', 'none')
  } else {
    $('.header-items').fadeIn('slow')
    $('.header-items').css('display', 'flex')
  }
})

$('.header-item a').click(function(e) {
  let id = $(this).attr('href')
  let $id = $(id)

  if ($id.length === 0) {
      return
  }

  e.preventDefault();

  let pos = $id.offset().top
  $('body, html').animate({ scrollTop: pos - 100 }, 1000)
})
