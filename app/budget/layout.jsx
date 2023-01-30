import layoutStyle from './css/BudgetLayout.module.css';
import Sidebar from 'components/budget/layout/sidebar/Sidebar';

import { dm_sans } from '../../components/font';

export default function BudgetLayout({ children }) {
  return (
    <>
      <div
        className={dm_sans.variable}
        style={{ padding: '32px', display: 'grid', gridTemplateColumns: '2fr 10fr', gap: '20px' }}
      >
        <Sidebar />
        {children}
      </div>
    </>
  );
}
