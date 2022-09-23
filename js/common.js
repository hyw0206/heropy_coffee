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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
