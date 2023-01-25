'use client';

import itemStyle from './css/BudgetList.module.css';
import { useRouter } from 'next/navigation';

export default function ItemList({ list }) {
  const router = useRouter();

  return (
    <ul className={itemStyle.listBody}>
      {list.map(({ id, title, tag, money, date }) => (
        <li
          className={itemStyle.itemBody}
          key={id}
          onClick={() => router.push(`/budget/${id}`)}
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
