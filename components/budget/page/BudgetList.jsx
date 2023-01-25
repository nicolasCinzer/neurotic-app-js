'use client';

import itemStyle from './BudgetList.module.css';
import { useState, useEffect } from 'react';

const sample = [
  { title: 'Mercado', tag: 'Market', money: '5000 COP', date: '24/1/2023' },
  { title: 'Proteina', tag: 'Gym', money: '5000 COP', date: '24/1/2023' },
  { title: 'Ropa', tag: 'Clothes', money: '5000 COP', date: '24/1/2023' },
];

export default function ItemList({ title, tag, money, date }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(sample);
  }, []);

  return (
    <ul className={itemStyle.listBody}>
      {sample.map(({ title, tag, money, date }) => (
        <li className={itemStyle.itemBody}>
          <div className={itemStyle.itemTitle}>{title}</div>
          <div className={itemStyle.itemTagBox}>
            <div className={itemStyle.itemTag}>{tag}</div>
          </div>
          <div className={itemStyle.itemFields}>{money}</div>
          <div className={itemStyle.itemFields}>{date}</div>
        </li>
      ))}
    </ul>
  );
}
