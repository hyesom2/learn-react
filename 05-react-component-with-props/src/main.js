import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 데이터 가져오기
import listData from "./data/list.js";

// > 컴포넌트 불러오기
import NumberList from "./components/NumberList.js";
import ArchitectureList from "./components/architectures/ArchitectureList.class.js";
import ArchitectureItem from "./components/architectures/ArchitectureItem.class.js";

const container = document.getElementById("root-app");

const reactDomRoot = createRoot(container); // * { render, unmount }

function render() {
  const children = listData.items.map(({ id, title /* 구조분해할당 */ }) => {
    const reactElement = h(ArchitectureItem, { id, title });

    return reactElement;
  });

  // ListContainer 리액트 엘리먼트
  const listContainer = h(
    "div",
    { className: "list-container" },
    h(ArchitectureList, { lang: "en", children }),
    // list1,
    // list2,
    // list3
    h(NumberList, { count: 3 }),
    h(NumberList, { count: 5 }),
    h(NumberList, { count: 7 })
  );

  reactDomRoot.render(listContainer);
}

function unmount() {
  reactDomRoot.unmount();
}

render();
