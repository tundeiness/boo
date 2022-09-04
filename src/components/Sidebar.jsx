/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { HiOutlineSquares2X2 } from 'react-icons/hi';
import { IoGridOutline } from 'react-icons/io5';
import { BiChevronDown } from 'react-icons/bi';

const Sidebar = () => {
  const test = 0;
  const [status, setStatus] = useState(null);

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <aside className="w-96 border border-blue-400">
      <p className="text-lg font-semibold leading-9">Soulverse</p>
      <p className="text-xs mb-6">MBTI personality database</p>

      <div className="categories-container rounded-full flex items-center px-2 w-[150px] md:mx-16 mx-0 border border-red-500">
        <IoGridOutline size={14} />
        <input
          className="bg-transparent py-0.5 px-2 w-full focus:outline-none text-black"
          type="text"
          placeholder="Categories"
        />
        <BiChevronDown size={25} />
        <select value={status} onChange={changeStatus}>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="anime">anime</option>
          <option value="music">music</option>
          <option value="politics">politics</option>
          <option value="historians">historians</option>
          <option value="gaming">gaming</option>
          <option value="arts">arts</option>
          <option value="comic">comic</option>
          <option value="science">science</option>
          <option value="philosophy">philosophy</option>
          <option value="movies">Movies</option>
          <option value="television">television</option>
          <option value="literature">literature</option>
          <option value="business">Business</option>
          <option value="religion">religion</option>
          <option value="pop culture">pop culture</option>
          <option value="internet">internet</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
