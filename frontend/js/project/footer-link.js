function clickTitle() {
  $('.js-footer-title').each(function(index, elem) {
      $(elem).on('click',function() {
        $(this).next().toggle();
      });
  });
}

  clickTitle();


$(window).resize(function() {
  if($(this).width() > 767) {
    $('.js-footer-title').each(function(index, elem) {
        $(this).next().removeAttr('style');
    });
  }
});