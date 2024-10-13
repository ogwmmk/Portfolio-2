
// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".header_container").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});

// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".header_container").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header_2").addClass("headerColorScroll_2");
    } else {
      $(".js-header_2").removeClass("headerColorScroll_2");
    }
  });
});

