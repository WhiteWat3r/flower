import { useState } from 'react';
import Button from '../ui/Button';
import SaveMail from '../components/SaveMail';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import Message from '../ui/Message.tsx';

const promoText = [
  [
    [
      '— Мой бутон уже наливается жизнью, так\u00A0что я\u00A0увеличил количество подарочных бонусов от\u00A0Flowwow!',
      '%сервисное сообщение%',
    ],
    ['— Вот это листья! Давай пять! И\u00A0лови бонусы от\u00A0Flowwow ', '%сервисное сообщение%'],
  ],
  [
    [
      '— Мой бутон уже наливается жизнью, так\u00A0что я\u00A0улучшил твой промокод от\u00A0Flowwow на первую покупку.',
      '%промокод% ',
    ],
    [
      ' — Вот это листья! Давай пять! И\u00A0лови еще промокод Flowwow на\u00A0покупку ароматных пионов',
      '%промокод% ',
    ],
  ],
];

const emailStatusText = [
  [
    '— На\u00A0сегодня задания кончились. Не\u00A0забудь навестить цветомца завтра.',
    '— Поделись почтой, чтобы мы\u00A0напомнили о\u00A0цветомце и\u00A0прислали подарки.',
  ],
  [
    '— На\u00A0сегодня задания кончились. Не\u00A0забудь навестить цветомца завтра. Пионы ведь тоже\u00A0любят внимание и\u00A0заботу!',
  ],
];

const EndDay = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const userStatus = 0; // не было покупок/были/неавторизован

  const currentDay = useAppSelector((store) => store.main.flower?.day_number);

  const emailStatus = useAppSelector((store) => store.main?.profile?.email) ? 1 : 0;

  const handleClick = () => {
    if (step === 0) {
      setStep(step + 1);
    } else {
      // dispatch(setCurrentDay(currentDay + 1));
      navigate('/tasks');
    }
  };

  const renderMessage = () => {
    switch (step) {
      case 0:
        return promoText[userStatus][currentDay - 1];
      case 1:
        return emailStatusText[emailStatus];
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col justify-end items-center bg-custom-pink px-[25px] pb-[20px]">
      <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center gap-[10px]">
        <span />

        <div className="flex flex-col gap-[20px] items-center self-center w-full">
          {renderMessage()?.map((msg, index) => (
            <Message key={index} text={msg} />
          ))}

          {step === 1 && !emailStatus ? <SaveMail /> : ''}
        </div>

        <div className="mx-[10px] flex flex-col gap-[12px] justify-end first-letter:h-[20%] w-[95%] h-[60px]">
          <Button type={'nav'} onClick={handleClick}>
            {step === 0 ? 'Воспользоваться' : 'Я вернусь!'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EndDay;
