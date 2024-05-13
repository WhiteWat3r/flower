import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../store/store';
import SaveMail from '../components/SaveMail';
import Message from '../ui/Message';
import { onBoardingStep } from '../store/mainSlice';

const promoText = [
  [
    '— Спасибо, что\u00A0даешь мне\u00A0жизнь! Вижу, ты\u00A0уже\u00A0знаком с\u00A0моими друзьями из\u00A0Flowwow. Держи бонусы на\u00A0новую покупку!',
    '%сервисное сообщение%',
  ],
  [
    '— Спасибо, что\u00A0даешь\u00A0мне\u00A0жизнь! Держи промокод в\u00A0подарок от\u00A0моих друзей\u00A0из\u00A0Flowwow',
    '%промокод% ',
  ],
  [
    '— Спасибо, что\u00A0даешь мне\u00A0жизнь! Вижу, что ты\u00A0еще\u00A0не\u00A0авторизовался в\u00A0Flowwow. Если хочешь продолжить игру, авторизуйся в\u00A0сервисе.',
  ],
];

const seedText = [
  [
    '— Я желтый пион Бартзелла, красивейший в\u00A0своем роде. Букеты\u00A0моего цвета — это\u00A0про\u00A0надежность и\u00A0уверенность. Давай\u00A0скорее меня выращивать!',
  ],
  [
    '— Разреши представиться, я\u00A0белый пион Дюшес\u00A0де\u00A0Немур, потомственный француз с\u00A0ароматом ландышей. Белый цвет — символ искренности. Запомни это, если будешь собирать\u00A0со\u00A0мной\u00A0букет.',
  ],
  [
    '— Я красный пион сорта\u00A0Ред Шарм, цветок любви и\u00A0страсти. Между прочим, у\u00A0меня золотая медаль Ассоциации любителей пионов. Мои\u00A0лепестки до\u00A0трех недель остаются свежими!',
  ],
];

const messages = [
  [
    '— Присматривай за\u00A0мной каждый день: поливай, пой песни, устраивай танцы и\u00A0выполняй другие задания.',
    '— Играй каждый день, чтобы получать промокоды с\u00A0подарками и побороться за\u00A0суперприз.',
  ],
  ['— Чтобы не\u00A0потерять призы, поделись своей электронной почтой'],
];

const OnBoarding = () => {
  const selectedSeedId = useAppSelector((store) => store.main?.flower?.seed);

  const step = useAppSelector((store) => store.main?.onBoardingStep);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const userStatus = 1; // не было покупок/были/неавторизован

  const handleContinue = () => {
    if (step < 3) {
      dispatch(onBoardingStep(step + 1));
    } else {
      navigate('/tasks');
      dispatch(onBoardingStep(0));
    }
  };

  const handleUsePromo = () => {
    // do smth
  };

  const renderMessage = () => {
    switch (step) {
      case 0:
        return promoText[userStatus];
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
          </h1>
        ) : (
          <span />
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
