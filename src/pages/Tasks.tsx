import Lottie from 'lottie-react';

import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../ui/Input';

import reactionImg from '../assets/images/reaction.png';
import {
  clearActionsStatus,
  setFirstActionPressed,
  setSecondActionPressed,
  setThirdActionPressed,
} from '../store/mainSlice';



const reactions = [
    ['— Потрясающе! Теперь есть куда пускать корни', '', '— Ура! Теперь у меня тоже есть имя' ],
  ['— Спасибо, было душновато', '— Во-о-от теперь заживем!', '— Хм, неожиданно. Красивый жест!' ],
  ['— Спасибо а то неохота листья морозить', '— Кайф. Обожаю воду!', '— Немного странно, но мне нравится!' ],
] //по дням

const Tasks = ({animations, loaded} : {animations: any, loaded: boolean}) => {
  console.log(animations)

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedSeedId = useAppSelector((store) => store.main.selectedSeedId);

  const isFirstActionPressed = useAppSelector((store) => store.main.isFirstActionPressed);
  const isSecondActionPressed = useAppSelector((store) => store.main.isSecondActionPressed);
  const isThirdActionPressed = useAppSelector((store) => store.main.isThirdActionPressed);

  const [flowerName, setFlowerName] = useState('');

  const [reaction, setReaction] = useState('');

  const currentDay = useAppSelector((store) => store.main.currentDay);

  const [animation, setAnimation] = useState<null | any>(null);

  const [isChangeName, setChangeName] = useState(false);


  const handleAnimationStart = (animationData: any) => {
    setAnimation(animationData);
  };

  const resetAnimation = () => {
    setAnimation(null);
  };

  const handleEndingDay = () => {
    navigate(currentDay < 3 ? '/end-day' : '/result');
  };

  const handleActionFirst = () => {
    handleAnimationStart(animations[currentDay - 1]?.firstAction[selectedSeedId]);

    setTimeout(() => {
      setReaction(reactions[currentDay-1][0]);
    }, 6000);

    dispatch(setFirstActionPressed(true));
  };

  const handleActionSecond = () => {
    handleAnimationStart(animations[currentDay - 1]?.secondAction[selectedSeedId]);
    dispatch(setSecondActionPressed(true));
    setTimeout(() => {
      setReaction(reactions[currentDay-1][1]);
    }, 6000);
  };

  const handleActionThird = () => {
    if (currentDay === 1) {
      setChangeName(!isChangeName)
    } else {
      dispatch(setThirdActionPressed(true));
      setTimeout(() => {
        setReaction(reactions[currentDay-1][2]);
      }, 6000);
    }

    handleAnimationStart(animations[currentDay - 1]?.thirdAction[selectedSeedId]);
  };

  const dayActions = [
    [
      {
        text: '> Разрыхлить землю',
        onClick: handleActionFirst,
        disabled: isFirstActionPressed,
      },
      {
        text: '> Сдуть пылинки',
        onClick: handleActionSecond,
        disabled: isSecondActionPressed,
      },

      { text: '> Дать цветку имя', onClick: handleActionThird, disabled: isThirdActionPressed },
    ],
    [
      { text: '> Открыть форточку', onClick: handleActionFirst, disabled: isFirstActionPressed },
      { text: '> Удобрить', onClick: handleActionSecond, disabled: isSecondActionPressed },
      { text: '> Спеть песенку', onClick: handleActionThird, disabled: isThirdActionPressed },
    ],
    [
      { text: '> Закрыть форточку', onClick: handleActionFirst, disabled: isFirstActionPressed },
      { text: '> Обильно полить', onClick: handleActionSecond, disabled: isSecondActionPressed },
      { text: '> Станцевать рейв', onClick: handleActionThird, disabled: isThirdActionPressed },
    ],
  ];

  const handleButtonClick = (onClick: () => void) => {
    onClick();
    setTimeout(() => {
      resetAnimation();
    }, 6000);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFlowerName(e.target.value);
  };

  const handleSaveFlowerName = () => {
    setChangeName(false);

    setReaction(reactions[currentDay-1][2]);



    dispatch(setThirdActionPressed(true));
  };

  useEffect(() => {
    dispatch(clearActionsStatus());
  }, []); // удалить потом

  useEffect(() => {
    if (isFirstActionPressed && isSecondActionPressed && isThirdActionPressed) {
      setTimeout(() => {
        handleEndingDay();
      }, 10000);
    }
  }, [isFirstActionPressed, isSecondActionPressed, isThirdActionPressed]);

  useEffect(() => {
    if (reaction) {
      setTimeout(() => {
        setReaction('');
      }, 3000);
    }
  }, [reaction]);

  return loaded?  (
    <div className="h-full flex flex-col justify-center items-center bg-white-bg px-[25px] pb-[20px] relative">
      <div className="w-full pointer-events-none pt-[100px] relative">
        {reaction && (
          <span className={`absolute ${currentDay ===1 ? 'bottom-[50%]' : 'bottom-[60%]'}  left-[20%] z-10 border-2 border-custom-blue p-[10px] w-[220px] bg-custom-white shadow-default text-red-custom`}>
            {reaction}
            <img
              src={reactionImg}
              className="absolute w-[22px] h-[15px] bottom-[-14px] left-[50%] translate-x-[-50%] "
            />
          </span>
        )}
        <Lottie
          animationData={animation ? animation : animations[currentDay - 1].default[selectedSeedId]}
          className="h-full w-full"
        />
      </div>
      <div className="absolute flex flex-col gap-[12px] w-full px-[25px] bottom-[17px]">
        {dayActions[currentDay - 1].map((action, index) => (
          <Button
            key={index}
            type={'gameAction'}
            disabled={action.disabled}
            onClick={() => handleButtonClick(action.onClick)}>
            {action.text}
          </Button>
        ))}

        {/* <Button type={'gameAction'} disabled={false} onClick={() => navigate('/end-day')}>
          конец дня
        </Button> */}
      </div>

      {isChangeName && (
        <div className="absolute px-[25px] w-full h-full top-0 left-0 flex flex-col justify-end pointer-events-none z-30">
          <div className="h-[calc(100vh-160px)] mb-[70px] mt-[110px] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[15px] flex flex-col justify-between items-center gap-[10px] pointer-events-auto">
            <h1 className="text-red-custom text-[34px] text-center mt-[19px] leading-[132%] max-w-[250px]">
              Имя цветомца
            </h1>
            <div className={'h-[60px] w-[95%]'}>
              <Input placeholder={'Ввести имя'} value={flowerName} onChange={handleInputChange} />
            </div>
            <div className={'w-[95%] h-[60px]'}>
              <Button type={'nav'} onClick={handleSaveFlowerName}>
                Назвать
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>) : undefined
};

export default Tasks;
