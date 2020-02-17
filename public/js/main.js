$(function () {
    changeUiHomePage();
});
function changeUiHomePage() {
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        $('#banner1').attr("src", "./img/banner/banner-index-sm.jpg");
        $('#banner2').attr("src", "./img/banner/banner-index-sm2.jpg");
        $('#banner3').attr("src", "./img/banner/banner-index-sm3.jpg");
        $('#banner4').attr("src", "./img/banner/banner-index-sm4.jpg");
        $('#story').attr("src", "./img/story/story1-sm.png");
        $('#story2').attr("src", "./img/story/story2-sm.png");
        $('#story3').attr("src", "./img/story/story3-sm.png");
        $('#promo-gift').attr("src", "./img/banner/gift-m.png");
        $('#banner-gift').attr("src", "./img/banner/banner-index-sm.jpg");
        $('#registration').attr("src", "./img/promo/registration-sm.png");


    } else {
        $('#banner1').attr("src", "./img/banner/banner.png");
        $('#banner2').attr("src", "./img/banner/banner-index2.png");
        $('#banner3').attr("src", "./img/banner/banner-index3.png");
        $('#banner4').attr("src", "./img/banner/banner-index4.png");
        $('#story').attr("src", "./img/story/story1.png");
        $('#story2').attr("src", "./img/story/story2.png");
        $('#story3').attr("src", "./img/story/story3.png");
        $('#promo-gift').attr("src", "./img/banner/gift.png");
        $('#banner-gift').attr("src", "./img/banner/banner.png");
        $('#registration').attr("src", "./img/promo/registration.png");

    }

    if (window.matchMedia && window.matchMedia('(max-width: 576px)').matches) {
        $('#banner1').attr("src", "./img/banner/banner-index-sm.jpg");
        $('#banner2').attr("src", "./img/banner/banner-index-sm2.jpg");
        $('#banner3').attr("src", "./img/banner/banner-index-sm3.jpg");
        $('#banner4').attr("src", "./img/banner/banner-index-sm4.jpg");
        $('#story').attr("src", "./img/story/story1-sm.png");
        $('#story2').attr("src", "./img/story/story2-sm.png");
        $('#story3').attr("src", "./img/story/story3-sm.png");
        $('#promo-gift').attr("src", "./img/banner/gift-m.png");
        $('#banner-gift').attr("src", "./img/banner/banner-index-sm.jpg");
        $('#registration').attr("src", "./img/promo/registration-sm.png");
    }
}

$(window).resize(changeUiHomePage);
//---------------------------CAROUSEL------------------------------
$('.banner-index').slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    speed: 1000,
    arrows: true,
    dots: false
});
$('.trainer-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
});
$('.stories').slick({
    infinite: false,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
});
$(".testimonial-reel").slick({
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    lazyLoad: "ondemand",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: true

            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "15px"
            }
        }
    ]
});
$('.blog-new').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                dots: false
            }
        }]
});
$('.images-slide').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                dots: false
            }
        }]
});
//----------------------BACK-TO-TOP-----------------------
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//---------------------back-to-home-----------------

// -------------------FILTER-COURSE----------------------
$(document).ready(function () {

    $(".filter-course").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    $('.filter-course').click(function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
    });
});

// -------------------FILTER-SCHEDULE----------------------
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "monday") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    $('.filter-button').click(function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
    });
});

//-----------------------------VIDEO-MODAL------------------
$(document).ready(function () {
    autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
        var trigger = $('.videoModalTriger');
    trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });
};
    




