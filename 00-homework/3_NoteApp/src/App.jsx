// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [x] 노트 앱, 세부 구성 해설
// - [ ] 노트 생성 (Create)
// - [ ] 노트 리스트 또는 아이템 읽기 (Read)
// - [ ] 노트 수정 (Update)
// - [ ] 노트 삭제 (Delete)
// --------------------------------------------------------------------------

import { useState } from "react";
import { ROUTES } from "./constants/routes";
import NoteListPage from "./pages/NoteListPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteEditPage from "./pages/NoteEditPage";

function NoteApp() {
  // > 상태 선언
  // * 루트(경로) 정보 상태 관리(데이터 타입 : 객체)
  const [routeInfo, setRouteInfo] = useState({
    route: ROUTES.list, // * 화면에 표시할 페이지 루트(경로) 식별자
    noteId: null, // * default값: null, 선택된 노트의 ID (노트 자세히 보기 페이지, 노트 수정 페이지)
  });

  // > 상태 업데이트 기능
  const handleChangeRoute = (nextRoute) => {
    // * useState hook에서 반환된 상태 업데이트 함수는 상태를 교체한다(합성X)
    // * 객체 또는 배열 타입의 데이터를 상태로 관리할 경우 개발자가 직접 객체를 합성해야한다.
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
    });
  };

  // * 페이지 경로에 따라 페이지 마크업(JSX) 반환
  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;
