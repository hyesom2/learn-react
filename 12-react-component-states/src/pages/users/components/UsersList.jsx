// > components
import UserDetail from './UserDetail';

// > prop-types
import { UsersListType } from '@/pages/users/@types/type.d';

UsersList.propTypes = {
  users: UsersListType.isRequired,
};

function UsersList({ users }) {
  return (
    <ul className="usersList">
      {users.map((user) => (
        // <li key={user.id}>
        //   {user.name} {<a href={`mailto: ${user.email}`}>({user.email})</a>}
        // </li>
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
