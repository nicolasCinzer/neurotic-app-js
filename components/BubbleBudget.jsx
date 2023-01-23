import bubbleStyle from './BubbleBudget.module.css';
import { dm_sans } from './font';

export default function BubbleBudget() {
  return (
    <div className={dm_sans.variable}>
      <div className={bubbleStyle.currentBudget}>
        <div>Current Budget</div>
        <div className={bubbleStyle.budget}>100.000 COP</div>
      </div>
    </div>
  );
}
