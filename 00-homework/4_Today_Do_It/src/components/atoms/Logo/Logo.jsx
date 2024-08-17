// > css
import styles from './Logo.module.css';
// > prop-types
import { bool } from 'prop-types';
Logo.propTypes = {
  mode: bool
}

function Logo({ mode }) {
  return (
    <div>
      {
        mode === true
        ?
        <div className={`${styles.Logo} ${styles.Logo_Dark}`}>
          <h1>
            <a href="/">
              <img src={`/images/Logo_Dark.svg`} alt="stereo_logo" />
            </a>
          </h1>
        </div>
        :
        <div className={`${styles.Logo} ${styles.Logo_Light}`}>
          <h1>
            <a href="/">
              <img src={`/images/Logo_Light.svg`} alt="stereo_logo" />
            </a>
          </h1>
        </div>
      }
    </div>
  )
}

export default Logo;