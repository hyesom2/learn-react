// > css
import s from './Buttons.module.css';

function Buttons() {
  return (
    <div>
      <button type="button" className={`${s.button} ${s.primary}`}>레이블</button>
      <button type="button" className={`${s.button} ${s.secondary}`}>레이블</button>
      <button type="button" className={`${s.button} ${s.disabled}`}>레이블</button>
    </div>
  )
}

export default Buttons;