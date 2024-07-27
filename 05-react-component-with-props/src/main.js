import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

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

// * 컴포넌트란? 재사용 메커니즘(클래스 또는 함수)을 사용해 리액트 엘리먼트를 반환하는 것을 말한다.

// > 1. 리액트 클래스 컴포넌트 (재사용)
// * h("ul", { className: "architectures", lang: "en" }, ...children); 를 클래스 컴포넌트로
// > 리액트 컴포넌트는 반드시 파스칼케이스(PascalCase)
class ArchitectureList extends React.Component {
  constructor(props /* 컴포넌트 속성 */) {
    // > 반드시 [ super ] 실행이 필요하다.
    super(props);

    // * 암묵적으로 클래스로 부터 실행된 인스턴스
    // return this;
  }

  // > render 메서드 (인스턴스 공용)
  render() {
    // * 컴포넌트 속성(props) 접근
    // * props는 읽기 전용(read only)
    // console.log(this.props); // { id, count }

    // * 컴포넌트의 자식들은 배열이다.
    // const children = [101, 201, 301];
    const children = Array(this.props.count)
      .fill(null)
      .map((_, index) => {
        // return index;
        return React.createElement("li", {}, `${index + 1}01`);
      });

    // * 리액트 엘리먼트 반환
    return React.createElement(
      "ul",
      { className: "architectures", lang: "en", id: this.props.id },
      // h("li", { className: "item" }, 101),
      // h("li", { className: "item" }, 201),
      // h("li", { className: "item" }, 301)
      children
    );
  }
}
// > 리액트 월드에서 컴포넌트를 사용해 인스턴스(리액트 엘리먼트)를 생성하려면?
// > React.createElement(컴포넌트_참조)
const list1 = React.createElement(ArchitectureList, { id: "list-1", count: 3 });
const list2 = h(ArchitectureList, { id: "list-2", count: 5 });
const list3 = h(ArchitectureList, { id: "list-3", count: 11 });

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
    list1,
    list2,
    list3
  );

  reactDomRoot.render(listContainer);
}

function unmount() {
  reactDomRoot.unmount();
}

render();
