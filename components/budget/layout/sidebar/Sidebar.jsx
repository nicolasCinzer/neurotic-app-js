'use client';
import { useState } from 'react';

import sidebarStyle from './css/Sidebar.module.css';

import BubbleBudget from './BubbleBudget';
import WalletsList from './WalletsList';
import Debts from './Debts';

export default function Sidebar({debts, wallets, currentBudg}) {
  const [currentBudget, setCurrentBudget] = useState('0');

  return (
    <div className={sidebarStyle.sidebarBody}>
      <BubbleBudget currentBudget={currentBudget} />
      <WalletsList />
      <Debts />
    </div>
  );
}
