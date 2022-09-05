/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import { MBTIBtn, ZodiacBtn, EnneagramBtn } from './ButtonCollections';
import James from '../Assets/static/elon.webp';

const Comment = () => {
  const test = 0;
  console.log(useSelector((store) => {
    console.log(store);
  }));
  const likes = useSelector((state) => state.comment.likes);
  const comments = useSelector((state) => state.comment.commentsLog);
  console.log(likes);

  return (
    <div className=" flex flex-col mx-1 px-1 py-1 my-1 border border-gray-400 rounded-2xl shadow-lg drop-shadow-lg">
      <div className="flex flex-col px-2 border border-red-500">
        <div className="flex flex-row px-2 py-3 border border-red-500">
          <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full mr-1 border border-blue-500">
            <img
              src={James}
              alt="james Bond"
              className="w-20 h-20 rounded-full object-cover"
            />
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
          <textarea className="my-3" rows="9">
            Voluptate excepteur laborum eiusmod qui culpa ad ipsum veniam ea
            incididunt fugiat incididunt. In sunt commodo nulla consectetur quis
            non fugiat exercitation laborum. Irure adipisicing deserunt minim
            eiusmod ad ad et est enim. Aliqua veniam amet laboris mollit et anim
            tempor exercitation exercitation tempor sint officia sunt. Aliqua
            veniam amet laboris mollit et anim tempor exercitation exercitation
            tempor sint officia sunt.
          </textarea>
          <span className="flex flex-row border border-red-500">
            <span className="inline-block mr-1" type="button">
              <BsFillHeartFill className="my-auto" />
            </span>
            <span className="inline-block text-xs text-black">{likes}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
