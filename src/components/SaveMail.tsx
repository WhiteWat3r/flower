import { ChangeEvent, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const SaveMail = () => {
  const [email, setEmail] = useState('');

  const handleSaveEmail = () => {
    // savesave
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-[95%] bg-custom-white py-[15px] px-[10px] border-2 border-red-custom h-[160px]">
      <div className="flex flex-col gap-[10px] h-full">
        <Input value={email} placeholder="Введите почту" onChange={handleInputChange} />

        <Button type={'nav'} onClick={handleSaveEmail}>
          Сохранить почту
        </Button>
      </div>
    </div>
  );
};

export default SaveMail;
