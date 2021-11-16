import React from 'react';
import { Input, Button } from '../atoms';
import { IItem } from '../types';
import { createItem } from '../helpers';

interface IForm {
  additionalAction?: (item: IItem) => void;
}

const Form = ({ additionalAction }: IForm) => {
  const [input, setInput] = React.useState<string>('');

  // handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (additionalAction) {
      const item = createItem(input);
      if (item) {
        additionalAction(item);
      }
    }
    setInput('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input input={input} handleChange={handleChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
