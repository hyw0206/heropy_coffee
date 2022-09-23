// 요소 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소 클릭시 실행
searchInputEl.addEventListener('click', function() {
  searchInputEl.focus();
});
// input 요소에 포커스 되면 실행
// focused class를 추가 / placeholder 속성에 통합검색 값을 지정
searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
// input 요소에 focus가 blur (해제) 되면 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  // focus가 blur 되면 값을 지움
  searchInputEl.value = null;
  searchInputEl.setAttribute('placeholder','');
});
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// scrollY -> Y축으로 얼마나 스크롤했는지 체크
window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to (요소, 시간, 속성) 0.6초간 자연스럽게 100% 불투명도로 사라짐
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function() {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});
// 나타날 요소 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// forEach 반복문으로, 요소들에게 순차적으로 나타나게 적용 
// (한번에 나타나지 않게, delay를 index에 따라 각기 다르게 함.)
fadeEls.forEach(function(fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  direction: 'horizontal', // 수평 슬라이드, 기본값
  autoplay: true,
  loop: true,
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데로
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼
    nextEl: '.promotion .swiper-button-next'  // 다음 버튼
  }
});
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
promotionToggleBtn.addEventListener('click', function() {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 시작 할 건지 지연 시간
  y: 15, // transform : translateY와 같음
  repeat: -1, // -1 : 무한 반복
  yoyo: true, // 한번 재생되면 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating2', 2, {
  delay: .5, // 얼마나 늦게 시작 할 건지 지연 시간
  y: 15, // transform : translateY와 같음
  repeat: -1, // -1 : 무한 반복
  yoyo: true, // 한번 재생되면 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating3', 2.5, {
  delay: 1.5, // 얼마나 늦게 시작 할 건지 지연 시간
  y: 20, // transform : translateY와 같음
  repeat: -1, // -1 : 무한 반복
  yoyo: true, // 한번 재생되면 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene ({ // 감시할 장면을 추가
      triggerElement: spyEl, // 보여짐 여부 감시할 요소
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 화면 할당
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: { // 슬라이드 이전/다음 버튼
    prevEl: '.awards .swiper-button-prev', // 이전 버튼
    nextEl: '.awards .swiper-button-next'  // 다음 버튼
  }
});
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
