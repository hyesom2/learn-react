// > routes
import { ROUTES } from '@/constants/routes';
// > components
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
// > css
import './NoteCreatePage.css';

// > prop-types
import { func, number } from 'prop-types';
NoteCreatePage.propTypes = {
  onChangeRoute: func.isRequired,
  onCreate: func.isRequired,
  nextNoteId: number.isRequired
};

function NoteCreatePage({ onChangeRoute, onCreate, nextNoteId }) {
  const handleGoApp = () => onChangeRoute(ROUTES.list);
  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleGoApp} />
      <NoteForm
        mode="create"
        onCreate={onCreate}
        handleGoApp={handleGoApp}
        nextNoteId={nextNoteId}
      />
    </div>
  );
}

export default NoteCreatePage;
