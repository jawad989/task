import { User } from "../types";

// Update user balance and add a transaction
export const updateUserBalance = (
  users: User[],
  userId: number,
  amount: number
): User[] => {
  return users.map((user) =>
    user.id === userId
      ? {
          ...user,
          balance: user.balance + amount,
          transactions: [
            {
              date: new Date().toISOString().split("T")[0],
              amount,
              balance: user.balance + amount,
            },
            ...user.transactions,
          ],
        }
      : user
  );
};

// Transfer funds between users
export const transferFunds = (
  users: User[],
  senderId: number,
  recipientIBAN: string,
  amount: number
): { updatedUsers: User[]; error?: string } => {
  const sender = users.find((user) => user.id === senderId);
  const recipient = users.find((user) => user.iban === recipientIBAN);

  if (!sender) return { updatedUsers: users, error: "Sender not found." };
  if (!recipient) return { updatedUsers: users, error: "Recipient not found." };
  if (sender.balance < amount)
    return { updatedUsers: users, error: "Insufficient balance." };

  const updatedUsers = users.map((user) => {
    if (user.id === senderId) {
      return {
        ...user,
        balance: user.balance - amount,
        transactions: [
          {
            date: new Date().toISOString().split("T")[0],
            amount: -amount,
            balance: user.balance - amount,
          },
          ...user.transactions,
        ],
      };
    }
    if (user.id === recipient.id) {
      return {
        ...user,
        balance: user.balance + amount,
        transactions: [
          {
            date: new Date().toISOString().split("T")[0],
            amount,
            balance: user.balance + amount,
          },
          ...user.transactions,
        ],
      };
    }
    return user;
  });

  return { updatedUsers };
};
