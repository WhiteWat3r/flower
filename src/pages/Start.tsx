import Button from '../ui/Button';
import Lottie from 'lottie-react';
import yellowSeed from '../assets/images/yellowSeed.png';
import whiteSeed from '../assets/images/whiteSeed.png';
import redSeed from '../assets/images/redSeed.png';

import yellowSeedAnimation from '../assets/animations/1/yellowSeedAnimation.json';
import whiteSeedAnimation from '../assets/animations/1/whiteSeedAnimation.json';
import redSeedAnimation from '../assets/animations/1/redSeedAnimation.json';

// import yellowSeedAnimation from '../assets/animations/1/1st_day_yellow_seed.json' as any;
// import whiteSeedAnimation from '../assets/animations/1/1st_day_white_seed.json' as any;
// import redSeedAnimation from '../assets/animations/1/1st_day_red_seed.json' as any;



import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { setSeedId } from '../store/mainSlice';
import { useState } from 'react';

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
  const [animation, setAnimation] = useState<null | number>(null);

  const animations = [yellowSeedAnimation, whiteSeedAnimation, redSeedAnimation];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChooseSeed = (id: number) => {
    dispatch(setSeedId(id));
    setAnimation(id);
    setTimeout(() => {
      navigate(`/on-boarding`);
    }, 4000);
  };

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
