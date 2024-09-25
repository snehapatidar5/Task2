import React from 'react';

function MainBall({ selectedNumbers, setSelectedNumbers }) {
  const numbers = Array.from({ length: 69 }, (_, i) => i + 1);

  // const handleNumberClick = (number) => {
  //   if (selectedNumbers.includes(number)) {
  //     setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
  //   } else if (selectedNumbers.length < 5) {
  //     setSelectedNumbers([...selectedNumbers, number]);
  //   } else {
  //     alert('You can only select up to 5 numbers.');
  //   }
  // };

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length >= 5) {
      const newNumbers = [...selectedNumbers.slice(1), number];
      setSelectedNumbers(newNumbers);
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  return (
    <div>
      <h2 className="font-bold underline decoration-2 pt-4 pb-2 text-2xl">Main Ball</h2>
      <div className="cursor-pointer grid grid-cols-12 gap-x-6 gap-y-6 p-4 max-h-xl w-[750px] h-[400px] border border-gray-400 rounded-lg">
        {numbers.map((number) => (
          <div
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`flex items-center justify-center ${
              selectedNumbers.includes(number) ? 'background' : 'bg-white'
            } border border-gray-400 text-gray-500 rounded-full h-8 w-8 text-lg font-semibold cursor-pointer`}
          >
            {String(number).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBall;
