import React from 'react';

function MegaBall({ megaBallNumber, setMegaBallNumber }) {
    const numbers = Array.from({ length: 26 }, (_, i) => i + 1);

    const handleMegaBallClick = (number) => {
       
        if (megaBallNumber === number) {
            setMegaBallNumber(null);
        } else if (megaBallNumber === null) {
            setMegaBallNumber(number);
        } else {
            alert('You can only select 1 Mega Ball number.');
        }
    };

    return (
        <div>
            <h2 className='font-bold underline decoration-2 text-2xl pt-4 pb-2'>Mega Ball</h2>
            <div className="grid grid-cols-5 gap-x-6 gap-y-6 p-4 w-[371px] h-[400px] cursor-pointer border border-gray-400 rounded-lg">
                {numbers.map((number) => (
                    <div
                        key={number}
                        onClick={() => handleMegaBallClick(number)}
                        className={`flex items-center justify-center
                         ${megaBallNumber === number ? 'megaButton' : 'bg-white text-gray-500'}
                         border border-gray-400 rounded-full p-1 w-8 h-8 text-lg font-semibold cursor-pointer`}
                    >
                        {String(number).padStart(2, '0')}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MegaBall;