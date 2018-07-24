$(document).foundation();
(function($) {
    "use strict"

    var $window = $(window),
        $gravHeight = $(document).height(),
        $scrollTop = $('.scroll-top'),
        $html = $('html, body'),
        $app = {},
        $menu = $('.dropdown');

    $(document).ready(function() {
        /***************** Animation ******************/
        var wow = new WOW({
            boxClass: 'able',
            animateClass: 'animated',
            offset: 100,
            mobile: false,
            live: true
        });

        wow.init();

        /***************** Quote Rotator ****************/
        $('#cbp-qtrotator').cbpQTRotator();

        /***************** Foundation 6 Dropdown Menu ******************/

        // Top menu
        $app.topMenu = function() {

            $menu.on('show.zf.dropdownmenu', function(ev, $el) {
                $el.css({ 'display': 'none' }).stop().slideDown(400);
            });

            $menu.on('hide.zf.dropdownmenu', function(ev, $el) {
                $el.children('ul').css({ 'display': 'inherit' }).stop().slideUp(200);
            });

        };

        // Default setting
        Foundation.DropdownMenu.defaults.closingTime = 100;
        Foundation.DropdownMenu.defaults.hoverDelay = 300;

        $app.topMenu();

        /***************** Scroll To Top ******************/

        $window.scroll(function() {
            var $this = $(this);

            ($this.scrollTop() > $gravHeight / 3) ? $scrollTop.addClass('scroll-visible'): $scrollTop.removeClass('scroll-visible')
        });

        $scrollTop.on('click', function(e) {
            e.preventDefault();
            $html.animate({ scrollTop: '0px' }, 800);
            return false;
        });

    });

})(jQuery);

// -----------------------------------------------------------------------------
// Mobile Menu
// -----------------------------------------------------------------------------

(function($) {
    "use strict"

    var $topbar = $('.top-bar'),
        $hamb = $('.hamburger'),
        $titlebar = $('.title-bar'),
        $mobile = $("#mobile-menu"),
        $titlebar = $(".title-bar");

    $(document).ready(function() {

        $topbar.css('display', '');

        $hamb.on('click', function() {
            ($titlebar.hasClass('dark-bar')) ? $titlebar.removeClass('dark-bar'): $titlebar.addClass('dark-bar');
        });

        $hamb.on('click', function(e) {
            $topbar.css('display', '');

            $mobile.slideToggle(500, function() {
                $titlebar.toggleClass('works');
            });

            e.preventDefault();

        });

        var forEach = function(t, o, r) {
            if ('[object Object]' === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else
                for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
        };

        var hamburgers = document.querySelectorAll('.hamburger');
        if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener('click', function() {
                    this.classList.toggle('is-active');
                }, false);
            });
        }

    });
})(jQuery);

// -----------------------------------------------------------------------------
// Menu Behavior
// -----------------------------------------------------------------------------

(function($) {
    "use strict";
    $(document).ready(function() {

        // scroll
        var scrollWindow = function() {
            $(window).scroll(function() {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.site-navigation'),
                    ot = $('#hero').innerHeight() - 300;

                if (st > ot) {
                    if (!navbar.hasClass('scrolled')) {
                        navbar.addClass('scrolled');
                    }
                }
                if (st < ot) {
                    if (navbar.hasClass('scrolled')) {
                        navbar.removeClass('scrolled sc-up');
                    }
                }
                if (st > ot + 350) {
                    if (!navbar.hasClass('sc-down')) {
                        navbar.addClass('sc-down');
                    }
                }
                if (st < ot + 350) {
                    if (navbar.hasClass('sc-down')) {
                        navbar.removeClass('sc-down');
                        navbar.addClass('sc-up');
                    }
                }
            });
        };
        scrollWindow();
        $(window).resize(function() {
            scrollWindow();
        });

    });

})(jQuery);

// -----------------------------------------------------------------------------
// Parallax functionality
// -----------------------------------------------------------------------------

(function($) {

    "use strict"
    var wScroll;

    function parallaxGrav() {
        wScroll = $(window).scrollTop();
        $('.parallax-grav').css({
            'background-position': 'center ' + (wScroll / 2 + 'px')
        });
    }

    $(document).ready(function() {
        $(window).scroll(function() {
            parallaxGrav();
        });
    });

})(jQuery);