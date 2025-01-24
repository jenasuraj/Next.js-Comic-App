import React from 'react'
import DisplayItems from '@/components/DisplayItems'
const page = () => {
  return (
    <div className="h-auto w-full text-amber-950 flex flex-col justify-center items-center select-none">
    <div className="text-2xl mt-10">Here's your feed</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <DisplayItems />
</div>
  </div>
  )
}

export default page
