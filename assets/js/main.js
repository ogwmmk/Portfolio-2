
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

// header_menuBtnホバーしたら色変わる
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".header_container").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-headerColor").addClass("headerColorHover");
    } else {
      $(".js-headerColor").removeClass("headerColorHover");
    }
  });
});


//

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
// document.addEventListener("scroll", () => {
//   const images = document.querySelectorAll(".header_chatbotIcon");
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;

//   images.forEach((image, index) => {
//     const start = index * windowHeight;
//     const end = (index + 1) * windowHeight;

//     if (scrollPosition >= start && scrollPosition < end) {
//       image.classList.add("active");
//     } else {
//       image.classList.remove("active");
//     }
//   });
// });
//

// 
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const changeHeight = 300; // 画像を変更するスクロール位置

  const icon1 = document.querySelectorAll('.header_chatbotIcon')[0]; // 最初の画像
  const icon2 = document.querySelectorAll('.header_chatbotIcon')[1]; // 2番目の画像

  if (scrollPosition > changeHeight) {
    icon1.classList.remove('active'); // 最初の画像を非表示
    icon2.classList.add('active');    // 2番目の画像を表示
  } else {
    icon1.classList.add('active');    // 最初の画像を表示
    icon2.classList.remove('active'); // 2番目の画像を非表示
  }
});


//ヘッダーイメージ
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
  const header = document.getElementById('js-hamburger');
  const scrollPosition = window.scrollY;
  const triggerHeight = 100; // クラスを切り替えるスクロール量（ピクセル単位）

  if (scrollPosition > triggerHeight) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // クラスを追加
        observer.unobserve(entry.target);  // 一度だけ表示させる場合
      }
    });
  });

  fadeInElements.forEach((el) => observer.observe(el));
});



// ハンバーガーメニューとメニューを取得
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.getElementById('menu');

// ハンバーガーメニューをクリックしたときのイベント
hamburger.addEventListener('click', () => {
  // メニューの表示/非表示を切り替え
  menu.classList.toggle('show');

  // ハンバーガーアイコンのアニメーション切り替え
  hamburger.classList.toggle('active');
});
