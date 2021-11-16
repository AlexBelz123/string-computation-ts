import { IItem } from '../types';
import { getNumbers, computation, validateOperation } from '../utils';

export const createItem = (input: string): IItem | null => {
  const nums = getNumbers(input);
  let trigger = true;

  const temp = {
    id: `${Math.floor(Math.random() * 10000)}-i18gen`,
    computation: input,
  } as IItem;

  if (nums.length === 2) {
    const operation = validateOperation(input);

    if (operation) {
      trigger = false;
      temp.result = computation(operation, nums[0], nums[1]);
    }
  }

  if (trigger) {
    alert('Wrong Input');
    return null;
  }

  return temp;
};
