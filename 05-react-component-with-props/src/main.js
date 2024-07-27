import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
import { ArchitectureListFuncPage } from "./pages/ArchitectureListPage.js";

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

// > DOM 요소가 존재한다면? (문서의 요소가 존재할 때)
if (container) {
  // > DOM 요소를 리액트 돔 루트로 만들기
  const reactDomRoot = createRoot(container);

  // > 리액트 앱 렌더링
  reactDomRoot.render(React.createElement(ArchitectureListFuncPage));
} else {
  // > 존재하지 않는다면? 개발자에게 경고 출력
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
