/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SubCards = ({ title, text }) => {
  const test = 0;
  return (
    <>
      <div className="w-23 h-23 lg:w-40 lg:h-40 rounded-xl shadow-lg drop-shadow-lg py-4 flex flex-col justify-between items-center align-middle border border-gray">
        <p>{title}</p>
        <p className="text-2xl text-viking font-semibold">{text}</p>
      </div>
    </>
  );
};

export default SubCards;
