import Button from '../ui/Button';

const Modal = ({handleClose}: {handleClose: () => void}) => {
  return ( 
    <div className="absolute h-full w-full bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-[80%] h-[220px] bg-white rounded-[20px] py-[40px] px-[20px] flex flex-col items-center">
        <h2 className="text-[20px] font-bold mb-[15px]">Вы не подписаны</h2>
        <span className="text-[16px] text-center">
          Чтобы продолжить, необходимо оформить подписку на канал
        </span>

        <Button type={'modal'} onClick={handleClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default Modal;
