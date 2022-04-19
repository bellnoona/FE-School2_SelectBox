// 클릭 이벤트
const selectBox = document.querySelector('.select-box');
const ulBox = document.querySelector('.language');
const liBox = document.querySelector('.lang');

selectBox.addEventListener('click', () => {
  if (ulBox.classList.contains('invisible')) {
    ulBox.classList.remove('invisible');
    ulBox.classList.add('visible');

    // 화살표 이미지 (위 아래) 변경
    selectBox.classList.add('on');
  } else {
    ulBox.classList.add('invisible');
    ulBox.classList.remove('visible');

    // 화살표 이미지 (위 아래) 변경
    selectBox.classList.remove('on');
  }
});

// list 클릭 시 button에 나타내기

const liBtn = document.querySelector('.li-btn');
liBtn.addEventListener('click', (e) => {
  console.log(e.target.nodeName);
  console.log(e.target.innerText);
});
