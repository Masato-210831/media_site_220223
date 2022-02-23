'use strict'

{
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('header-btn');
  const mask = document.getElementById('mask');
  
  // ----------------------
  // 隠しメニュー関係の挙動
  // ----------------------
  hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  mask.addEventListener('click', () => {
    header.classList.remove('open');
  });

  // ------------------
  // 動画をランダム再生
  // ------------------
  var video = document.getElementById('video');
  //  読み込み時の画像
  // video.poster = './img/sneaker-img.jpg'

  // 動画のリスト化
  var videoList = new Array(
    './video/sneaker1.mov',
    './video/sneaker2.mp4',
    './video/sneaker3.mp4',
  );

  // 0〜videoList.length未満の数をランダム抽出
  var randomNum = Math.floor(Math.random() * videoList.length);

  // ランダム抽出した数に対応するインデックス動画を再生する
  video.src = videoList[randomNum];


  // ------------
  // スライダー
  // ------------
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    centeredSlides: true,

    // レスポンシブ調整
    breakpoints: {
      600: {
        slidesPerView: 3.5
      }
    },
    // ページネーション
    pagination: {
      el: '.swiper-pagination'
    },

    // ナビボタン
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });


  // --------------------
  // スムーススクロール
  // --------------------

  // a要素の#（id名）を全て取得
   const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');


  //  取得したa要素にクッリクイベント実装
   for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {

      // a要素のクッリク時でのデフォルト動作をキャンセル
      e.preventDefault();
    
      // i番目のa要素のhrefを取得
      let href = smoothScrollTrigger[i].getAttribute('href');
    
      // 取得したhref変数に格納されているstrから#を取り除く
      let targetElement = document.getElementById(href.replace('#',''));

      // targetElement要素とブラウザ左上の高さを取得
      const rect = targetElement.getBoundingClientRect().top;
      // スクロール量を取得
      const offset = window.pageYOffset;
      // 固定ヘッダーの高さ
      const gap = 80;
      // 現在のブラウザ上部から要素までの高さ + サイトの最上部からブラウザ上部までの高さ - 固定ヘッダーの高さ
      const target = rect + offset - gap

      //スムーススクロールの実行
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
}