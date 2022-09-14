import React from 'react'
import Link from 'next/link'
function HomeButton () {
  return (
    <Link href='/'>
      <div className='shadow-2xl z-10 fixed bottom-20 right-20 w-16 h-16 bg-sky-700 rounded-full hover:translate-y-3 ease-in-out duration-300 cursor-pointer'>
        <div className='w-full h-full flex items-center justify-center'>
          <svg width='32' height='32' viewBox='0 0 24 24'>
            <path
              fill='#ffffff'
              d='M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44ZM10 20v-6h4v6Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15l7 7.19Z'
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default HomeButton
