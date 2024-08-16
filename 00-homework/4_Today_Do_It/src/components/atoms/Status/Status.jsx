// > css
import s from './Status.module.css';

function Status() {
  return (
    <ul className={s.statusList}>
      <li className={s.is_active}>모두 <span>0</span></li>
      <li>할일 <span>0</span></li>
      <li>한일 <span>0</span></li>
      <li>보관 <span>0</span></li>
    </ul>
  )
}

export default Status;