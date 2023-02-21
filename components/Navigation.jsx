import Link from 'next/link';
import style from './Navigation.module.css';
import { dm_sans } from './font';

const links = [
  { label: 'Neurotic', route: '/' },
  {
    label: 'Gym',
    route: '/gym',
  },
  {
    label: 'Budget',
    route: '/budget/wallets',
  },
];

export default function Navigation() {
  return (
    <header className={style.header}>
      <nav className={dm_sans.variable}>
        <ul className={style.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
