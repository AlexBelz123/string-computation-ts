import React from 'react';
import { ListItem } from '../molecules';
// types
import { IItem } from '../types';

interface IList {
  items: IItem[];
  removeItem: (id: string) => void;
}

const List = ({ items, removeItem }: IList) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default List;
