import Link from "next/link"
import { User } from "../types"

type UserDetailsProps = {
  user: User
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className='border p-4 space-y-2 rounded-lg w-full sm:w-3/4 md:w-1/4 bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg'>
      <div>
        <h2 className='font-bold'>{user.name}</h2>
        {/* <p>IBAN: {user.iban}</p> */}
        <p>Balance: ${user.balance.toFixed(2)}</p>
      </div>

      <div className='flex gap-2'>
        <Link
          type='button'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-nowrap'
          href="/deposit"
        >
          Add Money
        </Link>
        <Link
          type='button'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-nowrap'
          href="/send"
        >
          Send Money
        </Link>
      </div>
    </div>
  )
}
