// getModal function
function getModal (button, modal) {
   $(button).click(function() {
    $(modal).fadeIn('fast');
    $('.overlay').fadeIn('fast');
  });           
}

// call getModal function
getModal('.js-modal-agr', '.modal--agr');
getModal('.js-modal-pers', '.modal--pers');
getModal('.js-call-message', '.modal--mes');
getModal('.js-question', '.modal--question');

// close Modal
$('.modal__close, .overlay, modal__close--mes').click(function() {
    $('.overlay').fadeOut('fast');
    $('.modal').fadeOut('fast');
});