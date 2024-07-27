import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// > 컴포넌트 불러오기
// > 오류때문에 이번 폴더에서만 코드 가져옴
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

  return (
    <figure className="avatar" aria-label={label} title={label}>
      <img src={`/faces/${photoURL}`} alt={label} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  );
}

function AvatarListPage() {
  return (
    <ul className="avatar-list">
      <li>
        <Avatar name="야무" photoURL="man-01.jpg" status="online" />
      </li>
      <li>
        <Avatar name="범쌤" photoURL="man-02.jpg" status="" />
      </li>
      <li>
        <Avatar name="김씨" photoURL="woman-01.jpg" status="dont-disturb" />
      </li>
      <li>
        <Avatar name="박씨" photoURL="woman-02.jpg" status="away" />
      </li>
    </ul>
  );
}

// > 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById("root-app");

// > DOM 요소가 존재한다면? (문서의 요소가 존재할 때)
if (container) {
  // > DOM 요소를 리액트 돔 루트로 만들기
  const reactDomRoot = createRoot(container);

  // > React API
  // reactDomRoot.render(React.createElement(AvatarListPage));

  // > JSX(웹 표준 아님, 브라우저에서 해석 불가)
  reactDomRoot.render(<AvatarListPage />);
} else {
  // > 존재하지 않는다면? 개발자에게 경고 출력
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
