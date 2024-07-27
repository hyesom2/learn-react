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
  // > 지역변수
  let iconPath = "";
  let statusMessage = "";

  // > 조건분기 1) if문 / 2) 3항연산자 / 3) 논리연산자 / 4) switch문
  switch (status) {
    default:
    case "offline":
      iconPath = "/svg-icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/svg-icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/svg-icons/status-dont-disturb.svg";
      statusMessage = "방패금지";
      break;
    case "away":
      iconPath = "/svg-icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }

  const label = `${name} (${statusMessage})`;

  return React.createElement(
    "figure",
    {
      className: "avatar",
      "aria-label": label,
      title: label,
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
        src: iconPath,
        alt: "",
      })
    )
  );
}

export default Avatar;
