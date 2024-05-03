import logo from '../assets/images/logo.png';
import settingsImg from '../assets/images/settings.png';

import healthImg from '../assets/images/health.png';
import waterImg from '../assets/images/water.png';
import happinessImg from '../assets/images/happiness.png';
import { useAppSelector } from '../store/store';

const flowerRequirements = [
  {
    id: 1,
    value: 'health',
    img: healthImg,
  },
  {
    id: 2,
    value: 'water',
    img: waterImg,
  },
  {
    id: 3,
    value: 'happiness',
    img: happinessImg,
  },
];

const Header = () => {

  const currentDay = useAppSelector((store) => store.main.currentDay); // 2 день


  return (
    <header className="w-full absolute top-0 left-0 flex flex-col  px-[25px] h-[100px] gap-[15px] z-30">
      <div className="flex items-center gap-[20px] mt-[20px]">
        <div className="flex items-center gap-[5px]">
          <img src={logo} alt="Логотип" className="h-[45px]" />
          <span className="text-red-custom text-[22px]">flowwow</span>
        </div>
        <span className="uppercase text-custom-blue text-[17px]">День {currentDay}/3</span>
        <button>
          <img src={settingsImg} alt="Настройки" className="h-[26px]" />
        </button>
      </div>
      <ul className="flex gapp-[10px] justify-between">
        {flowerRequirements.map((req) => (
          <li key={req.id} className="w-[30%]  h-[14px]  relative flex items-center justify-end">
            <span className="border-2 border-red-custom w-[95%] h-[10px] shadow-default"></span>
            <img src={req.img} className="h-[15px] absolute left-0" alt="" />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
