import { useState, ChangeEvent } from "react";

type TransactionFormProps = {
  onDeposit: (amount: number) => void;
  onWithdraw: (amount: number) => void;
  onTransfer: (iban: string, amount: number) => void;
};

export default function TransactionForm({
  onDeposit,
  onWithdraw,
  onTransfer,
}: TransactionFormProps) {
  const [amount, setAmount] = useState(0);
  const [iban, setIban] = useState("");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value) || 0);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="border rounded p-1"
        />
      </div>

      <button onClick={() => onDeposit(amount)} className="bg-green-500 text-white p-2">
        Deposit
      </button>
      <button onClick={() => onWithdraw(amount)} className="bg-red-500 text-white p-2">
        Withdraw
      </button>

      <div className="space-y-2">
        <label>Recipient IBAN:</label>
        <input
          type="text"
          value={iban}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setIban(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <button
        onClick={() => onTransfer(iban, amount)}
        className="bg-blue-500 text-white p-2"
      >
        Transfer
      </button>
    </div>
  );
}
