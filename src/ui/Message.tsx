import dialog from '../assets/images/dialog.png';

const Message = ({ text }: { text: string }) => {
  return (
    <div className="w-[95%] px-[14px] py-[11px] leading-[120%] text-red-custom bg-custom-white border-2 border-red-custom shadow-default relative">
      <img src={dialog} alt="Сообщение" className='absolute w-[22px] h-[15px] right-[-3.7px] bottom-[-14px]' />

      {text}
    </div>
  );
};

export default Message;
