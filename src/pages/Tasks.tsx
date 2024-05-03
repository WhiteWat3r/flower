import closedWindow from '../assets/images/closedWindow.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const Tasks = () => {
  const navigate = useNavigate();

  const currentDay = useAppSelector((store) => store.main.currentDay); // 2 день

  const handleEndingDay = () => {
    navigate(currentDay < 3 ? '/end-day' : '/result');
  };

  const dayActions = [
    [
      { text: '> Разрыхлить землю', onClick: handleEndingDay },
      { text: '> Сдуть пылинки', onClick: handleEndingDay },
      { text: '> Дать цветку имя', onClick: handleEndingDay },
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
  };

  return (
    <div className="h-full flex flex-col justify-center items-center bg-white-bg px-[25px] pb-[20px] relative">
      <img src={closedWindow} alt="Окно" className="pointer-events-none pt-[100px]" />

      <div className="absolute flex flex-col gap-[12px] h-[23%] w-full px-[25px] bottom-[17px]">
        {dayActions[currentDay - 1].map((action, index) => (
          <Button
            key={index}
            type={'gameAction'}
            disabled={false} // Не забудьте изменить это значение по вашей логике
            onClick={() => handleButtonClick(action.onClick)}>
            {action.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
