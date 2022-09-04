/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  GrFacebookOption,
  GrPinterest,
  GrYoutube,
  GrLinkedinOption,
} from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center px-10 py-6 border border-red-500">
      {/* <div className="flex items-center border border-green-500"> */}
      <ul className="hidden md:flex flex-row justify-around border border-red-500">
        <li className="px-3">Home</li>
        <li className="px-3">Blog</li>
        <li className="px-3">Quizzes</li>
        <li className="px-3">Personalities</li>
      </ul>
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-Inter font-normal leading-9 px-2 border border-red-500">
        Boo
      </h1>
      <div
        // size={30}
        className="md:hidden flex flex-col justify-around px-1 py-1 w-10 h-10 cursor-pointer "
        onClick={() => setNav(!nav)}
        role="presentation"
      >
        <span className="span-one bg-black" />
        <span className="span-one bg-black" />
      </div>
      <div className="hidden md:flex flex-row justify-around border border-red-500">
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
      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0" />
      ) : (
        ''
      )}

      {/* side drawer */}
      <div
        className={
          nav
            ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <div
          // size={30}
          className="flex flex-col justify-around px-1 py-1 border border-gray-400 w-7 h-7 cursor-pointer absolute top-4 right-4"
          onClick={() => setNav(!nav)}
          role="presentation"
        >
          {/* <AiOutlineMenu size={30} /> */}
          <span
            className="bg-black rotate-45 relative top-1"
            style={{ height: '1px' }}
          />
          <span
            className="bg-black -rotate-45 relative bottom-1"
            style={{ height: '1px' }}
          />
        </div>
        <ul className="flex flex-col mt-12 border border-red-500">
          <li className="px-3">Home</li>
          <li className="px-3">Blog</li>
          <li className="px-3">Quizzes</li>
          <li className="px-3">Personalities</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
