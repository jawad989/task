import { User } from "../types";

type UserDetailsProps = {
  user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="border">
      <h2 className="font-bold">{user.name}</h2>
      <p>IBAN: {user.iban}</p>
      <p>Balance: ${user.balance.toFixed(2)}</p>
    </div>
  );
}
