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




    if ($('#intro-curve').length) {
        new CircleType(document.getElementById('intro-curve'));
    }

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

        $('.intro-nav-current span').text(curItemPreview)
        $('.intro-nav-prev span').text(prevItemPreview)
        $('.intro-nav-next span').text(nextItemPreview)
    });


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




    $('.typic-slider').owlCarousel({
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
        $('.review-slide-title').matchHeight({byRow: true,});


        if ($(window).width()>=480) {
            $('.news-item-title').matchHeight({byRow: true,});
        }
    }

    heightses();

    $(window).on('load', function (){
        $(window).resize(function() {
            heightses();
        });

        heightses();
    });

    //circles for categories slider
    if ($('.index-cat-slider').length) {
        let categoriesNum = $('.index-cat-slider').find('.cat-item').length;
        let c;

        for (c = 0; c < categoriesNum; c++) {
            new CircleType(document.getElementById('category-curve-' + c));
        }
    }

    //circles for categories catalog
    if ($('.cat-cat').length) {
        let categoriesNum = $('.cat-cat').find('.cat-item').length;
        let c;

        for (c = 0; c < categoriesNum; c++) {
            new CircleType(document.getElementById('category-curve-' + c));
        }
    }


    //circles for services slider
    if ($('.index-serv-slider').length) {
        let servicesNum = $('.index-serv-slider').find('.cat-item').length;
        let s;

        for (s=0; s<servicesNum; s++) {
            new CircleType(document.getElementById('service-curve-' + s));
        }
    }

    //circles for services catalog
    if ($('.serv-cat').length) {
        let servicesNum = $('.serv-cat').find('.cat-item').length;
        let s;

        for (s=0; s<servicesNum; s++) {
            new CircleType(document.getElementById('service-curve-' + s));
        }
    }


    $('.curve-span').css('animation-name', 'rotateAnimation')


    $('.reviews-slider').owlCarousel({
        loop: true,
        nav:true,
        navText: false,
        items: 5,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            390: {
                items: 2,
                nav: false,
                dots: true
            },
            768: {
                items: 3,
            },
            992: {
                items: 3
            },
            1500: {
                items: 5
            }
        }
    });

    $('.review-slide').photoswipe({
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    });

    $('.product-slider').photoswipe({
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    });

    $('.serts-wrap').photoswipe({
        // showAnimationDuration: 0,
        // hideAnimationDuration: 0
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

    $('input[type="file"]').styler({
        filePlaceholder: "Прикрепить файл",
        fileBrowse: "",
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


    $('.product-slider').slick({
        arrows:false,
        dots: false,
        infinite:true,
        speed:500,
        fade: true,
        slidesToShow:1,
        asNavFor: '.product-slider-nav'
    });


    $('.product-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });


    $('.preloader').fadeOut();


    $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
            $('.main-head').addClass('sticky')
        } else {
            $('.main-head').removeClass('sticky')
        }
    });


    $('.vac-item:first-child').addClass('active').find('.vac-item-body').show();

    $('.vac-item-head').on("click", function(){
        var parent = $(this).parents('.vac-item');


        parent.toggleClass('active').find('.vac-item-body').slideToggle();

        parent.siblings('.vac-item').each(function(){
            $(this).removeClass('active');
            $(this).find('.vac-item-body').slideUp();
        });
    });


    /**
     * YOUTUBE SCRIPT
     */
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var videoPlayers = [];
    var i = 0;

    onYouTubeIframeAPIReady = function () {
        $('.video-player .you-player').each(function(){
            var $playerID = $(this).attr("id");
            var $videoID = $(this).parents('.video-player').data("video");
            var $start = $(this).siblings('.start-video');

            $start.attr("data-playern", i);

            $start.on('click', function(){
                var playerN = $(this).attr("data-playern");
                $(this).hide();
                $(this).siblings('.you-player').show();
                $(this).siblings('.thumbnail-container').hide();


                videoPlayers[i] = new YT.Player($playerID, {
                    videoId: $videoID,
                    playerVars: {
                        'autoplay': 0,
                        'rel': 0,
                        'showinfo': 0
                    },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });

                if(videoPlayers[i])
                {
                    var fn = function(){ videoPlayers[i].playVideo(); };
                    setTimeout(fn, 1500);
                }

            });
            i++;
        });
    };

    var p = document.getElementsByClassName("you-player");
    $(p).hide();

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.you-player').hide();
            $('.start-video').fadeIn('normal');
            $('.thumbnail-container').fadeIn('normal');
        }
    };
    /**
     * end YOUTUBE SCRIPT
     */


    $(function() {
        $("a[href='#popup-form'], a[href='#product-popup']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })
    });

    $("a[href='#product-popup']").click(function(){
        let title = $(this).data('title');
        $('#order-title').text(title);
    })

    $.validate({
        form : '.validate-form',
        scrollToTopOnError: false
    });

    var uPhone = $('.user-phone');
    uPhone.mask("+7 (999) 999-99-99",{autoclear: false});

    uPhone.on('click', function (ele) {
        var needelem = ele.target || event.srcElement;
        needelem.setSelectionRange(4,4);
        needelem.focus();
    });

    //E-mail Ajax Send
    $(".contact-form").submit(function() { //Change
        let th = $(this);
        let t;
        if(th.hasClass('dark-form')) {
            t = th.find(".btn-text").text();
            th.find(".btn").prop("disabled", "disabled").addClass("disabled").find('.btn-text').text("Отправлено!");
        } else {
            t = th.find(".btn").text();
            th.find(".btn").prop("disabled", "disabled").addClass("disabled").text("Отправлено!");
        }



        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                if(th.hasClass('dark-form')) {
                    th.find(".btn").removeAttr('disabled').removeClass("disabled").find('.btn-text').text(t);
                } else {
                    th.find(".btn").removeAttr('disabled').removeClass("disabled").text(t);
                }
                th.trigger("reset");
                // $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });






    function loadScript(url, callback){
        var script = document.createElement("script");

        if (script.readyState){  // IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  // Другие браузеры
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }


    function initMap() {
        ymaps.ready(function(){
            var mapId = $('#map'),
                attitude = mapId.data("att"),
                longtitude = mapId.data("long"),
                zoom = mapId.data("zoom"),
                marker = mapId.data("marker"),
                map = new ymaps.Map("map", {
                    center: [attitude, longtitude],
                    controls: ['zoomControl'],
                    zoom: zoom
                }),

                myPlacemark = new ymaps.Placemark(map.getCenter(), {}, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: marker,
                    // Размеры метки.
                    iconImageSize: [67, 67],
                });

            map.geoObjects.add(myPlacemark);
        });
    }

    if( $('#map').length )         // use this if you are using id to check
    {
        setTimeout(function(){
            loadScript("https://api-maps.yandex.ru/2.1/?apikey=e470b388-a1d0-4edf-acdc-34b4bc5bedee&lang=ru_RU&loadByRequire=1", function(){
                initMap();
            });
        }, 2000);
    }

});
