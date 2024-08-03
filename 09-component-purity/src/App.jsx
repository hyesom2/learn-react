import AvatarListPage from '@/pages/AvatarListPage';
// > data
import avatarsData from './data/avatars';

// 리액트 컴포넌트(함수)는 순수 해야 한다.
/*
  ※ 순수한지 어떻게 확인해야할까?
  - 2번 실행(출력이 같으면 순수) 
  - StrictMode로 개발상에서 발생할 수 있는 일반적인 오류를 찾을 때 사용
  
  ※ StrictMode는 ①실행mount → unmount → ②실행mount
  - 개발 중일 때만 2번 실행해서 일반적인 문제를 진단
  - 배포 되었을 때는 1번만 실행
*/
function App() {
  return (
    <div className="App">
      <AvatarListPage avatarsData={ avatarsData } />
    </div>
  );
}

export default App;
