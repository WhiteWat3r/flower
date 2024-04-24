import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import onboarding from "../assets/images/onboarding-bg-1.png"

import icons from '../assets/images/icons.png';
// import onBoardingImg from '../assets/images/onBoardingImg.png';
// import { useWindowSize } from '../hooks/useWindowSize';
// bg-onBoarding
const OnBoarding = () => {
  // const [width] = useWindowSize();

  const navigate = useNavigate();
  return (
    <div className="h-full bg-top bg-cover flex flex-col items-center pb-[32px] overflow-auto">
        <div className={"relative m-auto w-full flex flex-col items-center"}>
            <h1 className="uppercase text-header-text text-[24px] max-w-[60%] font-medium text-center absolute top-[25px] left-1/2 -translate-x-1/2">
                Шашлычный калькулятор
            </h1>
            <img src={onboarding} alt={""} className={"mt-[22px] max-h-[265px]"} />

            <div className="flex flex-col items-center gap-[24px] mt-[auto] mb-[20px] w-[95%]">
                <div className="flex flex-col items-center">
                    <h2 className="text-[24px] font-bold mb-5">Ура, майские!</h2>
                    <div className="text-[16px] text-center max-w-full leading-[1.05]">
                        Это —&nbsp;Шашлычный калькулятор. Он поможет посчитать, сколько мяса и денег понадобится,
                        чтобы накормить всю компанию.
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center border border-input-color rounded-[10px] bg-white min-h-[112px] items-center gap-[5px] py-[15px]">
                    <img className="w-[50%]" src={icons} alt={'Яндекс'} />
                    <p className="text-[14px] px-[24px] text-center leading-[1.05]">
                        Заказывайте все продукты для шашлыка в&nbsp;Яндекс Еде и&nbsp;оплачивайте картой Яндекс Пэй с&nbsp;кешбэком до&nbsp;5% баллами Плюса.
                    </p>
                </div>
            </div>
        </div>

      <div className="px-[19px] w-full">
        <Button type="primary" onClick={() => navigate('/calc')}>
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
