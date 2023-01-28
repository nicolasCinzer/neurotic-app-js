import BubbleBudget from 'components/budget/layout/BubbleBudget';
import SearchEngine from 'components/budget/layout/searchEngine';
import WalletsList from 'components/budget/layout/WalletsList';

import layoutStyle from './css/BudgetLayout.module.css';
import { dm_sans } from '../../components/font';
import Tags from 'components/budget/layout/Tags';
import Filters from 'components/budget/layout/Filters';

export default function BudgetLayout({ children }) {
  return (
    <>
      <div
        className={dm_sans.variable}
        style={{ padding: '32px', display: 'grid', gridTemplateRows: '1fr 8fr' }}
      >
        <div className={layoutStyle.budgetHeader}>
          <BubbleBudget />
          <SearchEngine />
          <div></div>
        </div>
        <div className={layoutStyle.budgetBody}>
          <WalletsList />
          <div className={layoutStyle.budgetList}>
            {children}
            <Tags />
            <Filters />
          </div>
        </div>
      </div>
    </>
  );
}
