import { ROUTES } from '@/constants/routes';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
// > utils
import { convertSlug } from '@/utils/convertSlug';
// > css
import './NoteDetailPage.css';

// > prop-types
import { number, func } from 'prop-types';
NoteDetailPage.propTypes = {
  noteId: number.isRequired,
  onChangeRoute: func,
};

function NoteDetailPage({ noteId, onChangeRoute }) {
  const note = getNoteItem(noteId);

  const handleGoApp = () => onChangeRoute?.(ROUTES.list);
  const handleGoEdit = (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.edit, noteId);
  }

  const createMarkup = () => ({ __html: note.content });

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleGoApp} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>{note.expand.user.name}</span>
          {/* <a href="#edit" onClick={handleGOEdit}> */}
          {/* <a href={`#/edit/${note.title.replace(/\s+/g, '-')}`} onClick={handleGoEdit}> */}
          <span>
            <a href={`#/edit/${convertSlug(note.title)}`} onClick={handleGoEdit}>
              수정
            </a>
          </span>
          {/* <div dangerouslySetInnerHTML={{ __html: note.content }} /> */}
          <div dangerouslySetInnerHTML={createMarkup()} />
          {/* div를 사용한 이유 : p(단락)안에 p이 들어올 수 없기 때문 */}
          {/* <div>{note.content}</div> → 리액트 JSX Element가 아닌 그냥 문자열 → XSS공격받을 수 있음 */}
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;
