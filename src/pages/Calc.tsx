import { useState } from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import CustomSlider from '../components/CustomSlider';
import MeatSelector from '../components/MeatSelector';
import { meatKilogramsCounting } from '../utils/meatKilogramsCounting';

const Calc = () => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [hungredStatus, setHungredCount] = useState(1);
  const [duration, setDuration] = useState(1);
  const [meat, setMeat] = useState<string>();

  const navigate = useNavigate();

  return (
    <div className="h-full bg-bg-color flex flex-col justify-between items-center py-[27px] px-[19px] gap-4">
      <h1 className="font-medium text-[20px] self-start mb-[10px]">Гриль-вечеринка в 5 кликов</h1>
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

      <span className="text-[14px] font-medium">
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
      <div className="w-full flex">
        <Button type="primary" onClick={() => navigate('/calc')}>
          Заказать в Яндекс Еде
        </Button>
      </div>
    </div>
  );
};

export default Calc;
