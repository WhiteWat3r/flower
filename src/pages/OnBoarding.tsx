import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

import icons from '../assets/images/icons.png';
// import onBoardingImg from '../assets/images/onBoardingImg.png';
// import { useWindowSize } from '../hooks/useWindowSize';
// bg-onBoarding
const OnBoarding = () => {
  // const [width] = useWindowSize();

  const navigate = useNavigate();
  return (
    <div className="bg-onBoarding h-full bg-top bg-cover flex flex-col justify-between items-center">
      <h1 className="uppercase text-header-text text-[24px] max-w-[60%] font-medium text-center mt-[25px]">
        Шашлычный калькулятор
      </h1>

      {/* <img src={onBoardingImg} alt="" className='absolute z-[-]'/> */}

      <div className="flex flex-col items-center gap-[24px] mt-[auto] mb-[20px] w-[95%]">
        <div className="flex flex-col items-center">
          <h2 className="text-[24px] font-bold mb-5">Ура, майские!</h2>
          <div className="text-[16px] text-center max-w-full">
            Это — Шашлычный калькулятор. Он поможет посчитать, сколько мяса и денег понадобится,
            чтобы накормить всю компанию.
          </div>
        </div>

        <div className="w-full flex flex-col justify-center border border-input-color rounded-[10px] bg-white min-h-[112px] items-center gap-[5px] py-[15px]">
          <img className="w-[50%]" src={icons} alt={'Яндекс'} />
          <p className="text-[14px] px-[24px] text-center">
            Заказывайте все продукты для шашлыка в Яндекс Еде и оплачивайте картой Яндекс Пэй — так
            проще и выгоднее.
          </p>
        </div>
      </div>

      <div className="w-[95%] pb-[15px]">
        <Button type="primary" onClick={() => navigate('/calc')}>
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
