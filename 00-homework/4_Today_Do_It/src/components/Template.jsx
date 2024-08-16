// > hooks
// import { useState } from 'react';
// > components
import Buttons from './atoms/Buttons/Buttons';
import Status from './atoms/Status/Status';
import Checkbox from './atoms/Checkbox/Checkbox';

function Template() {
  return (
    <div>
      <Buttons />
      <Status />
      <Checkbox />
    </div>
  )
}
export default Template;