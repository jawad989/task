"use client";

export default function Page() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mt-4 mb-4">Account Statement</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-400 w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Transactions */}
            <tr>
              <td className="border border-gray-300 p-2">2024-12-01</td>
              <td className="border border-gray-300 p-2 text-green-500">+$500.00</td>
              <td className="border border-gray-300 p-2">$1,500.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2024-11-30</td>
              <td className="border border-gray-300 p-2 text-red-500">-$100.00</td>
              <td className="border border-gray-300 p-2">$1,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
