// > css
import S from './App.module.css';
// > routes
import routes from '@/routes'; // * 루트 안내 데이터
// > components
import { GlobalNav } from '@/components'; // * 리액트 엘리먼트
import RouterProvider from '@/@euid-router/RouterProvider';

function App() {
  return (
    <div className={S.component}>
      {/* 루트(경로, 길) 안내자 → 루트(경로)를 분석해 페이지 컴포넌트 설정 */}
      <RouterProvider navigation={<GlobalNav />} routes={routes} />
    </div>
  );
}

export default App;
