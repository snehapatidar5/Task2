import './App.css'
import MainBall from './Component/MainBall.jsx'
import MegaBall from './Component/MegaBall.jsx'
import SelectNum from './Component/SelectNum.jsx'
import Cart from './Component/Cart.jsx'
import React, { useState } from 'react';


function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [megaBallNumber, setMegaBallNumber] = useState(null);

  const clearSelections = () => {
    setSelectedNumbers([]);
    setMegaBallNumber(null);
  };

  const autoSelect = () => {
    const mainBallNumbers = [];
    while (mainBallNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 69) + 1;
      if (!mainBallNumbers.includes(randomNum)) {
        mainBallNumbers.push(randomNum);
      }
    }
    setSelectedNumbers(mainBallNumbers);

    const randomMegaBall = Math.floor(Math.random() * 26) + 1;
    setMegaBallNumber(randomMegaBall);
  };



  return (
    <>
      <div className=' '>
      <div className='flex justify-center gap-6'>
        <MainBall selectedNumbers={selectedNumbers} setSelectedNumbers={setSelectedNumbers} />
        <MegaBall megaBallNumber={megaBallNumber} setMegaBallNumber={setMegaBallNumber} />
      </div>
      <div className='flex flex-col justify-center items-center'>
      <SelectNum
        selectedNumbers={selectedNumbers}
        megaBallNumber={megaBallNumber}
        clearSelections={clearSelections}
        autoSelect={autoSelect}
      />
      <Cart />
      </div>
      </div>
    </>
  );
}

export default App
