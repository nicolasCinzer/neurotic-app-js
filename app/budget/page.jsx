import budgetStyle from './css/BudgetPage.module.css';
import BudgetList from 'components/budget/page/BudgetList';

export default function Budget() {
  return (
    <div className={budgetStyle.budgetBody}>
      <BudgetList />
    </div>
  );
}
