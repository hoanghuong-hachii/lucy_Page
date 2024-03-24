

$(document).ready(function() {
    $('#control-menu__left').click(function(){
        console.log('click left')
        $(".nav-category").animate({scrollLeft: "-=100px"});
    });
    
    $('#control-menu__right').click(function(){
        $(".nav-category").animate({scrollLeft: "+=100px"});
    });


    $('.btn-left').click(function(){
        console.log('click left')
        $(".child-img").animate({scrollLeft: "-=100px"});
    });
    
    $('.btn-right').click(function(){
        $(".child-img").animate({scrollLeft: "+=100px"});
    });
    $('.default').click(function(event){
        event.preventDefault();
    });

    

})

$(document).ready(function(){
    $('.icon-down').show()
    $('.menu-item').click(function(){
        // $('.menu-item').not(this).find('.submenu-item').removeClass('active');
        // $('.menu-item').not(this).find('.icon-down').show()
        // $('.menu-item').not(this).find('.icon-up').hide()
        // $(this).find('.submenu-item').toggleClass('active');
        // $(this).find('.icon-up').show()
        // $(this).find('.icon-down').hide()
        $(this).find('.submenu-item').slideToggle("slow")
    });

    $('.open-modal-view').click(function() {
        $('.modal-overlay').show()
        $('.modal-container').show()
    })

    $('.open-modal-cart').click(function() {
        $('.modal-overlay').show()
        $('.modal-addCart').show()
    })

    $('.open-movie').click(function() {
        $('.modal-overlay').show()
        $('.movie-container').show()
    })

    $('.header-menu').click(function() {
        $('.modal-overlay').show()
        $('.navbar-menu').show().css('transform', 'translateX(0)')
    })

    $('.modal-overlay').click(function() {
        $('.modal-overlay').hide()
        $('.navbar-menu').css('transform', 'translateX(-100%)')
        $('.modal-addCart').hide()
        $('.movie-container').hide()
        $('.modal-container').hide()
    })

    $('.modal-close').click(function() {
        $('.modal-overlay').hide()
        $('.navbar-menu').css('transform', 'translateX(-100%)')
        $('.modal-addCart').hide()
        $('.modal-container').hide()
        $('.movie-container').hide()

    })

    $('.menu-close').click(function() {
        $('.modal-overlay').hide()
        $('.navbar-menu').css('transform', 'translateX(-100%)')
    })

    $('.nav-list .item').click(function() {
        $('.nav-list .item').not(this).find('a').css({
            "color":'var(--text-color)',
            "border-bottom": 'none'
        })
        $(this).find('a').css({
            "color":'var(--subColor)',
            "border-bottom": 'solid 2px var(--subColor)'
        })
    })


});

