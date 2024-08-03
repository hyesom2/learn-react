// --------------------------------------------------------------------------
// ✅ 부수 효과란?
// --------------------------------------------------------------------------
// - [ ] 부수 효과(Side effects)란?
// 참고) 부작용(Negative Side effects)
// - [ ] 부수 효과 없는 함수 코드의 장점
// - [ ] 부수 효과, 과연 나쁜 것일까? 🧐
// --------------------------------------------------------------------------

// 사용자의 인원수를 반환하는 함수
// - 네트워크 요청/응답 기능 (액션)
// - 응답받은 결과를 출력하는 기능 (계산)
async function getUsersCount(endpoint) {
  /* 로직 작성을 하는데
    1. 순수하게만 작성
    2. 순수하지않게 작성
  */
  // 계산 영역 + 액션을 취하는 영역이 구분 짓지 않음
  const response = await fetch(endpoint);
  const jsonData = await response.json();
  return jsonData.length;
}
/*
  1.동일 입력임에도 getUsersCount 함수는 예측이 가능(결과가 동일)한가? => X
  만약 동일하지 않다면? => 이 함수는 순수하지 않다.
*/
getUsersCount('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data));
getUsersCount('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data));

// ----------------------------------------------------------------------------------------------------
let endpoint = 'https://jsonplaceholder.typicode.com/users';
getUsersCount(endpoint).then((data) => console.log(data));

endpoint = 'https://jsonplaceholder.typicode.com/posts';
getUsersCount(endpoint).then((data) => console.log(data));
/* 
  2. endpoint에 따라 예측 가능한 부분(순수 함수) + 예측이 어려운 부분(사이드 이펙트)를 구분짓자.
*/
// 2-1. 예측이 어려운 부분(사이드 이펙트) 처리 기능(함수) 분리
async function fetchUsers(endpoint) {
  const response = await fetch(endpoint);
  const jsonData = await response.json();
  return jsonData ;
}

// 2-2. 예측이 가능한 부분(순수 함수) 기능(함수) 분리
function getUserLength(users) {
  return users.length;
}

// 예)
async function demo() {
  const users = await fetchUsers('https://jsonplaceholder.typicode.com/users');
  const userCount = getUserLength(users);
  console.log('userCount :', userCount);
}
demo();

// * 리액트 컴포넌트는 순수 해야한다. => 컴포넌트 내부에 사이드 이펙트 로직을 포함해서는 안된다.
function Component(props) {

  // * 순수한 로직만 작성해야 한다.
  // * 이 내부에 사이드 이펙트 로직이 포함되서는 안된다.

  return <></>
}
