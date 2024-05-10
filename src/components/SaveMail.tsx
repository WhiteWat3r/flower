import { ChangeEvent, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useAppSelector } from '../store/store';
import { useSetEmailMutation } from '../api/mainApi';

const SaveMail = () => {
  const [email, setEmail] = useState('');

  const [setProfileEmail] = useSetEmailMutation();

  const userEmail = useAppSelector((store) => store.main?.profile?.email);

  const handleSaveEmail = () => {
    setProfileEmail({ email });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-[95%] bg-custom-white py-[15px] px-[10px] border-2 border-red-custom h-[160px]">
      {userEmail ? (
        <span className="text-red-custom w-full h-full flex flex-col justify-center items-center">
          Сохранено
        </span>
      ) : (
        <div className="flex flex-col gap-[10px] h-full">
          <Input value={email} placeholder="Введите почту" onChange={handleInputChange} />

          <Button type={'nav'} onClick={handleSaveEmail}>
            Сохранить почту
          </Button>
        </div>
      )}
    </div>
  );
};

export default SaveMail;
