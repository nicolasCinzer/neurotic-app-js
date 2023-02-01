import layoutStyle from './css/BudgetLayout.module.css';
import Sidebar from 'components/budget/layout/sidebar/Sidebar';

import { dm_sans } from '../../components/font';

const getBudgetGeneralInfo = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/budget').then(res => res.json());
};

export default async function BudgetLayout({ children }) {
  const budgetInfo = await getBudgetGeneralInfo();

  return (
    <>
      <div
        className={dm_sans.variable}
        style={{ padding: '32px', display: 'grid', gridTemplateColumns: '2fr 10fr', gap: '20px' }}
      >
        <Sidebar
          debts={budgetInfo.debtors}
          wallets={budgetInfo.wallets}
          currentBudg={budgetInfo.totalBudget}
        />
        {children}
      </div>
    </>
  );
}
