/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoGridOutline } from 'react-icons/io5';
import { profiles } from './data/data';

const Sidebar = () => {
  const test = 0;
  const [status, setStatus] = useState(null);
  const [dats, setData] = useState(profiles);

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <aside className="lg:w-96 w-full px-4 my-2">
      <p className="text-lg font-semibold leading-9">Soulverse</p>
      <p className="text-xs mb-6">MBTI personality database</p>

      <div className="categories-container rounded-full flex items-center px-2 w-[150px] md:mx-0 mx-0">
        <IoGridOutline size={14} />
        <select
          value={status}
          onChange={changeStatus}
          placeholder="Categories"
          className="bg-transparent py-0.5 px-2 w-full focus:outline-none text-black"
        >
          <option value="" label="Categories">
            Categories
          </option>
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
