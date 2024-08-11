// > hooks
import { useId, useState } from 'react';
// > css
import './NoteForm.css';
import { getUserList, getUser } from '../api/getUser';
import { convertHTMLToText } from '@/utils/convertTextToHTMLString';

const userList = getUserList(); // > 데이터를 1회 가져오도록 설정

// > prop-types
import { oneOf, func, number } from "prop-types";
import { NoteType } from '../types/note';
NoteForm.propTypes = {
  mode: oneOf(["create", "edit"]),
  note: NoteType,
  onCreate: func,
  handleGoApp: func,
  nextNoteId: number
};

function NoteForm({
  mode = "create",
  note,
  onCreate,
  handleGoApp,
  nextNoteId,
}) {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  // > 상태 선언 (form의 상태(제목, 내용, 작성자) → 묶어서(객체로 관리) or 따로 개별로(각 데이터 타입으로 관리))
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: 0,
  });
  // console.log(formData);

  /*
  > 폼의 데이터 관리 방식 선택
  * [x] 리액트로 관리할 것인가? (객체 타입으로 관리: 성능 이슈 주의!)
  * [ ] 네이티브(웹)로 관리할 것인가? (성능 이슈 X)
  */
  // > 상태 업데이트 기능 (제목, 내용, 유저정보를 하나의 핸들러를 사용해 업데이트 수행)
  const handleUpdateFormData = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });

    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);
  };

  // > 노트 생성 기능
  const handleSubmit = (e) => {
    e.preventDefault();

    // > 유효성 검사(클라이언트 측)
    const { title, content, userId } = formData;
    if (title.trim().length === 0) {
      console.error("title 정보가 비었습니다.");
    }

    // > 상태 업데이트 요청 : 추가할 사용자 정보
    const newUserId = Number(userId);
    const newNote = {
      id: nextNoteId,
      title: title.trim(),
      content: convertHTMLToText(content),
      userId: newUserId,
      expand: {
        user: getUser(newUserId),
      },
    };
    // console.log(newNote);

    onCreate?.(newNote); // * 리액트의 상태 업데이트 요청
    handleGoApp?.(); // * 상태 업데이트 후 리스트 페이지로 이동
  };

  // > 노트 초기화 기능
  const handleReset = (e) => {
    e.preventDefault();
  };

  // > 노트 삭제 기능
  const handleDelete = () => {
    console.log("delete");
  };

  // > [파생된 상태] : "생성" or "수정" 모드 여부 확인
  const isCreateMode = mode.includes("create");
  // > "생성" or "수정" 모드에 따라 화면에 표시될 버튼 레이블 설정
  const submitButtonLabel = isCreateMode ? "추가" : "수정";

  // >
  // if (note) {
  //   note.content;
  // }

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        {/* <input type="text" id={titleId} defaultValue={note?.title} /> */}
        <input
          type="text"
          id={titleId}
          value={formData.title}
          onChange={handleUpdateFormData}
          name="title"
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          /* defaultValue={note && convertHTMLToText(note.content)} */
          value={formData.content}
          onChange={handleUpdateFormData}
          name="content"
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select
            id={userId}
            value={formData.userId}
            onChange={handleUpdateFormData}
            name="userId"
          >
            <option>작성자 선택</option>
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttonGroup">
        <button type="submit">{submitButtonLabel}</button>

        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
