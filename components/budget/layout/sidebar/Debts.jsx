import debtsStyle from './css/Debts.module.css';
import { useRouter } from 'next/navigation';

export default function Debts({ debts }) {
  const router = useRouter();

  return (
    <div className={debtsStyle.debtBody}>
      Debts
      {debts.map(debtor => {
        return (
          <div
            className={debtsStyle.debtItem}
            onClick={() => router.push(`/budget/debts/${debtor.name}`)}
            key={debtor.id}
          >
            <div className={debtsStyle.debtTitle}>{debtor.name}</div>
            <div className={debtsStyle.debtMoney}>{debtor.debt}</div>
            <div className={debtsStyle.debtDate}>{new Date(debtor.lastDate * 1000).toLocaleDateString('en-US')}</div>
          </div>
        );
      })}
    </div>
  );
}
