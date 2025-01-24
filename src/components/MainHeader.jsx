import React from 'react'
import '../app/globals.css'
import Link from 'next/link'

const MainHeader = () => {
  return (
   <>
   <div className='h-[10vh] w-full  text-amber-950 flex justify-between items-center cursor-pointer'>
     <Link href="/">
     <div className='text-2xl font-bold ml-5'>
      BookMania
     </div>
     </Link>

     <div className='flex gap-5 mr-5'>
     <Link href="/Liked">
     <div>
        My List
      </div>
      </Link>
      <div>
        About
      </div>
     </div>
   </div>
   </>
  )
}

export default MainHeader
