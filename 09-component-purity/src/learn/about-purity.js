// --------------------------------------------------------------------------
// ✅ 순수 함수란?
// --------------------------------------------------------------------------
// - [x] 함수의 순수성(purity)이란?
// - [x] 함수가 순수한 지 여부는 어떻게 확인해야 할까?
// --------------------------------------------------------------------------

/**@types{(text: string, limit?:number) => string}*/
export function truncateText(text, limit = 100) {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }

  return text;
}

// * 이 함수는 동일한 입력을 받았을 때, 동일한 결과를 반환한다. (순수함이 보장된다.)
// * 순수 함수의 요건 : 동일 입력 → 동일 출력
// * 순수함이란? 계산된 결과가 동일함을 말한다.
const testText = 'hyeonju'.repeat(20);
console.log(testText.length);
console.log(truncateText(testText));
