import { redirect } from 'next/navigation';

export default async function Budget() {
  redirect('/budget/wallets');
}
