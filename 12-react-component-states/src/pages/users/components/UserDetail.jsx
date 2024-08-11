// > prop-types
import { UserType } from '@/pages/users/@types/type.d';

UserDetail.propTypes = {
  user: UserType,
};

function UserDetail({ user }) {
  return (
    <li className="userDetail">
      <strong>{user.name}</strong>{' '}
      <span>
        { <a href={`mailto: ${user.email}`} style={{ color: '#fff', textDecoration: 'none'}}>({user.email})</a> }
      </span>
      <span>({user.city})</span>
    </li>
  );
}

export default UserDetail;
