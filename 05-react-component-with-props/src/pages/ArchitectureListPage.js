import React from "https://esm.sh/react";

// > 데이터 가져오기
import listData from "../data/list.js";

// > 컴포넌트 가져오기
import ArchitectureList from "../components/architectures/ArchitectureList.class.js";
import ArchitectureListFunc from "../components/architectures/ArchitectureList.function.js";
import ArchitectureItem from "../components/architectures/ArchitectureItem.class.js";
import ArchitectureItemFunc from "../components/architectures/ArchitectureItem.function.js";

// > 클래스 컴포넌트
export class ArchitectureListClassPage extends React.Component {
  // > ArchitectureList 컴포넌트 → 리액트 엘리먼트 생성
  // > ArchitectureList 컴포넌트에 속성(props) 전달
  render() {
    return React.createElement(ArchitectureList, {
      lang: "en",
      children: listData.items.map(({ id, title }) =>
        React.createElement(ArchitectureItem, { id, title })
      ),
    });
  }
}

// > 함수 컴포넌트
export function ArchitectureListFuncPage() {
  // > ArchitectureListFunc 컴포넌트 → 리액트 엘리먼트 생성
  // > ArchitectureListFunc 컴포넌트에 속성(props) 전달
  return React.createElement(ArchitectureListFunc, {
    lang: "en",
    children: listData.items.map(({ id, title }) =>
      React.createElement(ArchitectureItemFunc, { id, title })
    ),
  });
}
