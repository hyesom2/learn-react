// > routes
import { ROUTES } from '@/constants/routes';
// > components
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
// > css
import './NoteCreatePage.css';

// > prop-types
import { func } from 'prop-types';
NoteCreatePage.propTypes = {
  onChangeRoute: func.isRequired,
};

function NoteCreatePage({ onChangeRoute }) {
  const handleGoApp = () => onChangeRoute(ROUTES.list);
  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleGoApp} />
      <NoteForm mode="create" />
    </div>
  );
}

export default NoteCreatePage;
