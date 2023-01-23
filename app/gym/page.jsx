import BubbleBudget from 'components/BubbleBudget';
import gymStyle from './Gym.module.css';


export default function Gym() {
  return (
    <div className={gymStyle.gymBody}>
      <BubbleBudget />
    </div>
  );
}