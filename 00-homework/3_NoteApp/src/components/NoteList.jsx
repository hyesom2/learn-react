// > routes
import { ROUTES } from '@/constants/routes';
// > utils
import { convertSlug } from '@/utils/convertSlug';
// > css
import './NoteList.css';
// > prop-types
import { NoteListType } from '../types/note';
import { func } from 'prop-types';
NoteList.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func
};

function NoteList({ list, onChangeRoute }) {
  const handleClick = (pickNoteId) => (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.detail, pickNoteId);
  }
  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map((item) => {
          // const slug = `#${item.title.replace(/\s+/g, "-")}`;
          const slug = `#${convertSlug(item.title)}`;

          return (
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id)}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;
