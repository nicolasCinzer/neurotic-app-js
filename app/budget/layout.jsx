import BubbleBudget from 'components/budget/layout/BubbleBudget';
import SearchEngine from 'components/budget/layout/searchEngine';

import layoutStyle from './css/BudgetLayout.module.css';
import { dm_sans } from '../../components/font';

export default function BudgetLayout({ children }) {
  return (
    <>
      <div
        className={dm_sans.variable}
        style={{ padding: '32px' }}
      >
        <div className={layoutStyle.budgetHeader}>
          <BubbleBudget />
          <SearchEngine />
          <div></div>
        </div>
        {children}
      </div>
    </>
  );
}
