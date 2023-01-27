import bubbleStyle from './css/BubbleBudget.module.css';
import { dm_sans } from '../../font';

const fetching = () => {
  return fetch(url).then(res => res.json());
};

export default function BubbleBudget() {
  return (
    <div className={bubbleStyle.currentBudget}>
      <div>Current Budget</div>
      <div className={bubbleStyle.budget}>100.000.000 COP</div>
    </div>
  );
}
