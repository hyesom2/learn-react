import s from './Checkbox.module.css';

function Checkbox() {
  return (
    <div className={s.checkbox}>
      <div>
        <label htmlFor="text">
          <input type="checkbox" id="text" />
        </label>
      </div>
    </div>
  )
}

export default Checkbox;