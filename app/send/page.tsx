"use client"

export default function Page() {
  return (
    <div className='grid grid-rows-[1fr_auto] min-h-screen'>
      {/* <div className='bg-gray-200 p-4'>top (adjusts to content)</div> */}
      <div className='bg-gray-100 flex flex-col items-center justify-center gap-1'>

        <div>
          <img src="" alt="" width={25} height={25} className="rounded-full" />
          <div className="font-bold">Username</div>
        </div>

        <div className='space-y-2 text-center'>
          <div>USD</div>
          <input type='number' className='w-72' />
        </div>
      </div>
      <div className='bg-gray-200 p-4'>
        <button
          type='button'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-nowrap w-full'
        >
          Send
        </button>
      </div>
    </div>
  )
}
