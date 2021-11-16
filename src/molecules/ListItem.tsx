import React from 'react';
import { Button } from '../atoms';
// types
import { IItem } from '../types';

interface IListItem {
  item: IItem;
  removeItem: (id: string) => void;
}

const ListItem = ({ item, removeItem }: IListItem) => {
  return (
    <li>
      <h4>{item.computation}</h4>
      <p>{item.result}</p>
      <Button handleClick={() => removeItem(item.id)}>Remove</Button>
    </li>
  );
};

export default ListItem;
