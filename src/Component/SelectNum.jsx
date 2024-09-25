import React from 'react';
import AutoSelect from '../assets/Margin.png'
import Arrow from '../assets/arrow.png'


function SelectNum({ selectedNumbers, megaBallNumber, clearSelections, autoSelect }) {
    const fixedCircles = Array(5).fill(null); 
    return (
      <div>
        <div className="flex justify-between items-center px-6 w-[1145px] h-[100px] border border-gray-400 rounded-lg mt-2 ml-[110px]">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-gray-500">Selected numbers:</h2>
            <img src={Arrow} className='ml-[-25px]' />
          </div>
          <div className="flex space-x-6">
            {fixedCircles.map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center background rounded-full w-8 h-8 
                  ${selectedNumbers[index] ? 'background' : 'bg-gray-200 text-gray-400'}
                  text-lg font-semibold`}
              >
                {selectedNumbers[index] ? String(selectedNumbers[index]).padStart(2, '0') : '  '}
                {console.log(selectedNumbers[index])}
              </div>
            ))}
            <div className="flex items-center justify-center rounded-full w-8 h-8 megaButton text-white text-lg font-semibold">
              {megaBallNumber ? String(megaBallNumber).padStart(2, '0') : '  '}
            </div>
          </div>
          <div className="space-x-2 flex">
            <button
              className="w-22 h-8 bg-white border border-gray-400 text-gray-500 font-semibold px-[18px] text-lg rounded-2xl"
              onClick={clearSelections}
            >
              Clear X
            </button>
            <button
              className="w-22 h-8 bg-white border border-gray-400 text-gray-500 font-semibold px-[18px] text-lg rounded-2xl flex"
              onClick={autoSelect}
            >
              Auto select<img src={AutoSelect} className='mt-2 ' />
            </button>
          </div>
        </div>
      </div>
    );
  }

export default SelectNum;
