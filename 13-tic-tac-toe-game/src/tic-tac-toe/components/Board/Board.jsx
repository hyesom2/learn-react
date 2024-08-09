import Status from '../Status/Status';
import Squares from '../Squares/Squares';

function Board() {
  return (
    <div className="Board">
      <Status />
      <Squares />
    </div>
  )
}

export default Board;