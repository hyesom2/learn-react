import AvatarListPage from '@/pages/AvatarListPage';
// > data
import avatarsData from './data/avatars';

function App() {
  return (
    <div className="App">
      <AvatarListPage avatarsData={ avatarsData } />
    </div>
  );
}

export default App;
