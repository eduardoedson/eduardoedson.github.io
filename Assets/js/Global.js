$('#mobile-menu-icon').click(function() {
  if($('.header-items').css('display') === 'flex') {
    $('.header-items').fadeOut('slow')
    $('.header-items').css('display', 'none')
  } else {
    $('.header-items').fadeIn('slow')
    $('.header-items').css('display', 'flex')
  }
})
