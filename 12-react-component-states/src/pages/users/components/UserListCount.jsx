// > prop-types
import { number } from 'prop-types';

UserListCount.propTypes = {
  currentSearchedCount: number.isRequired,
  totalUsersCount: number.isRequired,
};

function UserListCount({ currentSearchedCount, totalUsersCount }) {
  return (
    <span data-testid="user-list-count">
      {currentSearchedCount} / {totalUsersCount}
    </span>
  );
}

export default UserListCount;
