import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useState } from 'react';
import { useAppSelector } from '../store/store';
import SaveMail from '../components/SaveMail';
import Message from '../ui/Message';

// import onBoardingImg from '../assets/images/onBoardingImg.png';
// import { useWindowSize } from '../hooks/useWindowSize';
// bg-onBoarding

// const promoText = [
//   [
//     '— Спасибо, что даешь мне жизнь! Вижу, ты уже знаком с моими друзьями из Flowwow. Держи бонусы на новую покупку!',
//     '%сервисное сообщение%',
//   ],
//   [
//     '— Спасибо, что даешь мне жизнь! Держи промокод в подарок от моих друзей из Flowwow',
//     '%промокод% ',
//   ],
//   [
//     '— Спасибо, что даешь мне жизнь! Вижу, что ты еще не авторизовался в Flowwow. Если хочешь продолжить игру, авторизуйся в сервисе.',
//   ],
// ];

const seedText = [
  [
    '— Разреши представиться, я белый пион Дюшес де Немур, потомственный француз с ароматом ландышей. Белый цвет — символ искренности. Запомни это, если будешь собирать со мной букет.',
  ],
  [
    '— Я желтый пион Бартзелла,красивейший в своем роде. Букеты моего цвета — это про надежность и уверенность.Давай скорее меня выращивать!',
  ],
  [
    '— Я красный пион сорта Ред Шарм, цветок любви и страсти. Между прочим, у меня золотая медаль Ассоциации любителей пионов. Мои лепестки до трех недель остаются свежими!',
  ],
];

const messages = [
  [
    '— Присматривай за мной каждый день: поливай, пой песни, устраивай танцы и выполняй другие задания.',
    '— Играй каждый день, чтобы получать промокоды с подарками и побороться за суперприз.',
  ],
  ['— Чтобы не потерять призы, поделись своей электронной почтой'],
];

const OnBoarding = () => {
  const selectedSeedId = useAppSelector((store) => store.main.selectedSeedId);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  console.log(selectedSeedId);
  // const userStatus = 2; // не было покупок/были/неавторизован

  const handleContinue = () => {
    step < 3 ? setStep(step + 1) : navigate('/tasks');
  };

  const handleUsePromo = () => {
    // do smth
  };

  const renderMessage = () => {
    switch (step) {
      // case 0:
      //   return promoText[userStatus];
      case 1:
        return seedText[selectedSeedId];
      case 2:
        return messages[0];
      case 3:
        return messages[1];
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col justify-end items-center bg-custom-pink px-[25px] pb-[20px]">
      <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center ">
        {step === 1 ? (
            <h1 className="text-red-custom text-[34px] text-center mt-[19px] leading-[132%]">
              Корни пущены!
            </h1>) : (<span/>
          )}


        <div className="flex flex-col gap-[20px] items-center self-center w-full">
          {renderMessage()?.map((msg, index) => (
            <Message key={index} text={msg} />
          ))}
          {step == 3 && <SaveMail />}
        </div>

        <ul className="mx-[10px] flex flex-col gap-[12px] justify-end first-letter:h-[20%] w-[95%]">
          {step === 0 && (
            <li className="h-[60px]">
              <Button type={'nav'} onClick={handleUsePromo}>
                Воспользоваться
              </Button>
            </li>
          )}
          <li className="h-[60px]">
            <Button type={'nav'} onClick={handleContinue}>
              Продолжить игру
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OnBoarding;
