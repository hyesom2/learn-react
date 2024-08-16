// > hooks
// import { useState } from 'react';
// > components
import Buttons from './atoms/Buttons/Buttons';
import Status from './atoms/Status/Status';
import Checkbox from './atoms/Checkbox/Checkbox';
import Logo from './atoms/Logo/Logo';

function Template() {
  return (
    <div>
      <Logo />
      <Buttons />
      <Status />
      <Checkbox />
    </div>
  )
}
export default Template;