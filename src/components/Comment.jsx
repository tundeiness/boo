/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { MBTIBtn, ZodiacBtn, EnneagramBtn } from './ButtonCollections';

const Comment = () => {
  const test = 0;
  return (
    <div className=" flex flex-col mx-1 px-1 py-1 my-1 border border-gray-400 rounded-2xl shadow-lg drop-shadow-lg">
      <div className="flex flex-col px-2 border border-red-500">
        <div className="flex flex-row px-2 py-3 border border-red-500">
          <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full mr-1 border border-blue-500">
            <img src="./" alt="james Bond" />
          </div>
          <p className="inline-block mt-3 ">James</p>
        </div>
        <div className="bottom-matter flex flex-col">
          <p>Some Tile for the Header</p>
          <div className="py-1">
            <MBTIBtn text="INTP" />
            <EnneagramBtn text="some" />
            <ZodiacBtn text="Cancer" />
          </div>
          <p>
            Voluptate excepteur laborum eiusmod qui culpa ad ipsum veniam ea
            incididunt fugiat incididunt. In sunt commodo nulla consectetur quis
            non fugiat exercitation laborum. Irure adipisicing deserunt minim
            eiusmod ad ad et est enim. Aliqua veniam amet laboris mollit et anim
            tempor exercitation exercitation tempor sint officia sunt. Aliqua
            veniam amet laboris mollit et anim tempor exercitation exercitation
            tempor sint officia sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
