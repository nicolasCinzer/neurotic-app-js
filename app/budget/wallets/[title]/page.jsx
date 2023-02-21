import BudgetBody from 'components/budget/page/BudgetBody';

const getBudgetList = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/budget').then(res => res.json());
};

export default async function Wallet({ params }) {
  const list = await getBudgetList();

  return (
    <>
      <BudgetBody
        budgetList={
          list.wallets.filter(({ name }) => {
            return name === params.title;
          })[0]
        }
      />
    </>
  );
}
