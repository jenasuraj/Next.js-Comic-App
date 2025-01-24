'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeleteItem from '@/components/DeleteItem';
import useContent from '@/app/content';

const Page = () => {
  const { contentArray } = useContent(); // Fetch contentArray from useContent

  return (
    <div className="flex flex-col items-center gap-8">
      {contentArray.length == 0 ? (
        <p className='text-3xl text-red-700 mt-28'>No data</p>
      ) : (
        contentArray.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-5">
            {/* Link to Item Details */}
            <Link href={`/AllItems/${item.id}`} className="cursor-pointer">
              <div className="flex flex-col items-center">
                <p>{item.title}</p>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={450}
                    layout="intrinsic"
                    className="rounded-md"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </Link>

            {/* Delete Button */}
            <DeleteItem itemId={item.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
