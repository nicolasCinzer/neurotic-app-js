'use client';
import { useState, useEffect } from 'react';

import sidebarStyle from './css/Sidebar.module.css';

import BubbleBudget from './BubbleBudget';
import WalletsList from './WalletsList';
import Debts from './Debts';

export default function Sidebar({ debts, wallets, currentBudg }) {
  const [currentBudget, setCurrentBudget] = useState('0');

  useEffect(() => {
    setCurrentBudget(currentBudg);
  }, []);

  return (
    <div className={sidebarStyle.sidebarBody}>
      <BubbleBudget currentBudget={currentBudget} />
      <WalletsList wallets={wallets} />
      <Debts debts={debts} />
    </div>
  );
}
