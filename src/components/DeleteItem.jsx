'use client';

import React from 'react';
import useContent from '@/app/content';

const DeleteItem = ({ itemId }) => { // Fix prop name
  const { contentArray, setContentArray } = useContent();

  const deleteItem = (id) => {
    setContentArray((prevContentArray) => prevContentArray.filter((item) => item.id !== id));
  };

  return (
    <div
      className="h-7 w-60 flex justify-center items-center bg-red-600 text-white mt-5 cursor-pointer"
      onClick={() => deleteItem(itemId)}
    >
      Delete
    </div>
  );
};

export default DeleteItem;
