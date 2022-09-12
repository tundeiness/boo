/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SubCards = ({ title, text }) => {
  const test = 0;
  return (
    <>
      <div className="w-23 h-23 xl:w-40 xl:h-40 lg:w-32 lg:h-36 rounded-xl shadow-lg drop-shadow-lg py-4 flex flex-col justify-between items-center align-middle border border-gray">
        <p className="xl:w-[60%] lg:w-[70%] w-full mb-5 text-center">{title}</p>
        <p className="xl:text-2xl lg:text-xl text-md text-viking font-semibold text-center">
          {text}
        </p>
      </div>
    </>
  );
};

export default SubCards;
