import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-onBoarding h-full bg-center bg-cover flex flex-col justify-end items-center">
      <div className="w-[95%] mb-[33px]">
        <Button type="primary" onClick={() => navigate('/calc')}>
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
