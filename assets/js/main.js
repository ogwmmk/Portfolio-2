
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





//
document.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".header_chatbotIcon");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  images.forEach((image, index) => {
    const start = index * windowHeight;
    const end = (index + 1) * windowHeight;

    if (scrollPosition >= start && scrollPosition < end) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
});






// ヘッダー スライド

// $(document).ready(function() {
//   const images = [

//       'assets/img/h-1.jpg',
//       'assets/img/main_1.jpg',
//       'assets/img/h-1.jpg',
//   ];

//   let currentIndex = 0;

//   function changeBackground() {
//       currentIndex = (currentIndex + 1) % images.length;
//       $('.header_container').css('background-image', `url('${images[currentIndex]}')`);
//   }

//   // 5秒ごとに背景を変更
//   setInterval(changeBackground, 5000);
// });


// ためし2
const images = [
      'assets/img/h-1.jpg',
      'assets/img/main_1.jpg',
      'assets/img/h-1.jpg',
];

let currentIndex = 0;
const headerContainer = document.querySelector('.header_image');

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  headerContainer.style.background_image = `url(${images[currentIndex]})`;
}


// 5秒ごとに背景画像を切り替え
setInterval(changeBackgroundImage, 5000);



//ハンバーガーメニュー/

window.addEventListener('scroll', () => {
  const header = document.getElementByClassName('header_logo');
  const scrollPosition = window.scrollY;
  const triggerHeight = 100; // クラスを切り替えるスクロール量（ピクセル単位）

  if (scrollPosition > triggerHeight) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

