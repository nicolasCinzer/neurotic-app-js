'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import itemStyle from './css/BudgetList.module.css';

export default function ItemList({ list, walletName }) {
  const router = useRouter();

  return (
    <ul className={itemStyle.listBody}>
      {list.map(({ id, title, tag, money, date }) => (
        <li
          className={itemStyle.itemBody}
          key={id}
          onClick={() => router.push(`/budget/wallets/${walletName}/${id}`)}
        >
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
