
//Preloader
$(window).load(function() {
    $(".loader").delay(1000).fadeOut();
    $(".mask").delay(1000).fadeOut("slow");
});

$(document).ready(function() {

    $('.skillBar li').each(function() {
        $(this).appear(function() {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 2000);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 2200, "easeOutBounce")
        })
    });
    // Contact Form Request
    $(".validate").validate();
    var form = $('#contactform');
    var submit = $('#contactForm_submit');
    var alertx = $('.form-respond');
    // form submit event
    $(document).on('submit', '#contactform', function(e) {
        e.preventDefault(); // prevent default form submit
        // sending ajax request through jQuery
        $.ajax({
            url: 'sendemail.php',
            type: 'POST',
            dataType: 'html',
            data: form.serialize(),
            beforeSend: function() {
                alertx.fadeOut();
                submit.html('Sending....'); // change submit button text
            },
            success: function(data) {
                form.fadeOut(300);
                alertx.html(data).fadeIn(1000); // fade in response data     
                setTimeout(function() {
                    alertx.html(data).fadeOut(300);
                    $('#name, #email, #message').val('')
                    form.fadeIn(1800);
                }, 4000);
            },
            error: function(e) {
                console.log(e)
            }
        });
    });
    
    //Back To Top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200);
        } else {
            $("#back-top").fadeOut(200);
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
    return $("#" + target).toggleClass('open');

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


// =================================================
// Global Variables
// =================================================
(function($) {
    // Class toggle meant for showing and hiding content
    $('.view').click(function() {
    // Uncomment the following line to limit one show at a time.
        $('.view.show').removeClass('show');
        $(this).toggleClass('show');
        return false;
    });

    // When a link is clicked  
    $("a.tab").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");

        // Now figure out what the 'title' attribute value is and find the element with that id.  Then slide that down.  
        var content_show = $(this).attr("data");

        // Removes all classes and re-adds .main
        $(".main").attr('class', 'main');

        // Adds the title of the clicked link to .main
        $(".main").addClass(content_show);
        return false;
    });

    var $$ = jQuery;
    $$(window).scroll(function() {
        // find the id with class 'active' and remove it
        $$(".to-top").addClass("do-it");
        // get the amount the window has scrolled
        var scroll = $$(window).scrollTop();
        // add the 'active' class to the correct id based on the scroll amount
        if (scroll <=300) {
            $$(".to-top").removeClass("do-it");
        }
    });

    /*
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });*/
})(jQuery);

/************************************
Portfolio
************************************/
    /*===================================================================================*/
    /*  PROFOLIO                                                                         */
    /*===================================================================================*/
    var portfolio = portfolio || {},
        $portfolioItems = $('#portfolio-items'),
        $filtrable = $('#portfolio-filter'); 
    /*===================================================================================*/
    /*  PROFOLIO INIT FULL WIDTH                                                         */
    /*===================================================================================*/
  
    portfolio.fullWidth = function() {
        $(window).load(function() {
            $portfolioItems.isotope({
                animationEngine: 'best-available',
                animationOptions: {
                    duration: 250,
                    easing: 'easeInOutSine',
                    queue: false
                }
            });            
        });

        $filtrable.find('a').click(function(e) {
            e.preventDefault;
            var currentOption = $(this).data('cat');
            $filtrable.find('a').removeClass('active');
            $(this).addClass('active');
            if (currentOption !== '*') {
                currentOption = '.' + currentOption;
            }
            $portfolioItems.isotope({
                filter: currentOption
            });
            return false;
        });
    };


    /*===================================================================================*/
    /*  PROFOLIO INIT AJAX                                                               */
    /*===================================================================================*/
    portfolio.ajax = function() {
        function portfolioInit() {
            var newHash = "",
                $mainContent = $("#portfolio-ajax"),
                $pageWrap = $("#portfolio-wrap"),
                root = '#!projects/',
                rootLength = root.length,
                url;
            $portfolioItems.find("a").click(function() {
                window.location.hash = $(this).attr("href");
                return false;
            });
            //binding keypress function
            $("#portfolio-wrap").bind("keydown", function(e) {
            if (e.keyCode == 37) { 
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").next().find('a').attr("href");
                return false;
            } else if (e.keyCode == 39) {
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").prev().find('a').attr("href");
                return false;
            } else if (e.keyCode == 27) {
                $('#portfolio-wrap').fadeOut('100', function() {
                    $('.single-portfolio').remove();
                });
                history.pushState('', document.title, window.location.pathname);
                window.location.hash = '#_';
                return false;
            }   
            });
            $(window).bind('hashchange', function() {
                newHash = window.location.hash;
                url = newHash.replace(/[#\!]/g, '');
                if (newHash.substr(0, rootLength) == root) {
                    if ($pageWrap.is(':hidden')) {
                        $pageWrap.slideDown('3000', function() {});
                    }
                    $pageWrap.niceScroll({
                        cursorcolor: "#666",
                        cursorwidth: 6,
                        cursorborder: 0,
                        cursorborderradius: 0
                    });
                    $pageWrap.append('<div id="preloader"></div>');
                    $mainContent.load(url + " .single-portfolio", function(xhr, statusText, request) {
                        if (statusText == "success") {
                            setTimeout(function() {
                                $(".slider_container").flexslider({
                                    directionNav: true,
                                    controlNav: false
                                });
                                $('.single-portfolio .media-container').fitVids();
                                $pageWrap.find('#preloader').remove();
                            }, 300);
                        }
                        if (statusText == "error") {
                            $mainContent.html('<div class="row pad-top pad-bottom"><div class="col-md-12 pad-top pad-bottom"><div class="alert-message error"><p>The Content cannot be loaded.</p></div></div></div>');
                            $pageWrap.find('#preloader').remove();
                        }
                        closeProject();
                        nextProject();
                        prevProject();
                    });
                    $("#portfolio-items article").removeClass("current");
                    $("#portfolio-items a[href='" + newHash + "']").parent().addClass("current");
                    var projectIndex = $('#portfolio-items').find('article.current').index();
                    var projectLength = $('#portfolio-items article').length - 1;
                    if (projectIndex == 1) {
                        //jQuery('#next-project').addClass('HELLOOO')
                    } else if (projectIndex == projectLength) {
                        jQuery('#next-project').addClass('disabled');
                        jQuery('#prev-project').removeClass('disabled');
                    } else if (projectIndex == 0) {
                        jQuery('#prev-project').addClass('disabled');
                        jQuery('#next-project').removeClass('disabled');
                    } else {
                        jQuery('#prev-project, #next-project').removeClass('disabled');
                    }
                } else if (newHash == '') {
                    $('#portfolio-wrap').fadeOut('100', function() {
                        $('.single-portfolio').remove();
                    });
                }
            });
            $(window).trigger('hashchange');
        }

        function closeProject() {
            $('#close-project').on('click', function() {
                $('#portfolio-wrap').fadeOut('100', function() {
                    $('.single-portfolio').remove();
                });
                history.pushState('', document.title, window.location.pathname);
                window.location.hash = '#_';
                return false;
            });
        }

        function nextProject() {
            $("#next-project").on("click", function() {
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").next().find('a').attr("href");
                return false;
                console.log('Aqui '.window.location.hash);
            });
        }

        function prevProject() {
            $("#prev-project").on("click", function() {
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").prev().find('a').attr("href");
                return false;
            });
        }
        if ($portfolioItems.length) {
            portfolioInit();
        }
    };
    
    
    portfolio.fullWidth();
    portfolio.ajax();

/*===================================================================================*/
/*  Process                                                                          */
/*===================================================================================*/
$("#checkbox").click(function () {

    $(this).parent().toggleClass( 'on' );

    $('#myprocess').toggleClass('rotate');
   
})