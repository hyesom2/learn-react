import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
import { ArchitectureListFuncPage } from "./pages/ArchitectureListPage.js";
import AvatarListPage from "./pages/AvatarPage.js";

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

// > DOM 요소가 존재한다면? (문서의 요소가 존재할 때)
if (container) {
  // > DOM 요소를 리액트 돔 루트로 만들기
  const reactDomRoot = createRoot(container);

  // > 리액트 앱 렌더링
  // reactDomRoot.render(React.createElement(ArchitectureListFuncPage));
  reactDomRoot.render(React.createElement(AvatarListPage));
} else {
  // > 존재하지 않는다면? 개발자에게 경고 출력
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}

// TODO : Avatar 컴포넌트 및 페이지 컴포넌트 작성 후 화면에 표시(렌더링)
// TODO : 1. 페이지 컴포넌트 작성 및 main.js에 연결
// TODO : 2. Avatar 컴포넌트 작성 및 status 속성(props)설정
// TODO : 3. Status 속성(props)에 따라 화면에 표시되는 Avatar 구성
