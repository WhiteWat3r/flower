import { ReactNode } from 'react';

import man from '../assets/images/man.png';
import people from '../assets/images/people.png';

import hunger1 from '../assets/images/hunger1.png';
import hunger2 from '../assets/images/hunger2.png';
import hunger3 from '../assets/images/hunger3.png';

import time1 from '../assets/images/time1.png';
import time2 from '../assets/images/time2.png';
import time3 from '../assets/images/time3.png';

interface ICustomSlider {
  count: number;
  setCount: (count: number) => void;
  label: ReactNode;
  type: 'guest' | 'hunger' | 'time';
  max: number;
}

const imgs = {
  guest: {
    first: man,
    second: people,
    third: people,
    firstImgStyle: 'w-[57px] h-[57px]',
    secondImgStyle: 'w-[90px] h-[57px]',
  },
  hunger: {
    first: hunger1,
    second: hunger2,
    third: hunger3,
    firstImgStyle: 'w-[80px] h-[80px]',
    secondImgStyle: 'w-[80px] h-[80px]',
  },
  time: {
    first: time1,
    second: time2,
    third: time3,
    firstImgStyle: 'w-[80px] h-[80px]',
    secondImgStyle: 'w-[80px] h-[80px]',
  },
};

const CustomSlider = ({ count, setCount, label, max, type }: ICustomSlider) => {
  //   const [peopleCount, setPeopleCount] = useState(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(parseInt(event.target.value));
  };

  return (
    <div className="w-full h-20 flex flex-col">
      <span className="mb-[35px]">{label}</span>

      <div className="w-full relative  h-7 ">
        <input
          type="range"
          min="1"
          max={max}
          value={count}
          onChange={handleSliderChange}
          className="absolute left-0 z-10 w-full top-0 h-[4px] cursor-pointer"
        />
        <span className="absolute left-0 w-full top-0 bg-input-color z-20 h-[5px] pointer-events-none rounded-[30px]" />
        <div
          className={`absolute z-20 pointer-events-none translate-x-[-50%] transition-all
           ${type == 'guest' ? 'top-[-110%]' : 'top-[-200%]'}
           ${count < max / 2 ? imgs[type].firstImgStyle : imgs[type].secondImgStyle}`}
          style={{ left: `${((count - 1) / (max - 1)) * (type === 'guest' ? 90 : 83) + (type === 'guest' ? 2 : 8)}%`, transition: 'left 0.2s ease' }}>
          {type == 'guest' && (
            <span className="absolute top-[-15px] left-[50%] translate-x-[-50%] text-[12px]">{count}</span>
          )}

          <img
            src={
              count < max / 2
                ? imgs[type].first
                : count < max
                ? imgs[type].second
                : imgs[type].third
            }
            alt={`${count} people`}
            className="w-full h-full absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
