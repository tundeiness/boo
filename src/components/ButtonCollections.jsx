/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { Navigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    <>
      <span className="bg-viking rounded-full text-sm font-semibold text-white px-4 py-2 uppercase">
        {text}
      </span>
    </>
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
      <span className="bg-viking rounded-full text-xs text-black px-2 py-0.5 mr-1 shadow-lg">
        {text}
      </span>
    </>
  );
};

const AuthButton = ({
  buttonText, loading, condition,
}) => {
  const test = 0;
  return (
    <button
      className="sign-in-button w-full block bg-authBtn text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none"
      type={condition ? 'button' : 'submit'}
    >
      {buttonText}
    </button>
  );
};

export const BackToList = ({ text, onClick, to }) => {
  const test = 0;
  return (
    <div className="inline-block px-1 mb-3">
      <Link
        className="flex flex-row items-center justify-start bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 pl-2 pr-3 rounded-md font-medium text-base"
        to={to}
        onClick={onClick}
      >
        <BiChevronLeft />
        {' '}
        {text}
      </Link>
    </div>
  );
};

export const ActiveBtn = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-activeBtn px-3 py-1 rounded-full text-white"
        type="button"
      >
        Active
      </button>
    </>
  );
};

export const InActiveBtn = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-full text-white"
        type="button"
      >
        Inactive
      </button>
    </>
  );
};

export const Search = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Search
      </button>
    </>
  );
};

export const Export = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Export
      </button>
    </>
  );
};

export const GetData = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-liteBlue px-3 py-2.5 rounded-md text-white uppercase w-full"
        type="button"
      >
        Get data
      </button>
    </>
  );
};

export const GoButton = ({ onClick }) => {
  const test = 0;
  return (
    <>
      <button
        className="bg-buttonTwo px-4 py-3 rounded-md text-white font-medium text-sm"
        type="button"
        onClick={onClick}
      >
        Go
      </button>
    </>
  );
};

export const FilterButton = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-liteBlue px-5 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Filter
      </button>
    </>
  );
};

export const SearchButton = ({ onClick }) => {
  const test = 0;
  return (
    <>
      <button
        className="bg-buttonTwo px-4 py-3 rounded-md text-white font-medium text-sm"
        type="button"
        onClick={onClick}
      >
        Search
      </button>
    </>
  );
};

export const SearchButtonUser = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-headingBg px-5 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Search
      </button>
    </>
  );
};

export const AddUserButton = ({ to }) => {
  const test = 0;
  return (
    <>
      <Link
        to={to}
        className="flex items-center bg-buttonTwo text-white hover:bg-purple-500 py-3 px-5 my-2.5 rounded-md text-sm w-auto"
      >
        <BiPlus className="inline-block mr-2" />
        <span>Add New User</span>
      </Link>
    </>
  );
};

export const SearchButtonUtilization = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-buttonTwo mr-3 px-14 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Search
      </button>
    </>
  );
};

export const ExportButton = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-headingBg ml-3 px-14 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Export
      </button>
    </>
  );
};
AuthButton.propTypes = {
  // buttonType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
