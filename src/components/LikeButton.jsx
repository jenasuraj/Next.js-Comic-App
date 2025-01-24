'use client';

import React from 'react';
import useContent from '@/app/content';

const LikeButton = ({ newList }) => {
  const { contentArray, setContentArray } = useContent();

  const addLikedItems = (id) => {
    const isValid = contentArray.some((item) => item.id === id);

    if (!isValid) {
      setContentArray((prevArray) => [...prevArray, newList]);
    } else {
      alert('Already liked this content');
    }
  };

  return (
    <div
      className="bg-green-600 hover:bg-green-700 transition-all duration-200 h-10 w-48 flex justify-center 
      items-center text-white mt-5 rounded cursor-pointer"
      onClick={() => addLikedItems(newList.id)}
    >
      Like
    </div>
  );
};

export default LikeButton;
