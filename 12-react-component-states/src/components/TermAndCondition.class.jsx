// --------------------------------------------------------------------------
// > ✅ TermAndConditions 컴포넌트
// --------------------------------------------------------------------------
// - [x] 사용자가 이용 약관에 동의하면 확인 버튼 활성화
// - [x] 사용자가 이용 약관에 동의하지 않으면 확인 버튼 비활성화
// --------------------------------------------------------------------------
import { Component } from 'react';
import './TermAndConditions.css';

class TermAndConditions extends Component {

  // * 클래스에 로컬state 추가하기 → this를 사용해서 추가
  constructor(props) {
    // * 컴포넌트에 전달된 속성(props)는 읽기 전용
    super(props);

    // * 컴포넌트 데이터 기억(메모리)
    // * 컴포넌트 속성(props)와 달리 상태 값 수정 가능
    this.state = {
      agreement: false,
    };
  }

  render() {
    // * data가 들어옴 (props or state) => JSX (generating markup)
    const { agreement } = this.state; //  { agreement }
    console.log(agreement); // * (1)초기렌더링: false → 사용자가 업데이트 요청: this.setState(nextState) → (2)리액트의 두번째 렌더링(render function실행): true

    // * 컴포넌트 속성 or 상태로부터 파생된 상태 (derived state from state or props)
    const isDisabled = agreement ? false : true;
    return (
      <form className="TermAndConditions" onSubmit={this.handleSubmit}>
        <h2>이용 약관</h2>
        <p>
          OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을
          숙지하는 것이 중요합니다. 본 약관 외에도 OOO은 개인정보처리방침을
          게시합니다.
        </p>
        <div>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={this.handleCheck}
          />{' '}
          <label htmlFor="terms">이용 약관에 동의합니다.</label>
        </div>
        <button type="submit" disabled={ isDisabled }>
          확인
        </button>
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleCheck = (e) => {
    // * 이벤트 핸들러 내부에는 [ 부수 효과 ]를 작성할 수 있다.
    // console.log(e.target.checked);

    // * 명령형 프로그래밍 (리액트 렌더링 프로세스와 관련 없음)
    /*
    const submitButton = document.querySelector('[type="submit"]');
    if (e.target.checked) {
      // * e.target.checked 가 true일 때
      submitButton.removeAttribute('disabled');
    } else {
      // * e.target.checked 가 false일 때
      submitButton.setAttribute('disabled', 'true');
    }
    */

    // * 선언적 프로그래밍
    const { checked, checked: nextAgreement } = e.target;
    console.log(checked);

    // * 사용자에 의한 액션(행동)에 의해 선언된 리액트 컴포넌트의 상태 업데이트
    // * 리액트에게 렌더 트리거(요청)
    // * 클래스 컴포넌트에서의 상태 업데이트를 할 때 → this.setState(ne xtState)
    console.log('previous', this.state);
    this.setState({ agreement: nextAgreement }, () => {
      console.log('updated state and callback'); // * 상태 업데이트의 했음을 보장
      console.log('updated', this.state); // * 업데이트된 이후의 state
    });
  };
}

export default TermAndConditions;
