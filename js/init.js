  (function jQ($) {
    // $('.trails').fadeOut(1).fadeIn(3000);
    // $('.grid').masonry({});
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
    $('.modal-trigger').leanModal(
      // 	{
      //   ready: function blankScreen() {
      //     $('.trails').fadeOut();
      //   }, // Callback for Modal open
      //   complete: function showScreen() {
      //     $('.trails').fadeIn();
      //   }, // Callback for Modal close
      // }
    );
    // $('.hidden').hide();
    // $('.collapsible').collapsible({
    //   accordion: false,
    // });
    $('.btn-floating.btn-large.red').click(function hamburger() {
      $('.nav-icon4').toggleClass('open');
    });
    $('.tabs-wrapper').pushpin({
      top: $('.tabs-wrapper').offset().top,
      // offset: $('.nav-wrapper').height(),
    });
    if (!window.navigator.onLine) {
      $('.onlineOnly').hide();
      Materialize.toast('OFFLINE: External links removed.', 2000, 'rounded');
    } else {
      Materialize.toast('ONLINE: External links available.', 2000, 'rounded');
    }
    // end of document ready
  }(jQuery));
  // end of jQuery name space
  $(window).load(function start1() {
    // Animate loader off screen
    $('.loader').fadeOut(1000);
  });
