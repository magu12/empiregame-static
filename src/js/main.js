jQuery(document).ready(function ($) {


    $('.burger').on('click', () => {
        $('.burger, .header ul').toggleClass('active');
    });

    $('ul li a').on('click', function () {
        if ($('main').hasClass('main')) {
            let to = $(this).attr('href').split('#')[1];
            $('.burger, .header ul').removeClass('active');
            if (to != 'game')
                $('html').animate({
                    scrollTop: $(`.${to}`).offset().top
                }, 0);
            else
                $('html').animate({
                    scrollTop: $(`.${to}`).offset().top - 150
                }, 0);
        } else {
            location.href = $('.logo').attr('href') + '/' + $(this).attr('href');
        }
    });


    if ($('main').hasClass('main')) {
        if (location.hash != '') {
            console.log(location.hash);
            let to = location.hash.split('#')[1];
            $('.burger, .header ul').removeClass('active');
            if (to != 'game')
                $('html').animate({
                    scrollTop: $(`.${to}`).offset().top
                }, 0);
            else
                $('html').animate({
                    scrollTop: $(`.${to}`).offset().top - 150
                }, 0);
        }
    }

    $('.to-video').on('click', function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.video').offset().top - $(window).height() / 2 + 150
        }, 0);
        setTimeout(() => {
            $('.video').addClass('show');
        }, 300)
    })

    $('.video').on('click', function () {
        if ($(this).hasClass('hide')) {
            $(this).removeClass('hide');
            $('.video video').get(0).pause();
        } else {
            $(this).addClass('hide');
            $('.video video').get(0).play();
        }
    });


    $(window).scroll(function () {
        if ($('main').hasClass('main')) {
            if ($(this).scrollTop() + $(this).height() / 2 > $('.game').offset().top + $('.game').height() - $('.game__content').height()) {
                $('.game__content').css('position', 'absolute');
                $('.game__content').css('top', $('.game').height() - $('.game__content').height() + 'px');
                return
            }
            if ($('.game').offset().top <= $('.game__content').offset().top || $(this).scrollTop() + $(this).height() / 2 < $('.game').offset().top) {
                console.log('asd');
                $('.game__content').css('position', 'absolute');
                $('.game__content').css('top', '17%');
            }
            if ($(this).scrollTop() + $(this).height() / 2 > $('.game__content').offset().top + $('.game__content').height() / 2) {
                $('.game__content').css('position', 'fixed');
                $('.game__content').css('top', $(this).height() / 2 + 'px');
            }
        }
    });



    $(window).scroll(function () {

        if ($('main').hasClass('main') && $(this).width() > 786) {
            $('.anim').each(function () {
                if (!$(this).hasClass('slide-in-fwd') || $(this).closest('section').hasClass('history')) {
                    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() + 100) {
                        $(this).addClass('show');
                    }
                }
                else {
                    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() / 4) {
                        $(this).addClass('show');
                    }
                }
            });

            $('.history__year').each(function () {
                if ($(window).scrollTop() + ($(window).height() / 2) > $(this).offset().top && $(window).scrollTop() + ($(window).height() / 2) < $(this).offset().top + + $(this).height()) {
                    $('.history__year').removeClass('red');
                    $(this).addClass('red');
                }
            });
        }
        else if ($(this).width() < 786) {
            $('.anim').each(function () {
                if (!$(this).hasClass('slide-in-fwd') || $(this).closest('section').hasClass('history')) {
                    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                        $(this).addClass('show');
                    }
                }
                else {
                    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                        $(this).addClass('show');
                    }
                }
            });

            $('.history__year').each(function () {
                if ($(window).scrollTop() + ($(window).height() / 2) > $(this).offset().top && $(window).scrollTop() + ($(window).height() / 2) < $(this).offset().top + + $(this).height()) {
                    $('.history__year').removeClass('red');
                    $(this).addClass('red');
                }
            });
        }

    });

    $('.anim').each(function () {

        if ($('main').hasClass('main')) {
            if (!$(this).hasClass('slide-in-fwd') || $(this).closest('section').hasClass('history')) {
                if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() + 100) {
                    $(this).addClass('show');
                }
            }
            else {
                if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() / 4) {
                    $(this).addClass('show');
                }
            }
        }
    });

    $(window).scroll(function (e) {

        if ($('main').hasClass('main')) {
            if (e.originalEvent.wheelDelta >= 0) {
                $('.diamonds').find('img').each(function () {
                    $(this).css('transform', 'translateY(' + ($(window).scrollTop() / (5 * (index + 1))) + 'px)');
                })
            }
            else {
                $('.diamonds').find('img').each(function (index) {
                    $(this).css('transform', 'translateY(' + ($(window).scrollTop() / (5 * (index + 1))) * -1 + 'px)');
                })
            }
        }
    });



    $(window).scroll(function (e) {

        if ($('main').hasClass('main')) {
            if ($(this).scrollTop() > $('.game').offset().top - $('.game').height() && $(this).scrollTop() < $('.game').offset().top + $('.game').height()) {
                if (e.originalEvent.wheelDelta >= 0) {
                    $('.money').find('img').each(function () {
                        $(this).css('transform', 'translateY(' + (($(window).scrollTop() - $('.game').offset().top) / (2 * (index + 1))) + 'px)');
                    })
                }
                else {
                    $('.money').find('img').each(function (index) {
                        $(this).css('transform', 'translateY(' + (($(window).scrollTop() - $('.game').offset().top) / (2 * (index + 1))) * -1 + 'px)');
                    })
                }
            }
        }
    });


    var swiper = new Swiper(".team__items.mobile", {
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var newsSwiper = new Swiper(".news__items.mobile", {
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var newsPcSwiper = new Swiper(".news__items.pc", {
        spaceBetween: 50,
        slidesPerView: 2,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});