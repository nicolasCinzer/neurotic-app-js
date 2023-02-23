import { redirect } from 'next/navigation';

const getFirstWallet = () => {
  return fetch('https://my-json-server.typicode.com/nicolasCinzer/neurotic-fake-api/wallets').then(res => res.json());
};

export default async function Wallets() {
  const firstWallet = await getFirstWallet();

  redirect(`budget/wallets/${firstWallet[0].name}`);
}
