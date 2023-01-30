import walletStyle from './css/Wallet.module.css';

export default function Wallet({ title, money }) {
  return (
    <div className={walletStyle.walletCard}>
      <div className={walletStyle.walletTitle}>{title}</div>
      <div className={walletStyle.walletMoney}>{money}</div>
    </div>
  );
}
