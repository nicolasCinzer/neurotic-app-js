'use client';
import { useRouter } from 'next/navigation';
import walletStyle from './css/Wallet.module.css';

export default function Wallet({ title, money }) {
  const router = useRouter();

  return (
    <div
      className={walletStyle.walletCard}
      onClick={() => router.push(`/budget/wallets/${title}`)}
    >
      <div className={walletStyle.walletTitle}>{title}</div>
      <div className={walletStyle.walletMoney}>{money}</div>
    </div>
  );
}
