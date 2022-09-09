/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SubmitButton = ({ onClick }) => {
  const test = 0;
  return (
    <>
      <button
        className="bg-viking ml-3 px-8 py-2 lg:my-3 my-3 rounded-md text-black font-medium text-sm"
        type="button"
        onClick={onClick}
      >
        Submit
      </button>
    </>
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

export const CommentBtn = ({ text }) => {
  const test = 0;
  return (
    <Link to="/add-comment">
      <span className="bg-viking rounded-full text-sm font-semibold text-white px-4 py-2 uppercase">
        {text}
      </span>
    </Link>
  );
};

export const BestBtn = ({ text }) => {
  const test = 0;
  return (
    <>
      <span className="best bg-viking rounded-full text-sm font-semibold text-white px-3 py-1.5 mr-2 outline outline-viking" type="button">
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
      <span className="bg-viking rounded-full text-sm text-black px-2 py-2 mr-1 shadow-lg">
        {text}
      </span>
    </>
  );
};
