import NoteList from '../components/NoteList';
import './NoteListPage.css';

// > prop-types
import { func } from "prop-types";
import { ROUTES } from '@/constants/routes';
import { NoteListType } from '@/types/note';
NoteListPage.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func.isRequired,
}

function NoteListPage({ list, onChangeRoute }) {
  // * 화면에 표시할 노트의 목록 상태 (App.jsx로 끌어올림)
  // const [list] = useState(() => getNoteList());

  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create)
  }

  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute} />
      <a className="createNoteLink" href="#create-note" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
