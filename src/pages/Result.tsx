import Button from '../ui/Button';
// import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
// import { setCurrentDay, clearActionsStatus } from '../store/mainSlice';

import whiteFlower from '../assets/images/whiteFlower.png';
import redFlower from '../assets/images/redFlower.png';
import yellowFlower from '../assets/images/yellowFlower.png';


import vk from '../assets/images/vk.png';
import tg from '../assets/images/tg.png';


const resultText = [
  { img: yellowFlower, name: 'Пион Бартзелла' },
  { img: whiteFlower, name: 'Пион Дюшес де Немур' },
  { img: redFlower, name: 'Пион Ред Шарм' },
];

const Result = () => {
//   const [step, setStep] = useState(0);
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const userStatus = 0; // не было покупок/были/неавторизован
//   const emailStatus = 0; // не указывал/указывал почту
  const selectedSeedId = useAppSelector((store) => store.main.selectedSeedId);

//   const currentDay = useAppSelector((store) => store.main.currentDay); // 2 день

  const handleClick = () => {};

  return (
    <div className="h-full flex flex-col items-center bg-blue-bg px-[25px] pb-[20px] pt-[75px]">
      <div className="h-full bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center gap-[10px]">
        <span className="w-[95%] mt-2 text-[16px] leading-[110%] text-red-custom text-center">
          Поздравляем
          <p>ты вырастил свой первый пион на Flowwow!</p>
        </span>

        <div className="shadow-default w-[95%] h-full flex flex-col justify-between items-center gap-[9px] bg-custom-white border-2 border-red-custom">
          <h1 className="text-red-custom text-[34px] text-center mt-[12px] leading-[110%]">
            Грамотка умнички
          </h1>
          <span className="text-[16px] leading-[110%] text-red-custom text-center">
            Друг и владелец пиона
          </span>
          <img
            src={resultText[selectedSeedId].img}
            alt="Пион"
            className="border-2 border-red-custom w-[95%]"
          />

          <span className="mb-3 text-[16px] leading-[110%] text-red-custom text-center">
            {resultText[selectedSeedId].name}
          </span>
        </div>

        <div className="mx-[10px] flex gap-[5px] justify-end first-letter:h-[20%] w-[95%] min-h-[60px]">
          <Button type={'nav'} onClick={handleClick}>
            {'Забрать призы!'}
          </Button>
          <div className="flex gap-[5px] min-w-[125px]">
            <Button type={'nav'} onClick={handleClick}>
              <img src={vk} alt="Вконтакте" className=" w-[70%]" />
            </Button>
            <Button type={'nav'} onClick={handleClick}>
              <img src={tg} alt="Телеграмм"  className=" w-[70%]"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
