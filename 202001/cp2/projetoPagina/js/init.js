(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel();
    window.setInterval(function(){$('.carousel').carousel('next')},5000);
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space
