import { Transaction } from "../types";

type AccountStatementProps = {
  transactions: Transaction[];
};

export default function AccountStatement({ transactions }: AccountStatementProps) {
  return (
    <div>
      <h2 className="font-bold mt-4">Account Statement</h2>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{transaction.date}</td>
              <td
                className={`border border-gray-300 p-2 ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount < 0 ? "" : "+"}${Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td className="border border-gray-300 p-2">
                ${transaction.balance.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
