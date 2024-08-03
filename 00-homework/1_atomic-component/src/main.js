import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
import CardList from "/src/components/CardList.js";

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

if (container) {
  createRoot(container).render(React.createElement(CardList));
} else {
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
