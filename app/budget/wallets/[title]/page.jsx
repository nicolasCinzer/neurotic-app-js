import BudgetBody from 'components/budget/page/BudgetBody';

const getWallet = name => {
  return fetch(`https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/wallets?name=${name}`).then(res => res.json());
};

const getItems = async id => {
  return fetch(`https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/wallets/${id}/items`).then(res => res.json());
};

export default async function Wallet({ params }) {
  const wallet = await getWallet(params.title);
  const items = await getItems(wallet[0].id);

  return (
    <>
      <BudgetBody
        budgetList={items}
        walletId={params.title}
      />
    </>
  );
}
