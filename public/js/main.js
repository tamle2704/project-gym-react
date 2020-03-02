$(function() {
  changeUiHomePage();
});
function changeUiHomePage() {
  if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
    $("#banner1").attr("src", "./img/banner/banner-index-sm.jpg");
    $("#banner2").attr("src", "./img/banner/banner-index-sm2.jpg");
    $("#banner3").attr("src", "./img/banner/banner-index-sm3.jpg");
    $("#banner4").attr("src", "./img/banner/banner-index-sm4.jpg");
    $("#story").attr("src", "./img/story/story1-sm.png");
    $("#story2").attr("src", "./img/story/story2-sm.png");
    $("#story3").attr("src", "./img/story/story3-sm.png");
    $("#promo-gift").attr("src", "./img/banner/gift-m.png");
    $("#banner-gift").attr("src", "./img/banner/banner-index-sm.jpg");
    $("#registration").attr("src", "./img/promo/registration-sm.png");
  } else {
    $("#banner1").attr("src", "./img/banner/banner.png");
    $("#banner2").attr("src", "./img/banner/banner-index2.png");
    $("#banner3").attr("src", "./img/banner/banner-index3.png");
    $("#banner4").attr("src", "./img/banner/banner-index4.png");
    $("#story").attr("src", "./img/story/story1.png");
    $("#story2").attr("src", "./img/story/story2.png");
    $("#story3").attr("src", "./img/story/story3.png");
    $("#promo-gift").attr("src", "./img/banner/gift.png");
    $("#banner-gift").attr("src", "./img/banner/banner.png");
    $("#registration").attr("src", "./img/promo/registration.png");
  }

  if (window.matchMedia && window.matchMedia("(max-width: 576px)").matches) {
    $("#banner1").attr("src", "./img/banner/banner-index-sm.jpg");
    $("#banner2").attr("src", "./img/banner/banner-index-sm2.jpg");
    $("#banner3").attr("src", "./img/banner/banner-index-sm3.jpg");
    $("#banner4").attr("src", "./img/banner/banner-index-sm4.jpg");
    $("#story").attr("src", "./img/story/story1-sm.png");
    $("#story2").attr("src", "./img/story/story2-sm.png");
    $("#story3").attr("src", "./img/story/story3-sm.png");
    $("#promo-gift").attr("src", "./img/banner/gift-m.png");
    $("#banner-gift").attr("src", "./img/banner/banner-index-sm.jpg");
    $("#registration").attr("src", "./img/promo/registration-sm.png");
  }
}

$(window).resize(changeUiHomePage);
