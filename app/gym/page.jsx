import gymStyle from './Gym.module.css';
import Sesions from '../../components/gym/Sesions';

export default function Gym() {
  return (
    <div className={gymStyle.gymBody}>
      <Sesions />
    </div>
  );
}
