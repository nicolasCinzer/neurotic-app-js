import walletsStyle from './css/WalletsList.module.css';

import Wallet from './Wallet';

export default function WalletsList({ wallets }) {
  return (
    <div className={walletsStyle.walletsBody}>
      <div className={walletsStyle.title}>Wallets</div>
      {wallets.map(({ name, total }) => (
        <Wallet
          title={name}
          money={total}
          key={name}
        />
      ))}
    </div>
  );
}
