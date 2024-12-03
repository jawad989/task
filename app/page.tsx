"use client";
import { useState } from "react";
import UserDetails from "./components/UserDetails";
import TransactionForm from "./components/TransactionForm";
import AccountStatement from "./components/AccountStatement";
import { User } from "./types";
import { updateUserBalance, transferFunds } from "./services/userService";

const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    iban: "GB33BUKB20201555555555",
    balance: 1000,
    transactions: [],
  },
  {
    id: 2,
    name: "Jane Smith",
    iban: "DE89370400440532013000",
    balance: 500,
    transactions: [],
  },
];

export default function Home() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User>(users[0]);

  const handleDeposit = (amount: number) => {
    if (amount <= 0) return alert("Enter a valid amount.");
    const updatedUsers = updateUserBalance(users, selectedUser.id, amount);
    setUsers(updatedUsers);
    setSelectedUser(updatedUsers.find((user) => user.id === selectedUser.id) as User);
  };

  const handleWithdraw = (amount: number) => {
    if (amount <= 0 || amount > selectedUser.balance)
      return alert("Enter a valid amount.");
    const updatedUsers = updateUserBalance(users, selectedUser.id, -amount);
    setUsers(updatedUsers);
    setSelectedUser(updatedUsers.find((user) => user.id === selectedUser.id) as User);
  };

  const handleTransfer = (recipientIBAN: string, amount: number) => {
    if (amount <= 0) return alert("Enter a valid amount.");
    const { updatedUsers, error } = transferFunds(
      users,
      selectedUser.id,
      recipientIBAN,
      amount
    );
    if (error) return alert(error);
    setUsers(updatedUsers);
    setSelectedUser(updatedUsers.find((user) => user.id === selectedUser.id) as User);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Banking App</h1>

      <UserDetails user={selectedUser} />

      <TransactionForm
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onTransfer={handleTransfer}
      />

      <AccountStatement transactions={selectedUser.transactions} />
    </div>
  );
}
