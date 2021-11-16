import { Operation, Operations } from '../types';

export function isNumeric(str: string | number) {
  if (typeof str !== 'string') return false;
  return !isNaN(parseFloat(str));
}

export function getNumbers(strArr: string): number[] {
  const nums: number[] = [];

  for (let i = 0; i < strArr.length; i++) {
    if (isNumeric(strArr[i])) {
      let temp = strArr[i];

      for (let j = i + 1; j < strArr.length; j++) {
        if (isNumeric(strArr[j])) {
          temp += strArr[j];
          i++;
        } else {
          break;
        }
      }
      nums.push(parseFloat(temp));
    }
  }

  return nums;
}

export const validateOperation = (input: string): Operation | null => {
  const plus = input.includes('plus');
  const minus = input.includes('minus');
  const multiply = input.includes('multiply');
  const divide = input.includes('divide');

  const operations: boolean[] = [plus, minus, multiply, divide];
  const counter = operations.reduce((prev, current) => {
    if (current) return prev + 1;
    return prev;
  }, 0);

  if (counter > 1) return null;
  if (plus) return '+';
  if (minus) return '-';
  if (multiply) return '*';
  if (divide) return '/';
  return null;
};

export const computation = (
  operation: Operation,
  n1: number,
  n2: number
): number => {
  switch (operation) {
    case Operations.plus:
      return n1 + n2;
    case Operations.minus:
      return n1 - n2;
    case Operations.multiply:
      return n1 * n2;
    case Operations.divide:
      return n1 / n2;
    default:
      return n1 % n2;
  }
};
