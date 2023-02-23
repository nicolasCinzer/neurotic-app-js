import Sidebar from 'components/budget/layout/sidebar/Sidebar';
import { dm_sans } from '../../components/font';

const getWallets = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/wallets').then(res => res.json());
};

const getDebtors = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/debtors').then(res => res.json());
};

const getTotalBudget = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/budget', { next: { revalidate: 30 } }).then(res => res.json());
};

export default async function BudgetLayout({ children }) {
  const wallets = await getWallets();
  const debtors = await getDebtors();
  const totalBudget = await getTotalBudget();

  return (
    <>
      <div
        className={dm_sans.variable}
        style={{ padding: '32px', display: 'grid', gridTemplateColumns: '2fr 10fr', gap: '20px' }}
      >
        <Sidebar
          debts={debtors}
          wallets={wallets}
          currentBudg={totalBudget[0]}
        />
        {children}
      </div>
    </>
  );
}
