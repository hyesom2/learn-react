import React from "https://esm.sh/react";
/*
  markup
  <figure class='avatar' aria-label="이름 (상태)">
    <img src="face.jpg" alt="이름" />
    <figcaption>
      <img></img>
    </figcaption>
  </figure>
*/

/* 
  props: {
    name: '사용자 이름',
    photoURL: '이미지경로',
    status?: 'online' | 'offline' | 'dont-disturb' | 'away',
    (? optional (필수))
    (status = 'offline' default값)
    size?: 숫자값
  }
*/
function Avatar({ name, photoURL, status = "offline", size = 64 }) {
  return React.createElement(
    "figure",
    {
      className: "avatar",
      "aria-label": `${name}(${status})`,
    },
    React.createElement("img", {
      src: `/faces/${photoURL}`,
      alt: name,
      width: size,
      height: size,
    }),
    React.createElement(
      "figcaption",
      {}, // * 넣을 props가 없을 경우 { }비워주거나 null로 표기
      React.createElement("img", {
        src: "/svg-icons/status-offline.svg",
        alt: "",
      })
    )
  );
}

export default Avatar;
