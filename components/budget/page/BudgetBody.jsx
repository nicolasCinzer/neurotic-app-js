'use client';
import { useEffect, useState } from 'react';

import budgetStyle from './css/BudgetBody.module.css';

import SearchEngine from './SearchEngine';
import BudgetList from './BudgetList';
import Tags from './Tags';
import CRUD from './CRUD';

export default function Budget({ budgetList }) {
  const [currentBudgetList, setCurrentBudgetList] = useState(budgetList);
  const [searchKey, setSearchKey] = useState({});

  useEffect(() => {
    let { key, filter } = searchKey;

    let modifiedList = budgetList.filter(({ title, tag, money, date }) => {
      if (!key) return true;
      if (title === key && filter === 'Title') return true;
      if (tag === key && filter === 'Tags') return true;
      if (money === key && filter === 'Cost') return true;
      if (date === key && filter === 'Date') return true;
    });

    setCurrentBudgetList(modifiedList);
  }, [searchKey]);

  return (
    <div className={budgetStyle.budgetBody}>
      <SearchEngine setSearchKey={setSearchKey} />
      <BudgetList list={currentBudgetList} />
      <Tags />
      <CRUD />
    </div>
  );
}
