import { useRouter } from 'next/router'
import React from 'react'

function BackButton() {
    const router = useRouter()
    const query = router.query
    const queryKeys = Object.keys(query)
    console.log(queryKeys[0])
  return (
    <div onClick={()=>router.push({
      pathname:`${queryKeys[0]}`
    })} className='shadow-2xl z-10 fixed bottom-[5rem] left-20 w-16 h-16 bg-sky-700 rounded-full hover:translate-y-3 ease-in-out duration-300 cursor-pointer'>
        <div className='w-full h-full flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 12.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12"/></svg>
        </div>
    </div>
  )
}

export default BackButton