// > components
import UsersPage from '@/pages/users/UsersPage';

function Playground() {
  return (
    <>
      <UsersPage styles={ styles }/>
    </>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}

export default Playground;