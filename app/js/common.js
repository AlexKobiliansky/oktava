$(document).ready(function(){
    var element = document.querySelector( '.main-mnu' );

    var droppy = new Droppy( element, {
        parentSelector: 'li',
        dropdownSelector: 'li > ul',
        triggerSelector: 'a'
    } );

    $('.main-mnu li ul li').on('mouseenter', function(){
        $(this).addClass('hovered').siblings('li').removeClass('hovered');
    });

    // $('.droppy__parent').click(function(){
    //     $(this).toggleClass('opened');
    // })




    $('.droppy__parent').on("mouseenter", function(){
        $(this).addClass('opened');
        $(this).children('.droppy__drop ').addClass('droppy__drop--active')
    });

    $('.droppy__parent').on("mouseleave", function(){

        let th = $(this);

        // setTimeout(function(){
            th.removeClass('opened');
            th.children('.droppy__drop ').removeClass('droppy__drop--active')
        // }, 2000);
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
