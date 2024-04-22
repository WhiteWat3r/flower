import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Modal from '../components/Modal';

const Check = () => {
  const navigate = useNavigate();

  const [isModalOpen, setisModalOpen] = useState(false)


  const [isLoading, setIsLoading] = useState(false)

  const simulateBackendRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      const isSuccess = false; 
      if (isSuccess) {
        navigate('/on-boarding'); 
      }
      setIsLoading(false)
    }, 1500); 
  };


useEffect(() => {
  simulateBackendRequest();
}, []);

  return !isLoading ? (
    <div className="bg-check h-full bg-center bg-cover flex flex-col justify-end items-center">
      <div className="w-full  bg-white rounded-t-[15px]  h-[180px] flex justify-center">
        <div className="w-[95%] flex flex-col gap-[15px] mb-[33px] mt-[23px] items-center">
          <Button type="primary" onClick={() => setisModalOpen(true)}>
            Подписаться
          </Button>

          <Button type="secondary" onClick={() => navigate('/on-boarding')}>
            Проверить подписку
          </Button>
        </div>
      </div>

      {isModalOpen && <Modal handleClose={() => setisModalOpen(false)} />}
    </div>
  ) : <>ЗАГРУЗКА</>;
};

export default Check;
