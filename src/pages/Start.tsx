import Button from '../ui/Button';
import yellowSeed from '../assets/images/yellowSeed.png';
import whiteSeed from '../assets/images/whiteSeed.png';
import redSeed from '../assets/images/redSeed.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { setSeedId } from '../store/mainSlice';

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

const navigate = useNavigate()
const dispatch = useAppDispatch()

const handleChooseSeed = (id: number) => {
  dispatch(setSeedId(id))
  navigate(`/on-boarding`);
};

  return (
    <div className="h-full flex flex-col justify-end items-center bg-custom-pink px-[25px] pb-[20px]">
      <div className="h-[82%] bg-custom-yellow w-full border-2 border-red-custom shadow-default pb-[50px] flex flex-col justify-between">
        <h2 className="text-[34px] leading-[132%] text-center text-red-custom mt-[20px] mb-[30px]">
          Выбери семечку
        </h2>
        <ul className="mx-[10px] flex flex-col gap-[15px] justify-between h-[70%]">
          {mainButtons.map((button) => (
            <li key={button.id} className="h-[100px]">
              <Button type={'seed'} img={button.img} onClick={() => handleChooseSeed(button.id)}>
                {button.text}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Start;
