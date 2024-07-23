// --------------------------------------------------------------------------
// let, const (block scope)
// - var, let 비교
// - var의 사용 자제
// - const를 사용하는 이유 : 개발자가 타입을 처음 선언할 때 누군가에 의해 바뀔 수 있기 때문(자바스크립트는 너무 관대함), 타입을 지정有, REACT에서 多사용
// - const : 상수, 원시형 값이 변경되지 않거나, 또는 객체형 타입 지정이 필요한 경우
// - let : 변수, 시간의 흐름에 따라 값이 변경될 때 사용
// => let과 const는 scope를 생성한다.
// --------------------------------------------------------------------------

// var numbers = [3, 6, 9, 12, 23];
const numbers = [3, 6, 9, 12, 23];

/*
for (var i = 0, l = numbers.length; i < l; i += 1) {
  console.log({ [i]: numbers[i] });
}
console.log(i);
*/
/* 
  why? i가 5가 나올까?
  → for문안에서 전역변수인 var를 사용하면 block scope를 형성하지 않기 때문에 바깥쪽에서 접근이 가능하다.
*/

for (let i = 0, l = numbers.length; i < l; i += 1) {
  console.log({ [i]: numbers[i] });
}
// 🔶 for 블록 내부에서만 i 변수가 사용되도록 설정합니다. => for문 안의 변수를 var → let으로 변경
console.log(i); // i is not defined

// 🔶 numbers 타입이 변경되지 않도록 타입을 고정해보세요.
numbers = {
  recordType: "number",
  records: numbers,
};

console.log(numbers.length);
