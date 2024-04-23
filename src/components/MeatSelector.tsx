import React, { useEffect } from 'react';

import cow from '../assets/images/cow.png';
import chicken from '../assets/images/chicken.png';
import sheep from '../assets/images/sheep.png';

import vegetable from '../assets/images/vegetable.png';
import pork from '../assets/images/pork.png';

interface MeatSelectorProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const options = [
  {
    value: 'cow',
    image: cow,
  },
  {
    value: 'chicken',
    image: chicken,
  },
  {
    value: 'sheep',
    image: sheep,
  },
  {
    value: 'pork',
    image: pork,
  },
  {
    value: 'vegetable',
    image: vegetable,
  },
];

const MeatSelector = ({ selectedOption, setSelectedOption }: MeatSelectorProps) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedOption(event.target.value);

  
useEffect (() => {
    setSelectedOption('cow');

}, [])

  return (
    <div className="flex flex-col items-center w-full">
      <span className="mb-[10px] self-start">Выберите мясо</span>
      <div className="flex justify-between w-full">
        {options.map((option) => (
          <label key={option.value} className="flex flex-col items-center">
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              className="sr-only"
            />
            <img
              src={option.image}
              alt={option.value}
              className={`w-[62px] h-[62px] max-[370px]:w-[40px] max-[370px]:h-[40px] rounded-full cursor-pointer border-2 border-input-color ${
                selectedOption === option.value ? 'border-2 !border-black bg-input-color' : ''
              }`}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default MeatSelector;
