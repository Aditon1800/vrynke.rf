function clickTitle() {
  $('.js-action-title').each(function(index, elem) {
      $(elem).on('click',function() {
        $(this).toggleClass('account--show-elem');
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

var linkRefresh = $('.account__link-refresh'),
      linkClass = linkRefresh[0].className;
      actionList = $('.account__action-list'),
      itemClassName = actionList.children()[0].className;

      function replaceLink() {
        actionList.append('<li class="' + itemClassName + '"></li>');
        linkRefresh.removeClass(linkRefresh[0].className).appendTo(actionList[0].lastElementChild);
      }

      if($(this).width() < 768) {
        replaceLink();
      }