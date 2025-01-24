

import React from 'react';
import Image from 'next/image'; // Don't forget to import the Image component.
import { ArrItems } from '@/components/ArrItems';
import LikeButton from '@/components/LikeButton';  


const Page = ({ params }) => {
  const data = params.slug; // Unwrap the promise to access params


  const newList = ArrItems.find(
    (item) => String(item.id).trim().toLowerCase() === data.trim().toLowerCase()
  );


  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-8 select-none">
      {newList ? (
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          {/* Image and Title Section */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <p className="text-2xl font-semibold mb-4 text-center">{newList.title}</p>
            {newList.image && newList.image.src ? (
              <Image
                src={newList.image.src}
                alt={newList.title}
                width={300}
                height={450}
                className="rounded-md shadow-md"
              />
            ) : (
              <p className="text-red-500">No image available</p>
            )}
           <LikeButton newList={newList} />
          </div>

          {/* Bio Section */}
          <div className="flex items-center justify-center w-full md:w-1/2 h-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-justify">{newList.bio}</p>
          </div>
        </div>
      ) : (
        <p className="text-xl text-red-500">No items found</p>
      )}
    </div>
  );
};

export default Page;
