import { ChangeEvent } from 'react';

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <div className="relative shadow-default border-2 border-red-custom h-full text-red-custom">
      <input
        type="text"
        placeholder={placeholder}
        className=" pl-[30px] h-full  placeholder-red-custom focus-visible:outline-none w-full"
        value={value}
        onChange={onChange}
      />
      <span className="absolute left-[6px] top-[50%] translate-y-[-50%]">{'>'}</span>
    </div>
  );
};

export default Input;
