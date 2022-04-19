// 클릭 이벤트
const selectBox = document.querySelector('.select-box');
const ulBox = document.querySelector('.language');
const liBox = document.querySelector('.lang');

selectBox.addEventListener('click', () => {
  if (ulBox.classList.contains('invisible')) {
    ulBox.classList.remove('invisible');
    ulBox.classList.add('visible');
  } else {
    ulBox.classList.add('invisible');
    ulBox.classList.remove('visible');
  }
});
