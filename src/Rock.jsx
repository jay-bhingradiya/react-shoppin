import React, {useState} from 'react';

const Rock = () => {
  const [counter, setCounter] = useState (0);
  const btnhandler = () => {
    console.log ('Done My friend... ' + counter);

    setCounter (counter + 1 );
  };
  return (
    <div>


      <button className="btn" onClick={btnhandler}>Hey Yooo !!! </button>
    </div>
  );
};

export default Rock;
