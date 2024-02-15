$(function () {
    $('.Main_content .itm_area').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });

    $('.Main_content .arrows .left').on('click', function () {
        $('.Main_content .itm_area').slick('slickPrev');
    });

    $('.Main_content .arrows .right').on('click', function () {
        $('.Main_content .itm_area').slick('slickNext');
    });

    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        console.log('내가 클릭한 것의 번호:', idx);
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });


    $('.main_product_slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: false,
    });

    $('.main_product .arrows .left').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });
    $('.main_product .arrows .right').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });


    // $('.Review .arrows .left').on('click', function () {
    //     $('.main_product_slide').slick('slickPrev');
    // });
    // $('.Review .arrows .right').on('click', function () {
    //     $('.main_product_slide').slick('slickNext');
    // });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 900)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 300) {
            $('.totop').addClass('on');
            // $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            // $('.Header').removeClass('on');
        }
    });

    $(window).on('wheel', function (e) {
        console.log(e.originalEvent.deltaY);
        let y = e.originalEvent.deltaY;

        if (y > 0) {
            $('.header').addClass('on');
        }
        else {
            $('.header').removeClass('on');
        }
    })
    AOS.init();

})