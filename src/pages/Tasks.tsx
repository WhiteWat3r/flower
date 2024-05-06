import Lottie from 'lottie-react';

import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { ChangeEvent, useState } from 'react';
import Input from '../ui/Input';

import razrihl from '../assets/animations/1st_day/1st_day_razrichlit_zemlu.json';
import sdut from '../assets/animations/1st_day/1st_day_sdut_pilinki.json';
import defaultFlower from '../assets/animations/1st_day/1st_day_default_flower.json';

// import happyFlower from '../assets/animations/1st_day/1st_day_happy_default_flower.json';
// import sadFlower from '../assets/animations/1st_day/1st_day_sad_default_flower.json';

import reactionImg from '../assets/images/reaction.png';

const Tasks = () => {
  const navigate = useNavigate();
  const [flowerName, setFlowerName] = useState('');

  const [reaction, setReaction] = useState('');

  const currentDay = useAppSelector((store) => store.main.currentDay); // 1 день

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
  const handleActionOne = () => {
    handleAnimationStart(razrihl);

    setTimeout(() => {
      setReaction('— Потрясающе! Теперь есть куда пускать корни ');
    }, 6000);

    setTimeout(() => {
      setReaction('');
    }, 9000);
  };

  const dayActions = [
    [
      {
        text: '> Разрыхлить землю',
        onClick: handleActionOne,
      },
      {
        text: '> Сдуть пылинки',
        onClick: () => {
          handleAnimationStart(sdut);
        },
      },
      { text: '> Дать цветку имя', onClick: () => setChangeName(!isChangeName) },
    ],
    [
      { text: '> Открыть форточку', onClick: handleEndingDay },
      { text: '> Удобрить', onClick: handleEndingDay },
      { text: '> Спеть песенку', onClick: handleEndingDay },
    ],
    [
      { text: '> Закрыть форточку', onClick: handleEndingDay },
      { text: '> Обильно полить', onClick: handleEndingDay },
      { text: '> Станцевать рейв', onClick: handleEndingDay },
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

    setReaction('— Ура! Теперь у меня тоже есть имя');

    setTimeout(() => {
      setReaction('');
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center bg-white-bg px-[25px] pb-[20px] relative">
      <div className="w-full pointer-events-none pt-[100px] relative">
        {reaction && (
          <span className="absolute top-[180px] left-[70px] z-10 border-2 border-custom-blue p-[10px] w-[220px] bg-custom-white shadow-default text-red-custom">
            {reaction}
            <img
              src={reactionImg}
              className="absolute w-[22px] h-[15px] bottom-[-15px] left-[50%] translate-x-[-50%] "
            />
          </span>
        )}
        <Lottie animationData={animation ? animation : defaultFlower} className="h-full w-full" />
      </div>
      <div className="absolute flex flex-col gap-[12px] w-full px-[25px] bottom-[17px]">
        {dayActions[currentDay - 1].map((action, index) => (
          <Button
            key={index}
            type={'gameAction'}
            disabled={false}
            onClick={() => handleButtonClick(action.onClick)}>
            {action.text}
          </Button>
        ))}

        <Button type={'gameAction'} disabled={false} onClick={() => navigate('/end-day')}>
          конец дня
        </Button>
      </div>

      {isChangeName && (
        <div className="absolute px-[25px] w-full h-full top-0 left-0 flex flex-col justify-end pointer-events-none">
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
    </div>
  );
};

export default Tasks;
