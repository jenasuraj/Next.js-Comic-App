import React from 'react'
import { ArrItems } from './ArrItems';
import Image from 'next/image';
import Link from 'next/link';
const DisplayItems = () => {
  return (
    <>
     {ArrItems.map((item) => {
            return (
                <Link href={`/AllItems/${item.id}`}>
              <div key={item.id} className='flex flex-col justify-center items-center cursor-pointer'>
                <p>{item.title}</p>
                {item.image && item.image !== "" ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300} // Adjust width as per your design
                    height={450} // Adjust height as per your design
                    layout="intrinsic" // This keeps the aspect ratio intact
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              </Link>
            );
          })}
    </>
  )
}

export default DisplayItems
