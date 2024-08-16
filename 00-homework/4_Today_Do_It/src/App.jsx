// > hooks
import { useState } from 'react';
// > css
import styles from './App.module.css';
// > components
import Logo from '@/components/atoms/Logo/Logo';

function App() {
  const [mode] = useState(false);

  return (
    <div className={`${styles.container}`}>
      <Logo mode={mode} />
    </div>
  );
}

export default App;