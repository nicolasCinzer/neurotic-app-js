import walletsStyle from './css/WalletsList.module.css';

import Wallet from './Wallet';

export default function WalletsList() {
  return (
    <div className={walletsStyle.walletsBody}>
      <div className={walletsStyle.title}>Wallets</div>
      <Wallet
        title={'Cash'}
        money={'200.000 COP'}
      />
      <Wallet
        title={'Cash'}
        money={'200.000 COP'}
      />
      <Wallet
        title={'Cash'}
        money={'200.000 COP'}
      />
      <Wallet
        title={'Cash'}
        money={'200.000 COP'}
      />
    </div>
  );
}
