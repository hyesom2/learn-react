// import { useState } from 'react';
import { PLAYER } from './constants'; // 2.
// > components
import Board from './components/Board/Board';
import History from './components/History/History';

// --------------------------------------------------
// > 틱택토 게임 만들기
// --------------------------------------------------
// * 1. [x] Game 컴포넌트 내부에서 게임 플레이어 말을 게임의 상수로 설정한다.
// * 2. [x] 게임의 상수인 플레이어를 Game 컴포넌트에서 모듈로 불러온다.
// * 3. [x] 구현할 게임의 마크업을 분석해서 하위 컴포넌트 트리를 구성합니다.
// - Game
//  - Board
//  - Status
//  - Squares
//   - Square
// - History 
// --------------------------------------------------

function Game() {
  return (
    <div className="Game">
      <Board />
      <History />
    </div>
  );
}

export default Game;
