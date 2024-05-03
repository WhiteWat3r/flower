import { useState } from 'react';
import Button from '../ui/Button';
import SaveMail from '../components/SaveMail';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const promoText = [
  [
    [
      '— Мой бутон уже наливается жизнью, так что я увеличил количество подарочных бонусов от Flowwow!',
      '%сервисное сообщение%',
    ],
    ['— Вот это листья! Давай пять! И лови бонусы от Flowwow ', '%сервисное сообщение%'],
  ],
  [
    [
      '— Мой бутон уже наливается жизнью, так что я улучшил твой промокод от Flowwow на первую покупку.',
      '%промокод% ',
    ],
    [
      ' — Вот это листья! Давай пять! И лови еще промокод Flowwow на покупку ароматных пионов',
      '%промокод% ',
    ],
  ],
];

const emailStatusText = [
  [
    '— На сегодня задания кончились. Не забудь навестить цветомца завтра.',
    '— Поделись почтой, чтобы мы напомнили о цветомце и прислали подарки.',
  ],
  [
    '— На сегодня задания кончились. Не забудь навестить цветомца завтра. Пионы ведь тоже любят внимание и заботу!',
  ],
];

const EndDay = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const userStatus = 0; // не было покупок/были/неавторизован
  const emailStatus = 0; // не указывал/указывал почту
  const currentDay = useAppSelector((store) => store.main.currentDay); // 2 день

  const handleClick = () => {
    step === 0 ? setStep(step + 1) : navigate('/tasks');
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

        <div className="flex flex-col gap-[10px] items-center self-center w-full">
          {renderMessage()?.map((msg, index) => (
            <div
              key={index}
              className="bg-message w-[95%] bg-[length:100%_100%] pb-[30px] px-[14px] pt-[13px] text-[16px] leading-[120%] text-red-custom">
              {msg}
            </div>
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
