import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
import Home from "/src/pages/Home.js";

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

if (container) {
  // > DOM 요소를 리액트 돔 루트로 만들기
  const reactDomRoot = createRoot(container);

  // > JSX(웹 표준 아님, 브라우저에서 해석 불가)
  reactDomRoot.render(<Home />);
} else {
  // > 존재하지 않는다면? 개발자에게 경고 출력
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
