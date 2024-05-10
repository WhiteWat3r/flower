import Lottie from 'lottie-react';

import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Input from '../ui/Input';

import reactionImg from '../assets/images/reaction.png';
import { setIsFirstClick, setIsSoundOn } from '../store/mainSlice';
import { useDoTaskMutation, useGetTasksQuery, useSetFlowerNameMutation } from '../api/mainApi';
import { ITask } from '../types/task';

const reactions = [
  ['— Потрясающе! Теперь есть куда пускать корни', '', '— Ура! Теперь у меня тоже есть имя'],
  ['— Спасибо, было душновато', '— Во-о-от теперь заживем!', '— Хм, неожиданно. Красивый жест!'],
  [
    '— Спасибо а то неохота листья морозить',
    '— Кайф. Обожаю воду!',
    '— Немного странно, но мне нравится!',
  ],
]; //по дням

const Tasks = ({ animations, loaded }: { animations: any; loaded: boolean }) => {
  // console.log('animations', animations);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isFirstClick = useAppSelector((store) => store.main.isFirstClick);
  const currentDay = useAppSelector((store) => store.main.flower?.day_number);
  const selectedSeedId = useAppSelector((store) => store.main?.flower?.seed);

  const [setFlowerNameMutation] = useSetFlowerNameMutation();
  const { data } = useGetTasksQuery('');
  const [doTask] = useDoTaskMutation();

  const [flowerName, setFlowerName] = useState('');
  const [isButtonsDisabled, setButtonsDisabled] = useState(false);
  const [reaction, setReaction] = useState('');
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFlowerName(e.target.value);
  };

  const handleSaveFlowerName = () => {
    setFlowerNameMutation(flowerName);
    setChangeName(false);
    doTask({ task_name: 'give_the_flower_a_name' });
    setReaction(reactions[currentDay - 1][2]);
    othersTasksCompleted(2) === 2 &&
      setTimeout(() => {
        handleEndingDay();
      }, 9000);
  };

  const othersTasksCompleted = useMemo(
    () => (currentTaskNumber: number) =>
      data?.tasks.filter(
        (task: ITask, index: number) => index !== currentTaskNumber && task.status === '1',
      ).length,
    [data?.tasks],
  );

  const executeTask = (taskName: string, taskNumber: number) => {
    if (isFirstClick) {
      dispatch(setIsSoundOn());
      dispatch(setIsFirstClick(false));
    }

    taskNumber === 0
      ? handleAnimationStart(animations[currentDay - 1]?.firstAction[selectedSeedId])
      : taskNumber === 1
      ? handleAnimationStart(animations[currentDay - 1]?.secondAction[selectedSeedId])
      : handleAnimationStart(animations[currentDay - 1]?.thirdAction[selectedSeedId]);

    setTimeout(() => {
      resetAnimation();
    }, 6000);

    if (taskName === 'give_the_flower_a_name') {
      setChangeName(!isChangeName);
    } else {
      doTask({ task_name: taskName });
      setButtonsDisabled(true);
      setTimeout(() => {
        setReaction(reactions[currentDay - 1][taskNumber]);
        setButtonsDisabled(false);
      }, 6000);

      setTimeout(() => {
        setReaction('');
      }, 9000);

      othersTasksCompleted(taskNumber) === 2 &&
        setTimeout(() => {
          handleEndingDay();
        }, 12000);
    }
  };

  useEffect(() => {
    if (reaction) {
      setTimeout(() => {
        setReaction('');
      }, 3000);
    }
  }, [reaction]);

  return loaded ? (
    <div className="h-full flex flex-col justify-center items-center bg-white-bg px-[25px] pb-[20px] relative">
      <div className="w-full pointer-events-none pt-[100px] relative">
        {reaction && (
          <span
            className={`absolute ${
              currentDay == 1 ? 'bottom-[50%]' : 'bottom-[60%]'
            }  left-[20%] z-10 border-2 border-custom-blue p-[10px] w-[220px] bg-custom-white shadow-default text-red-custom`}>
            {reaction}
            <img
              src={reactionImg}
              className="absolute w-[22px] h-[15px] bottom-[-14px] left-[50%] translate-x-[-50%] "
            />
          </span>
        )}
        <Lottie
          animationData={
            animation ? animation : animations[currentDay - 1]?.default[selectedSeedId]
          }
          className="h-full w-full"
        />
      </div>
      <div
        className={`absolute flex flex-col gap-[12px] w-full px-[25px] bottom-[17px] ${
          isButtonsDisabled ? 'pointer-events-none' : ''
        }`}>
        {data?.tasks?.map((task: ITask, index: number) => (
          <Button
            key={task.id}
            type={'gameAction'}
            disabled={task.status === '0' ? false : true}
            onClick={() => executeTask(task.action, index)}>
            {`> ${task.caption}`}
          </Button>
        ))}
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
    </div>
  ) : undefined;
};

export default Tasks;
