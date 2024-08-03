// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// [x] 데이터 분리
// [x] 리스트 렌더링
// [x] 컴포넌트 속성 검사
// [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
// > components
import Avatar from '@/components/Avatar';

// > prop-types
import { arrayOf } from 'prop-types';
import { UserType } from '@/@types/globals.d';

AvatarListPage.propTypes = {
  avatarsData: arrayOf(UserType).isRequired,
};

function AvatarListPage({ avatarsData }) {
  return (
    <ul className="AvatarList">
      {
        // avatarsData.map(({ id, name, photo, status }) => (
        avatarsData.map((user) => (
          <li key={user.id}>
            <Avatar user={user} />
          </li>
        ))
      }
    </ul>
  );
}

export default AvatarListPage;
