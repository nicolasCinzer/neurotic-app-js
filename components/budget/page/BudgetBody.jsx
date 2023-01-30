'use client';
import { useState } from 'react';

import budgetStyle from './css/BudgetBody.module.css';

import SearchEngine from './SearchEngine';
import BudgetList from './BudgetList';
import Tags from './Tags';
import CRUD from './CRUD';

export default function Budget({ budgetList }) {
  const [currentBudgetList, setCurrentBudgetList] = useState(budgetList);
  const [searchKey, setSearchKey] = useState({});

  return (
    <div className={budgetStyle.budgetBody}>
      <SearchEngine setSearchKey={setSearchKey} />
      <BudgetList list={currentBudgetList} />
      <Tags />
      <CRUD />
    </div>
  );
}
