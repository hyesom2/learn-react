// --------------------------------------------------------------------------
// > ✅ 명령형 프로그래밍
// --------------------------------------------------------------------------
// - [x] 체크박스 인풋이 체크 상태이면, 버튼은 활성 상태입니다.
// - [x] 체크박스 인풋이 체크 상태가 아니면, 버튼은 비활성 상태입니다.
// - [x] 버튼 상태 변경에 따라 레이블은 "활성 상태", "비활성 상태"로 변경되어야 합니다.
// --------------------------------------------------------------------------

// > 1. 대상 찾기
const container = document.getElementById('imperative-programming');
console.log(container);
const checkbox = container.querySelector('[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button');

// > 2. 찾은 대상에 이벤트 연결
checkbox.addEventListener('change', handleChange);

// > 3. 이벤트 핸들러(기능) 작성(구현)
function handleChange(e) {
  const { checked } = e.target;
  console.log(checked, typeof checked);

  if (checked) {
    // true상태
    // button.setAttribute('disabled', 'false');
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    // false상태
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태';
  }
}