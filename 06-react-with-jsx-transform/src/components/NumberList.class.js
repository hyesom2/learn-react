import React from "https://esm.sh/react";

// > 컴포넌트 추출
class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = Array(this.props.count)
      .fill(null)
      .map((_, index) => {
        // return index;
        return React.createElement("li", {}, `${index + 1}01`);
      });

    return React.createElement(
      "ul",
      { className: "architectures", lang: "en", id: this.props.id },
      children
    );
  }
}

export default NumberList;

// const list1 = h(NumberList, { id: "list-1", count: 3 });
// const list2 = h(NumberList, { id: "list-2", count: 5 });
// const list3 = h(NumberList, { id: "list-3", count: 11 });

// * 컴포넌트란? 재사용 메커니즘(클래스 또는 함수)을 사용해 리액트 엘리먼트를 반환하는 것을 말한다.
// > 1. 리액트 클래스 컴포넌트 (재사용)
// * h("ul", { className: "architectures", lang: "en" }, ...children); 를 클래스 컴포넌트로
// > 리액트 컴포넌트는 반드시 파스칼케이스(PascalCase)
// class ArchitectureList extends React.Component {
//   constructor(props /* 컴포넌트 속성 */) {
//     // > 반드시 [ super ] 실행이 필요하다.
//     super(props);

//     // * 암묵적으로 클래스로 부터 실행된 인스턴스
//     // return this;
//   }

//   // > render 메서드 (인스턴스 공용)
//   render() {
//     // * 컴포넌트 속성(props) 접근
//     // * props는 읽기 전용(read only)
//     // console.log(this.props); // { id, count }

//     // * 컴포넌트의 자식들은 배열이다.
//     // const children = [101, 201, 301];
//     const children = Array(this.props.count)
//       .fill(null)
//       .map((_, index) => {
//         // return index;
//         return React.createElement("li", {}, `${index + 1}01`);
//       });

//     // * 리액트 엘리먼트 반환
//     return React.createElement(
//       "ul",
//       { className: "architectures", lang: "en", id: this.props.id },
//       // h("li", { className: "item" }, 101),
//       // h("li", { className: "item" }, 201),
//       // h("li", { className: "item" }, 301)
//       children
//     );
//   }
// }

// const list1 = React.createElement(ArchitectureList, { id: "list-1", count: 3 });
// const list2 = h(ArchitectureList, { id: "list-2", count: 5 });
// const list3 = h(ArchitectureList, { id: "list-3", count: 11 });
