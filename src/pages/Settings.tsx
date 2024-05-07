import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {setIsSoundOn} from "../store/mainSlice.ts";

const Settings = () => {
  const navigate = useNavigate();

  const isSoundOn = useAppSelector((store) => store.main.isSoundOn);

  const dispatch = useAppDispatch();

  const toggleSound = () => {
    dispatch(setIsSoundOn());
  }; // включение/выключение звука

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-full flex flex-col justify-end items-center bg-custom-pink px-[25px] pb-[20px]">
      <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center gap-[10px]">
        <h1 className="text-red-custom text-[34px] text-center mt-[19px] leading-[132%]">
          Настройки
        </h1>

        <ul className="flex flex-col w-[95%] gap-[15px] h-[210px]">
          <li className='h-full'>
            <Button type={'gameAction'} onClick={handleGoBack}>
              {'> Правила'}
            </Button>
          </li>
          <li className='h-full'>
            <Button type={'gameAction'} onClick={toggleSound}>
               {isSoundOn ? '> Звук: выключить' : '> Звук: включить'}
            </Button>


          </li>
          <li className='h-full'>
          <Button type={'gameAction'} onClick={() => navigate('/prizes')}>
              {'> Мои призы'}
            </Button>
          </li>
        </ul>

        <div className="mx-[10px] flex flex-col gap-[12px] justify-end first-letter:h-[20%] w-[95%] h-[60px]">
          <Button type={'nav'} onClick={handleGoBack}>
            {'Назад'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
