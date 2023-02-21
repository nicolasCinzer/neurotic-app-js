import { redirect } from 'next/navigation';

const getBudgetList = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/budget').then(res => res.json());
};

export default async function Wallets() {
  const budgetList = await getBudgetList();

  redirect(`budget/wallets/${budgetList.wallets[0].name}`);
}
