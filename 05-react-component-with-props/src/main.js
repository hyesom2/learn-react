import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
import NumberList from "./components/NumberList.js";

const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

const container = document.getElementById("root-app");

const reactDomRoot = createRoot(container); // * { render, unmount }

function render() {
  const children = listData.items.map(({ id, title /* 구조분해할당 */ }) => {
    // > markup을 생성 (with React API)
    // * 리액트 엘리먼트 (객체) → 컴포넌트로 만들어야 한다.
    const reactElement = h(
      "li",
      {
        key: id,
        className: "item",
      },
      h("img", {
        src: `/architectures/architecture-${id}.jpg` /* Interpolation(보간법) */,
        alt: "",
      }),
      h(
        "span",
        {
          className: "content",
        },
        title
      ),
      h(
        "button",
        {
          type: "button",
          title: "아이템 이동 (위/아래 화살표 키 활용)",
        },
        h("img", {
          src: "/icons/handle.svg",
          alt: "아이템 이동 (위/아래 화살표 키 활용)",
        })
      )
    );

    return reactElement;
  });

  const list = h(
    "ul", // * 컴포넌트 타입
    { className: "architectures", lang: "en" }, // * 컴포넌트 속성(props)
    // children // * 컴포넌트 자식들(칠드런) → [ ]
    ...children // * 컴포넌트 자식들(칠드런) → ...로 전개하여 (리액트 엘리먼트 | 문자 | 숫자 | null)를 포함한 배열 or 리액트 엘리먼트
  );

  // ListContainer 리액트 엘리먼트
  const listContainer = h(
    "div",
    { className: "list-container" },
    list,
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
