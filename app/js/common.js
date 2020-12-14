$(document).ready(function(){

    /** mobile-mnu customization */
    var mmenu = $('#mobile-mnu');
    var menuLogo = mmenu.data("logo");
    var $mmenu = mmenu.mmenu({
        navbars: [{
            content: [ "<img src=" + menuLogo + " class=\"img-responsive mm-logo\" alt=\"alt\"/>" ],
            height: 3
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /** end mobile-mnu customization */


    var element = document.querySelector( '.main-mnu' );

    var droppy = new Droppy( element, {
        parentSelector: 'li',
        dropdownSelector: 'li > ul',
        triggerSelector: 'a'
    } );

    $('.main-mnu li ul li').on('mouseenter', function(){
        $(this).addClass('hovered').siblings('li').removeClass('hovered');
    });


    $('.droppy__parent').on("mouseenter", function(){
        $(this).addClass('opened');
        $(this).children('.droppy__drop ').addClass('droppy__drop--active')
    });

    $('.droppy__parent').on("mouseleave", function(){
        $(this).removeClass('opened');
        $(this).children('.droppy__drop ').removeClass('droppy__drop--active')
    });


    $('.about-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: false,
        items: 1,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
        smartSpeed:700,
    });



    // new CircleType(document.getElementById('intro-curve'));
        new CircleType(document.getElementById('intro-curve'));

        // $('.curve-span').css('animation-name', 'rotateAnimation')




    let owl = $('.intro-slider');
    let $introCurrent = $('#intro-current');
    let $introTotal = $('#intro-total');
    let $slides = owl.find('.intro-slide').length;

    owl.on('initialized.owl.carousel', function(e){
        $introTotal.text($slides);
        let currentSlideIndex = e.item.index + 1;



        let currentSlide = $(".intro-slider .owl-item:nth-child("+currentSlideIndex+")");
        let prevSlide = $(".intro-slider .owl-item:nth-child("+(currentSlideIndex-1)+")");
        let nextSlide = $(".intro-slider .owl-item:nth-child("+(currentSlideIndex+1)+")");


        let curItem = currentSlide.find('.intro-slide');
        let prevItem = prevSlide.find('.intro-slide');
        let nextItem = nextSlide.find('.intro-slide');



        let curItemPreview = curItem.data('previewname');
        let prevItemPreview = prevItem.data('previewname');
        let nextItemPreview = nextItem.data('previewname');

        let curItemNumber = curItem.data('number');

        $('.intro-nav-current span').text(curItemPreview)
        $('.intro-nav-prev span').text(prevItemPreview)
        $('.intro-nav-next span').text(nextItemPreview)


    })


    owl.owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
        smartSpeed:700,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 2000,
    });

    owl.on('changed.owl.carousel', function(e) {

        let currentSlideIndex = e.item.index + 1;

        let currentSlide = $(".intro-slider .owl-item:nth-child("+currentSlideIndex+")");
        let prevSlide = $(".intro-slider .owl-item:nth-child("+(currentSlideIndex-1)+")");
        let nextSlide = $(".intro-slider .owl-item:nth-child("+(currentSlideIndex+1)+")");


        let curItem = currentSlide.find('.intro-slide');
        let prevItem = prevSlide.find('.intro-slide');
        let nextItem = nextSlide.find('.intro-slide');



        let curItemPreview = curItem.data('previewname');
        let prevItemPreview = prevItem.data('previewname');
        let nextItemPreview = nextItem.data('previewname');

        let curItemNumber = curItem.data('number');
        $introCurrent.text(curItemNumber);

        $('.intro-nav-current span').text(curItemPreview)
        $('.intro-nav-prev span').text(prevItemPreview)
        $('.intro-nav-next span').text(nextItemPreview)
    });


    $('.intro-nav-prev').click(function() {
        owl.trigger('prev.owl.carousel', 2000);
    });

    $('.intro-nav-next').click(function() {
        owl.trigger('next.owl.carousel', 2000);
    });




    $('.general-slider').owlCarousel({
        loop: false,
        nav:true,
        navText: false,
        items: 4,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                nav: false,
                dots: true
            },
            480: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    function heightses() {

        $('.cat-item-title').matchHeight({byRow: true,});

        if ($(window).width()>=480) {
        }
    }

    heightses();

    let categoriesNum = $('.index-cat-slider').find('.cat-item').length;
    let c;

    for (c=0; c<categoriesNum; c++) {
        new CircleType(document.getElementById('category-curve-' + c));
    }



    $('.curve-span').css('animation-name', 'rotateAnimation')


    $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
            $('.main-head').addClass('sticky')
        } else {
            $('.main-head').removeClass('sticky')
        }
    });



    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
