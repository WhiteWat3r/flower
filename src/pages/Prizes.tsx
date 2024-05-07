import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Prizes = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full flex flex-col justify-end items-center bg-custom-pink px-[25px] pb-[20px]">
      <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center gap-[10px]">
        <h1 className="text-red-custom text-[34px] text-center mt-[19px] leading-[132%]">
          Настройки
        </h1>

        <ul className="flex flex-col gap-[20px] items-center self-center w-full">
          <li
            className="bg-message w-[95%] bg-[length:100%_100%] pb-[50px] px-[14px] pt-[13px] leading-[120%] text-red-custom"
            key={1}>
            {'промо'}
          </li>
        </ul>

        <ul className="mx-[10px] flex flex-col gap-[12px] justify-end first-letter:h-[20%] w-[95%]">
          <li className="h-[60px]">
            <Button type={'nav'} onClick={handleGoBack}>
              {'Воспользоваться'}
            </Button>
          </li>
          <li className="h-[60px]">
            <Button type={'nav'} onClick={handleGoBack}>
              {'Назад'}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Prizes;
