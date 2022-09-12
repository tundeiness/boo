/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
// import { useStateContext } from '../contexts/ProviderContext';

export const SubmitButton = ({ onClick }) => {
  const test = 0;

  // const { setGetProductByCode, setGetActiveProduct, setGetProductCode } = useStateContext();
  return (
    <div className="flex justify-end lg:mb-3 lg:mr-3">
      <span
        className="font-medium text-sm text-blue-500 cursor-pointer"
        type="button"
        onClick={() => { onClick(); }}
        role="presentation"
      >
        <IoMdSend size={20} />
      </span>
    </div>
  );
};

export const SectorBtn = ({ sector }) => {
  const test = 0;
  return (
    <>
      <span className="bg-viking rounded-full text-xs text-black px-2 py-0.5 mr-1 shadow-lg">
        {sector}
      </span>
    </>
  );
};

export const CommentBtn = ({ text, onClick }) => {
  const test = 0;
  return (
  // <Link to="/add-comment">
    <span
      className="bg-viking rounded-full text-sm font-semibold text-white px-4 py-2 uppercase cursor-pointer"
      onClick={onClick}
      role="presentation"
    >
      {text}
    </span>
  // </Link>
  );
};

export const BestBtn = ({ text, onClick }) => {
  const test = 0;
  return (
    <>
      <span
        className="best bg-viking rounded-full text-sm font-semibold text-white px-3 py-1.5 mr-2 outline outline-viking"
        type="button"
        onClick={onClick}
        role="presentation"
      >
        {text}
      </span>
    </>
  );
};

export const RecentBtn = ({ text }) => {
  const test = 0;
  return (
    <>
      <span className="bg-white rounded-full text-sm font-semibold text-black px-3 py-1.5 outline outline-gray-200" type="button">
        {text}
      </span>
    </>
  );
};

export const ZodiacBtn = ({ text }) => {
  const test = 0;
  return (
    <>
      <span className="zodiac bg-viking rounded-full text-sm text-white px-4 py-2 mr-1 capitalize">
        {text}
      </span>
    </>
  );
};

export const MBTIBtn = ({ text }) => {
  const test = 0;
  return (
    <>
      <span className="bg-viking rounded-full text-sm text-black px-4 py-2 mr-1 uppercase">
        {text}
      </span>
    </>
  );
};

export const EnneagramBtn = ({ text }) => {
  const test = 0;
  return (
    <>
      <span className="bg-viking rounded-2xl text-sm text-black px-4 py-2 mr-1 shadow-lg">
        {text}
      </span>
    </>
  );
};
