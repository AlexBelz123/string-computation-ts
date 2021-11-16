import React from 'react';
import { List, Form } from '../organisms';
// types
import { IItem } from '../types';

const MainView = () => {
  const [items, setItems] = React.useState<IItem[]>(
    JSON.parse(localStorage.getItem('items') as string)
  );

  const addItem = (item: IItem): void => {
    const newItems = [...items, item];
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  };

  const removeItem = (id: string): void => {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  };

  return (
    <div>
      <h3>Enter some computation</h3>
      <Form additionalAction={addItem} />
      <h3>Already computaed operations:</h3>
      <List items={items} removeItem={removeItem} />
    </div>
  );
};

export default MainView;
