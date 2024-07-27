import React from "https://esm.sh/react";

// > React Functional Component (함수형 컴포넌트)
// * 컴포넌트는 속성(props)을 전달 받을 수 있다. → 넣어도 그만, 안 넣어도 그만 (항상 들어오긴 한다는 뜻)
function ArchitectureListFunc(props) {
  console.log(props); // * 컴포넌트 속성 확인
  const { lang, children } = props;

  // > 리액트 엘리먼트(React Element)반환
  return React.createElement(
    "ul",
    { className: "architectures", lang },
    children
  );

  //return null; // * 아무것도 받지 않으면 null도 유효함
}

export default ArchitectureListFunc;
