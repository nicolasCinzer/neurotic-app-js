import budgetStyle from './css/BudgetPage.module.css';
import BudgetList from 'components/budget/page/BudgetList';

const sample = [
  { id: 1, title: 'Mercado', tag: 'Market', money: '5000 COP', date: '24/1/2023' },
  { id: 2, title: 'Proteina', tag: 'Gym', money: '5000 COP', date: '24/1/2023' },
  { id: 3, title: 'Ropa', tag: 'Clothes', money: '5000 COP', date: '24/1/2023' },
  { id: 4, title: 'Mercado', tag: 'Market', money: '5000 COP', date: '24/1/2023' },
  { id: 5, title: 'Proteina', tag: 'Gym', money: '5000 COP', date: '24/1/2023' },
  { id: 6, title: 'Ropa', tag: 'Clothes', money: '5000 COP', date: '24/1/2023' },
  { id: 7, title: 'Mercado', tag: 'Market', money: '5000 COP', date: '24/1/2023' },
  { id: 8, title: 'Proteina', tag: 'Gym', money: '5000 COP', date: '24/1/2023' },
  { id: 9, title: 'Ropa', tag: 'Clothes', money: '5000 COP', date: '24/1/2023' },
  { id: 10, title: 'Mercado', tag: 'Market', money: '5000 COP', date: '24/1/2023' },
  { id: 11, title: 'Proteina', tag: 'Gym', money: '5000 COP', date: '24/1/2023' },
  { id: 12, title: 'Ropa', tag: 'Clothes', money: '5000 COP', date: '24/1/2023' },
];

export default function Budget() {
  return (
    <>
      <BudgetList list={sample} />
    </>
  );
}
