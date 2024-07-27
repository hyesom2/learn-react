// TODO : 컴포넌트 정의(with 속성) & 추출
// TODO : <ul> 리액트 컴포넌트를 작성하는 클래그 컴포넌트를 작성
import React from "https://esm.sh/react";

class ArchitectureList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { lang, children } = this.props; // * props 객체 { lang, children }

    return React.createElement(
      "ul",
      { className: "architectures", lang },
      children
    );
  }
}

export default ArchitectureList;

// const list = h(
//   "ul", // * 컴포넌트 타입
//   { className: "architectures", lang: "en" }, // * 컴포넌트 속성(props)
//   // children // * 컴포넌트 자식들(칠드런) → [ ]
//   ...children // * 컴포넌트 자식들(칠드런) → ...로 전개하여 (리액트 엘리먼트 | 문자 | 숫자 | null)를 포함한 배열 or 리액트 엘리먼트
// );
