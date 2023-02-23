import bubbleStyle from './css/BubbleBudget.module.css';

export default function BubbleBudget({ currentBudget }) {
  return (
    <div className={bubbleStyle.currentBudget}>
      <div>Current Budget</div>
      <div className={bubbleStyle.budget}>{currentBudget.total}</div>
    </div>
  );
}
