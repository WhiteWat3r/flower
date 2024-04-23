import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Modal from '../components/Modal';
// import { useWindowSize } from '../hooks/useWindowSize';

const Check = () => {
  const navigate = useNavigate();

  const [isModalOpen, setisModalOpen] = useState(false);
  // const [width] = useWindowSize();

  // const [isLoading, setIsLoading] = useState(false);

  // const simulateBackendRequest = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     const isSuccess = false;
  //     if (isSuccess) {
  //       navigate('/on-boarding');
  //     }
  //     setIsLoading(false);
  //   }, 1500);
  // };

  // useEffect(() => {
  //   simulateBackendRequest();
  // }, []);

  return true ? (
    <div className="bg-check h-full bg-top bg-cover flex flex-col justify-between items-center">
      <h1 className="uppercase text-header-text text-[24px] max-w-[60%] font-medium mt-[34px] text-center">
        Шашлычный калькулятор
      </h1>
      <p className="text-[16px] text-center max-w-[90%]">
        Чтобы воспользоваться калькулятором, проверьте подписку на наше сообщество «Открытая кухня»
      </p>
      <div className="w-full  bg-white rounded-t-[15px]  h-[180px] flex justify-center">
        <div className="w-[95%] flex flex-col gap-[15px] mb-[33px] mt-[23px] items-center">
          <Button type="primary" onClick={() => navigate('/on-boarding')}>
            Подписаться
          </Button>

          <Button type="secondary" onClick={() => setisModalOpen(true)}>
            Проверить подписку
          </Button>
          <span className="text-[#A9A9A9] text-[12px]">@kalkulyator_bot</span>
        </div>
      </div>

      {isModalOpen && <Modal handleClose={() => setisModalOpen(false)} />}
    </div>
  ) : (
    <>ЗАГРУЗКА</>
  );
};

export default Check;
