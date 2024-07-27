import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 데이터 가져오기
import listData from "./data/list.js";

// > 컴포넌트 불러오기
import NumberList from "./components/NumberList.class.js";
import ArchitectureList from "./components/architectures/ArchitectureList.class.js";
import ArchitectureItem from "./components/architectures/ArchitectureItem.class.js";

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

// > DOM 요소가 존재한다면? (문서의 요소가 존재할 때)
if (container) {
  // > DOM 요소를 리액트 돔 루트로 만들기
  const reactDomRoot = createRoot(container);

  // > ArchitectureList 컴포넌트 → 리액트 엘리먼트 생성
  // > ArchitectureList 컴포넌트에 속성(props) 전달
  const architectureList = React.createElement(ArchitectureList, {
    lang: "en",
    children: listData.items.map(({ id, title }) =>
      React.createElement(ArchitectureItem, { id, title })
    ),
  });

  // > 리액트 앱 렌더링
  reactDomRoot.render(architectureList);
} else {
  // > 존재하지 않는다면? 개발자에게 경고 출력
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
