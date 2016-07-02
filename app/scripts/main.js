
//Preloader
$(window).load(function() {
    $('.loader').delay(1000).fadeOut();
    $('.mask').delay(1000).fadeOut('slow');
});

$(document).ready(function() {


    //Back To Top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('#back-top').fadeIn(200);
        } else {
            $('#back-top').fadeOut(200);
        }
    });
    $('#back-top').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });
});
//Navigation Scrolling
$(function() {
    $('#menu li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});
//Scroll nav Scrolling
$(function() {
    $('a.scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});


  $('.menu-toggle').on('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).toggleClass('open').data('toggle');
    $(this).parent().toggleClass('active-width');
    return $('#' + target).toggleClass('open');

  });


$(window).scroll(function(){
  var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
  var windowHeight = $(window).height(); // get the height of the window
  var docHeight = $(document).height();
  var menu = $('#menu-wrapper');
  var homeHeight = $('#home').height();

    if(windowPos + 20>= homeHeight) {
    menu.addClass('dark').removeClass('light');
    } else {
    menu.addClass('light').removeClass('dark');
    }
});
