(function jQ($) {
  $('.grid').masonry({});
  // $('.button-collapse').sideNav({
  //   menuWidth: 320,
  //   // Default is 240
  //   edge: 'left',
  //   // Choose the horizontal origin
  //   closeOnClick: true,
  //   // Closes side-nav on <a> clicks, useful for Angular/Meteor
  // });
  $('.scrollspy').scrollSpy();
  // $('.slider').slider({
  //   full_width: true,
  //   indicators: true,
  //   height: 600,
  //   transition: 500,
  //   interval: 6000,
  // });
  $('.modal-trigger').leanModal({
    ready: function blankScreen() {
      $('.trails').fadeOut();
    }, // Callback for Modal open
    complete: function showScreen() {
      $('.trails').fadeIn();
    }, // Callback for Modal close
  });
  // $('.hidden').hide();
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    // offset: $('.nav-wrapper').height(),
  });
  $('.collapsible').collapsible({
    accordion: false,
  });
  // end of document ready
}(jQuery));
// end of jQuery name space
