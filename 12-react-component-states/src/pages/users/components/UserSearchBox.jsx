// > react hook
// import { useId, useState } from 'react';
import { useId } from 'react';

// > css
import './UserSearchBox.css';

// > prop-types
import { string, func } from 'prop-types';

UserSearchBox.propTypes = {
  // id: string.isRequired,
  searchTerm: string.isRequired,
  onSearch: func, // optional
};

// function UserSearchBox({ id }) {
function UserSearchBox({ searchTerm, onSearch }) {
  const id = useId();

  // let searchTerm = '';
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (e) => {
  //   // const searchTerm = e.target.value; → 밖으로 빼야 handleChange와 handleSearch 둘 다 사용 가능
  //   // searchTerm = e.target.value;
  //   setSearchTerm(e.target.value);
  //   console.log({ searchTerm });
  // };

  const handleSearch = () => {
    // > Side Effects code → DOM 접근, 속성값 읽기
    const input = document.getElementById(id);
    const value = input.value.trim(); // trim : 양쪽공백제거

    onSearch?.(value);
    // if (value.length > 0) {
    //   onSearch?.(value);
    // } else {
    //   alert('검색어를 입력해주세요.');
    // }
  };

  return (
    <div className="UserSearchBox">
      <div className="control">
        {/* <label htmlFor="user-search">사용자 검색</label>
        <input id="user-search" type="search" placeholder="사용자 이름 입력" /> */}
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 이름 입력"
          // readOnly
          // value={ searchTerm }
          defaultValue={searchTerm} // * 처음에만 리액트의 상태값을 넣고 싶을 때
          // onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSearch}>
        찾기
      </button>
    </div>
  );
}

export default UserSearchBox;


// * 속성에 사용 안되는 것
// * if, while, switch, break, continue, for, class, ...


// * id값을 따로 주는 이유
// * UserSearchBox와 같이 컴포넌트를 설게할 때
// > useId (접근성 어트리뷰트) 

// * input의 type="search" vs type="text" 차이점