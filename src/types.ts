export interface IItem {
  id: string;
  computation: string;
  result: number;
}

export type Operation = '*' | '+' | '-' | '/';

export enum Operations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}
