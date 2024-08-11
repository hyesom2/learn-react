import { useState } from 'react';
import { getNoteList } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';

// > prop-types
import { func } from "prop-types";
import { ROUTES } from '@/constants/routes';
NoteListPage.propTypes = {
  onChangeRoute: func.isRequired
}

function NoteListPage({ onChangeRoute }) {
  // * 화면에 표시할 노트의 목록 상태
  const [list] = useState(() => getNoteList());

  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create)
  }

  return (
    <div className="NoteListPage">
      <NoteList list={list} />
      <a className="createNoteLink" href="#create-note" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
