import Button from '../ui/Button';
import Lottie from 'lottie-react';
import yellowSeed from '../assets/images/yellowSeed.png';
import whiteSeed from '../assets/images/whiteSeed.png';
import redSeed from '../assets/images/redSeed.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setIsFirstClick, setIsSoundOn } from '../store/mainSlice';
import { useEffect, useState } from 'react';
import { useSelectSeedMutation } from '../api/mainApi';

const mainButtons = [
  {
    id: 0,
    text: '> Жёлтая',
    img: yellowSeed,
  },
  {
    id: 1,
    text: '> Белая',
    img: whiteSeed,
  },
  {
    id: 2,
    text: '> Красная',
    img: redSeed,
  },
];

const Start = () => {
  const [animation, setAnimation] = useState<number | null>(null);
  const [animations, setAnimations] = useState<any[]>([]);
  const isFirstClick = useAppSelector((store) => store.main.isFirstClick);
  const [setSeed, progress] = useSelectSeedMutation();

  const flowerData = useAppSelector((store) => store.main?.flower);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChooseSeed = async (id: number) => {
    if (isFirstClick) {
      dispatch(setIsSoundOn());
      dispatch(setIsFirstClick(false));
    }
    try {
      setAnimation(id);

      let seedColor = id === 0 ? 'yellow' : id === 1 ? 'white' : 'red';
      setTimeout(async () => {
        await setSeed({ seed: seedColor });
        navigate(`/on-boarding`);
      }, 4000);
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  useEffect(() => {
    const fetchAnimations = async () => {
      try {
        const animationResponses = await Promise.all([
          fetch('/assets/animations/1/yellowSeedAnimation.json'),
          fetch('/assets/animations/1/whiteSeedAnimation.json'),
          fetch('/assets/animations/1/redSeedAnimation.json'),
        ]);
        const animationJsons = await Promise.all(animationResponses.map((res) => res.json()));
        setAnimations(animationJsons);
      } catch (error) {
        console.error('Error fetching animations:', error);
      }
    };

    fetchAnimations();
  }, []);
  console.log(flowerData);

  useEffect(() => {
    if (flowerData?.id && !progress?.isLoading && !animation) {
      navigate(`/tasks`);
    }
  }, [flowerData?.id]);

  return (
    <div
      className={`h-full flex flex-col justify-end items-center  px-[25px] pb-[20px]  ${
        animation !== null ? 'bg-white-bg' : 'bg-custom-pink'
      }`}>
      {animation !== null ? (
        <div className={'w-full'}>
          <Lottie animationData={animations[animation]} autoplay loop />
        </div>
      ) : (
        <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[50px] flex flex-col justify-between">
          <h2 className="text-[34px] leading-[132%] text-center text-red-custom mt-[20px] mb-[30px]">
            Выбери семечку
          </h2>
          <ul className="mx-[10px] flex flex-col gap-[15px] justify-between h-[70%]">
            {mainButtons.map((button) => (
              <li key={button.id} className="h-[100px]">
                <Button type={'seed'} onClick={() => handleChooseSeed(button.id)} img={button.img}>
                  {button.text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Start;
