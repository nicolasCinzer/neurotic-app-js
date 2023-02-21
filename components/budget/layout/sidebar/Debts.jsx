import debtsStyle from './css/Debts.module.css';
import { useRouter } from 'next/navigation';

export default function Debts({ debts }) {
  const router = useRouter();

  return (
    <div className={debtsStyle.debtBody}>
      Debts
      {Object.keys(debts).map(debtor => {
        return (
          <div
            className={debtsStyle.debtItem}
            onClick={() => router.push(`/budget/debts/${debtor}`)}
            key={debtor}
          >
            <div className={debtsStyle.debtTitle}>{debtor}</div>
            <div className={debtsStyle.debtMoney}>{debts[debtor].debt}</div>
            <div className={debtsStyle.debtDate}>{new Date(debts[debtor].lastDate * 1000).toLocaleDateString('en-US')}</div>
          </div>
        );
      })}
    </div>
  );
}
