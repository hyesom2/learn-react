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

const anotherData = {
  count: 10
}

// function AvatarListPage({ avatarsData }) {
function AvatarListPage(props) {
  /* 
    ※ 컴포넌트 내부 공간에서의 코드 로직은 동일한 입력인 경우 동일 출력이 되어야 한다.  
    - 배열 객체의 pop() 메서드 사용
    - 입력받은 데이터(props, 원본 데이터) : 뮤테이션(mutation, 수정)
    - props를 수정X → 순수X → props는 읽기전용 
  */
  // avatarsData.pop(); // 2개씩 없어진다. why? StrictMode때문

  // 외부의 데이터인 props에 의존한 파생된 데이터
  // const avatarsData = props.avatarsData.toReversed();
  /*
    ※ 역순으로 정렬
    - 2번 실행하여 동일한 결과가 나옴 → 순수함수
    - props의 데이터(props.avatarsData)는 읽기전용인데, 임의로 조작/변경 한 것이 아닌
      그 자체의 데이터 값에서 새로운 데이터를 생성한 다음에 그 데이터를 렌더링
    ∴ props는 읽기 전용 데이터이므로 전달받은 하위 컴포넌트에서 수정하면 안된다.
  */

  /*
    ※ 컴포넌트 지역 내, 수정 (Local Mutation)
    - 외부의 데이터(컴포넌트 외부)가 아닌 함수 내부에서 데이터 수정은 가능
  */
  // 로컬 뮤테이션 허용
  const avatarsData = [...props.avatarsData];
  // avatarsData.pop(); // 1개만 빠짐 → why? 외부에서 넘어온 데이터를 수정한 적이 X, 데이터를 복제한 지역내 변수를 만들고 pop을 했기 때문


  /*
    ※ 리액트 렌더링 프로세스와 관련 없는 코드 (부수효과, Side effects)
    - DOM 요소에 대한 접근/조작 (사이드 이펙트)
    - 타이머API활용
  */
  let renderCount = 0;
  setTimeout(() => {
    console.log(document.getElementById('react-app').dataset.render = ++renderCount);
  }, 1000);

  return (
    <ul className="AvatarList">
      {
        // avatarsData.map(({ id, name, photo, status }) => (
        avatarsData.map((user) => (
          <li key={user.id}>
            <Avatar user={user} /> {anotherData.count++}
          </li>
        ))
      }
    </ul>
  );
}

export default AvatarListPage;
