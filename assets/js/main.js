
// スクロールするとheaderの色変更
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

// スクロールするとheader_LanguageTubの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".header_container").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header-tub").addClass("headerColorScroll-tub");
    } else {
      $(".js-header-tub").removeClass("headerColorScroll-tub");
    }
  });
});




// スクロールするとheader_guideの色変更

$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".header_container").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header-guide").addClass("headerColorScroll-guide");
    } else {
      $(".js-header-guide").removeClass("headerColorScroll-guide");
    }
  });
});

// ヘッダー スライド

$(document).ready(function() {
  const images = [

      'assets/img/h-1.jpg',
      'assets/img/main_1.jpg',
      'assets/img/h-1.jpg',
  ];

  let currentIndex = 0;

  function changeBackground() {
      currentIndex = (currentIndex + 1) % images.length;
      $('.header_container').css('background-image', `url('${images[currentIndex]}')`);
  }

  // 5秒ごとに背景を変更
  setInterval(changeBackground, 5000);
});
fin

// ためし2
