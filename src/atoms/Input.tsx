import React from 'react';

interface IInput {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ input, handleChange }: IInput) => {
  return <input value={input} onChange={handleChange} />;
};

export default Input;
