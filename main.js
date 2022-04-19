// 클릭 이벤트
const selectBox = document.querySelector('.select-box');
const ulBox = document.querySelector('.language');

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

// list 클릭 시 button에 innerText(과목) 나타내기
const liBtn = document.querySelector('.li-btn');
const liBox = document.querySelectorAll('.lang');

ulBox.addEventListener('click', (e) => {
  //   console.log(e.target);

  liBox.forEach((li) => {
    // console.log(li.innerText);

    // button영역을 넘어서 li부분을 클릭했을 경우 => li의 childNodes[1] (= button태그 정보)를 target에 담아준다.
    const target =
      e.target.nodeName === 'BUTTON' ? e.target : e.target.childNodes[1];

    console.log(target);
    if (li.innerText) {
      selectBox.innerText = target.innerText;

      // 글자 표시해준 후 박스 닫아주기
      ulBox.classList.add('invisible');
    } else {
      return;
    }
  });
});

// 콘솔문의 추후에 제거. 헷갈려서 겁나 찍어놓았음.
// ** 수정사항 **
// 1. <li>태그에서 button영역 밖을 클릭하면 UI가 깨지는 버그 해결.
