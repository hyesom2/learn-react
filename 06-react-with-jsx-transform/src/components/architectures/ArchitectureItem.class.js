// TODO : 컴포넌트 정의(with 속성) & 추출
// TODO : <li> 리액트 엘리먼트를 생성하는 클래스 컴포넌트를 작성
import React from "https://esm.sh/react";

class ArchitectureItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    // 컴포넌트 속성(props) 설게(design)
    // this.props 구조 = { id, title }
    const { id, title } = this.props;

    return React.createElement(
      "li",
      { key: id, className: "item" },
      React.createElement("img", {
        src: `/architectures/architecture-${id}.jpg`,
        alt: "",
      }),
      React.createElement(
        "span",
        {
          className: "content",
        },
        title
      ),
      React.createElement(
        "button",
        {
          type: "button",
          title: "아이템 이동 (위/아래 화살표 키 활용)",
        },
        React.createElement("img", {
          src: "/icons/handle.svg",
          alt: "아이템 이동 (위/아래 화살표 키 활용)",
        })
      )
    );
  }
}

export default ArchitectureItem;

// > markup을 생성 (with React API)
// * 리액트 엘리먼트 (객체) → 컴포넌트로 만들어야 한다.
// import React, { createElement as h } from "https://esm.sh/react";
// const reactElement = h(
//   "li",
//   {
//     key: id,
//     className: "item",
//   },
//   h("img", {
//     src: `/architectures/architecture-${id}.jpg` /* Interpolation(보간법) */,
//     alt: "",
//   }),
//   h(
//     "span",
//     {
//       className: "content",
//     },
//     title
//   ),
//   h(
//     "button",
//     {
//       type: "button",
//       title: "아이템 이동 (위/아래 화살표 키 활용)",
//     },
//     h("img", {
//       src: "/icons/handle.svg",
//       alt: "아이템 이동 (위/아래 화살표 키 활용)",
//     })
//   )
// );
