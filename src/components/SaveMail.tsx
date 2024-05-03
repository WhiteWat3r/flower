import { useState } from 'react';
import Button from '../ui/Button';

const SaveMail = () => {
  const [email, setEmail] = useState('');

  const handleSaveEmail = () => {
    // savesave
  };

  return (
    <div className="w-[95%] bg-custom-white py-[15px] px-[10px] border-2 border-red-custom h-[160px]">
      <div className="flex flex-col gap-[10px] h-full">
        <div className="relative shadow-default border-2 border-red-custom h-full text-red-custom">
          <input
            type="text"
            placeholder="Ввести почту"
            className=" pl-[30px] h-full  placeholder-red-custom focus-visible:outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute left-[6px] top-[50%] translate-y-[-50%]">{'>'}</span>
        </div>

        <Button type={'nav'} onClick={handleSaveEmail}>
          Сохранить почту
        </Button>
      </div>
    </div>
  );
};

export default SaveMail;
