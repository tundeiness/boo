/* eslint-disable no-unused-vars */
import React from 'react';
// import { HiOutlineSquares2X2 } from 'react-icons/hi';
import { IoGridOutline } from 'react-icons/io5';

const Sidebar = () => {
  const test = 0;
  return (
    <aside className="w-96 border border-blue-400">
      <p className="text-lg font-semibold leading-9">Soulverse</p>
      <p className="text-xs mb-6">MBTI personality database</p>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[150px] mx-16 border border-red-500">
        <IoGridOutline size={14} />
        <input
          className="bg-transparent py-0.5 px-2 w-full focus:outline-none"
          type="text"
          placeholder="categories"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
