/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';

export const TextField = ({
  label, inputProps, onChange, value,
}) => {
  const test = 0;
  return (
    <div className="flex flex-col text-gray-800">
      <label className="mb-2 text-base">{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const TextComment = ({ inputProps, onChange, value }) => {
  const test = 0;
  return (
    <div className="flex flex-col text-gray-800 drop-shadow-none shadow-none">
      {/* <label className="mb-2 text-base">{label}</label> */}
      <textarea
        className="py-2 px-3 border-2 outline-none mt-3 drop-shadow-none"
        {...inputProps}
        onChange={onChange}
        value={value}
        rows={5}
      />
    </div>
  );
};
