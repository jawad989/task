"use client"
import { useState } from "react"
import UserDetails from "./components/UserDetails"
import { User } from "./types"
import Link from "next/link"

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
]

export default function Home() {
  const [users, setUsers] = useState(initialUsers)
  const [selectedUser, setSelectedUser] = useState<User>(users[0])

  return (
    <div className='p-2 md:p-6 space-y-4'>
      <h1 className='text-2xl font-bold'>Banking App</h1>

      <UserDetails user={selectedUser} />

      <div>
        <Link
          href='/transaction-history'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '
        >
          Show Transaction History
        </Link>
      </div>
    </div>
  )
}
