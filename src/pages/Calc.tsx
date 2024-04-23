import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import CustomSlider from '../components/CustomSlider';
import MeatSelector from '../components/MeatSelector';
import { meatKilogramsCounting } from '../utils/meatKilogramsCounting';

import calc from '../assets/images/calc.png';

import man from '/images/man.png';
import people from '/images/people.png';

import hunger1 from '/images/hunger1.png';
import hunger2 from '/images/hunger2.png';
import hunger3 from '/images/hunger3.png';

import time1 from '/images/time1.png';
import time2 from '/images/time2.png';
import time3 from '/images/time3.png';

const Calc = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePaths = [man, people, hunger1, hunger2, hunger3, time1, time2, time3];

    const checkAllImagesLoaded = () => {
      for (const imagePath of imagePaths) {
        const image = new Image();
        image.src = imagePath;
        if (!image.complete) {
          return false;
        }
      }
      return true;
    };

    const checkImagesInterval = setInterval(() => {
      if (checkAllImagesLoaded()) {
        clearInterval(checkImagesInterval);
        setImagesLoaded(true);
      }
    }, 100);

    return () => clearInterval(checkImagesInterval);
  }, []);

  const [peopleCount, setPeopleCount] = useState(1);
  const [hungredStatus, setHungredCount] = useState(1);
  const [duration, setDuration] = useState(1);
  const [meat, setMeat] = useState<string>();

  const navigate = useNavigate();

  return (
    imagesLoaded && (
      <div className="h-full flex flex-col justify-between items-center px-[19px] gap-4 relative">
        <img
          src={calc}
          alt="Stars"
          className="absolute  w-[120px] h-[100px] right-0 max-[370px]:w-[80px] max-[370px]:h-[80px]"
        />

        <h1 className="font-medium text-[20px] self-start mb-[10px] max-[370px]:text-[18px] mt-[20px] z-10">
          Гриль-вечеринка в 5 кликов
        </h1>

        <CustomSlider
          label={'Укажите количество гостей'}
          max={20}
          type={'guest'}
          setCount={setPeopleCount}
          count={peopleCount}
        />

        <MeatSelector selectedOption={meat as string} setSelectedOption={setMeat} />

        <CustomSlider
          label={'Оцените уровень голода'}
          max={3}
          type={'hunger'}
          setCount={setHungredCount}
          count={hungredStatus}
        />

        <CustomSlider
          label={'Укажите продолжительность вечеринки'}
          max={3}
          type={'time'}
          setCount={setDuration}
          count={duration}
        />
        <div className="w-full pb-[20px] flex flex-col gap-[23px]">
          <div className="w-full flex flex-col mt-[20px]">
            <span className="text-[14px] font-medium mb-[15px]">
              Чтобы никто не ушел голодным, вам понадобится:
            </span>
            <ul className="flex w-full gap-[6px] justify-between">
              <li className="w-[48%] flex bg-white rounded-[10px] h-10 justify-center items-center border border-input-color">
                {meatKilogramsCounting(hungredStatus, duration, meat as string, peopleCount)}
                кг мяса
              </li>
              <li className="w-[48%] flex bg-white rounded-[10px] h-10 justify-center items-center border border-input-color">
                {' '}
                рублей
              </li>
            </ul>
          </div>

          <Button type="primary" onClick={() => navigate('/calc')}>
            Заказать в Яндекс Еде
          </Button>
        </div>
      </div>
    )
  );
};

export default Calc;
