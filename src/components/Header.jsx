/* eslint-disable no-unused-vars */
import React from 'react';
import {
  GrFacebookOption,
  GrPinterest,
  GrYoutube,
  GrLinkedinOption,
} from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

const Header = () => {
  const test = 0;
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 border border-red-500">
      {/* <div className="flex items-center border border-green-500"> */}
      <ul className="flex flex-row justify-around border border-red-500">
        <li className="px-3">Home</li>
        <li className="px-3">Blog</li>
        <li className="px-3">Quizzes</li>
        <li className="px-3">Personalities</li>
      </ul>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Inter font-normal leading-4 px-2 border border-red-500">
        Boo
      </h1>
      <div
        // size={30}
        className="lg:hidden sm:flex flex-col justify-around px-1 py-1 border border-gray-400 w-7 h-7 cursor-pointer "
      >
        {/* <AiOutlineMenu size={30} /> */}
        <span className="bg-black" style={{ height: '1px' }} />
        <span className="bg-black" style={{ height: '1px' }} />
      </div>
      <div className="sm:hidden lg:flex flex-row justify-around border border-red-500">
        <span className="inline-block px-2 py-1">
          <GrFacebookOption size={20} />
        </span>
        <span className="inline-block px-2 py-1">
          <AiOutlineInstagram size={20} />
        </span>
        <span className="inline-block px-2 py-1">
          <AiOutlineTwitter size={20} />
        </span>
        <span className="inline-block px-2 py-1">
          <GrPinterest size={20} />
        </span>
        <span className="inline-block px-2 py-1">
          <GrYoutube size={20} />
        </span>
        <span className="inline-block px-2 py-1">
          <GrLinkedinOption />
        </span>
        <span className="inline-block px-2 py-1">
          <FaTiktok size={20} />
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
