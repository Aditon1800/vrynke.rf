function clickTitle() {
  $('.js-action-title').each(function(index, elem) {
      $(elem).on('click',function() {
        $(this).next().toggle();
      });
  });
}

  clickTitle();


$(window).resize(function() {
  if($(this).width() > 480) {
    $('.js-action-title').each(function(index, elem) {
        $(this).next().removeAttr('style');
    });
  }
});