// --------------------------------------------------------------------------
// ✅ UsersPage 컴포넌트
// --------------------------------------------------------------------------
// - [x] data/users.json 파일에서 사용자 목록 데이터 불러오기 - ①
// - [x] 사용자 검색 필드 및 목록, 검색 정보를 화면에 렌더링 - ②
// - [x] 사용자 목록 정보 데이터를 순환해 화면에 리스트 렌더링 - ③
// - [x] 사용자 정보 검색 시, 검색된 데이터만 사용자 목록 업데이트
// - [x] 사용자 정보 검색 시, 검색 정보 업데이트
// --------------------------------------------------------------------------
// > react hook
import { useState } from 'react';

// > components
import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import UsersList from './components/UsersList';

// > data
import usersData from './data/users'; // ①

function UsersPage() {
  // * 리액트 컴포넌트 상태 관리
  const [users] = useState(usersData); // ①

  // 로컬 or 세션 스토리지 기술(데이터 읽기할 때 async, await사용)

  // * 수정할 수 있는 포함 가능한 로직
  // * 상태를 쓰기(C)/읽기(R)/수정(U)/삭제(D) → 오직 이 컴포넌트 내부에서만 가능 (리액트에 변경 요청)

  // > UserSearchBox의 값 리프팅
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (userInput) => {
    console.log('clicked button');
    setSearchTerm(userInput);
  };

  // * 사용자가 입력한 검색어로부터 필터링 된 사용자 목록을 [ UsersList ] 컴포넌트에 전달
  // > 파생된 상태인 searchedUsersList
  const searchedUsersList = users.filter(
    (user) => user.name.includes(searchTerm) || user.email.includes(searchTerm) || user.city.includes(searchTerm)
  );

  const currentSearchedCount = searchedUsersList.length;
  const totalUsersCount = users.length;

  return (
    // ②
    <div className="UsersPage">
      {/* <UserSearchBox id="box1" />
      <UserSearchBox id="box2" /> */}
      <UserSearchBox searchTerm={searchTerm} onSearch={handleSearch} />{' '}
      {/* useId로  id값을 안넘겨줘도 id로 구분 가능 */}
      {/* <UsersList users={users} />{' '} */}
      <UsersList users={searchedUsersList} /> {/* ③ */}
      <UserListCount
        currentSearchedCount={currentSearchedCount}
        totalUsersCount={totalUsersCount}
      />
    </div>
  );
}

export default UsersPage;