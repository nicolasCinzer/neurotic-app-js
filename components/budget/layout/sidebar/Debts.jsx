export default function Debts({ debts }) {
  console.log(debts);

  return (
    <div>
      Debts
      {Object.keys(debts).map(debtor => {
        console.log(debtor);
        return (
          <div>
            {debtor}
            {debts[debtor].debt}
            {debts[debtor].lastDate}
          </div>
        );
      })}
    </div>
  );
}
