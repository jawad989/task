export type Transaction = {
  date: string;
  amount: number;
  balance: number;
};

export type User = {
  id: number;
  name: string;
  iban: string;
  balance: number;
  transactions: Transaction[];
};
