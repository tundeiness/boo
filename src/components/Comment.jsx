/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MBTIBtn, ZodiacBtn, EnneagramBtn } from './ButtonCollections';
import James from '../Assets/static/elon.webp';
import AddComment from './AddComment';
// import { increment } from '../redux/features/likeSlice';

const COMMENTS_URL = 'http://localhost:3001/api/v1/posts';

const Comment = () => {
  const navigate = useNavigate();
  const params = useParams();
  const comments = useSelector((store) => store.comments);
  const [comment, setComment] = useState([]);

  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);
  const [singleUser, setSingleUser] = useState(null);
  const [votes, setVotes] = useState(null);

  const getAllComments = () => axios.get(COMMENTS_URL).then((response) => response.data);

  const handleVotes = async (id) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/v1/posts/${id}/likes`);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
    navigate('/');
  };

  useEffect(() => {
    let mounted = true;
    getAllComments().then((items) => {
      if (mounted) {
        setComment(items);
      }
    });

    return () => { (mounted = false); };
  }, []);

  const renderComments = () => comment?.data?.map((items) => (
    <div
      key={items.id}
      className="comment-container flex flex-col px-2 py-2 mb-4 mx-3 rounded-3xl border border-gray-200 shadow-lg drop-shadow-lg"
    >
      <div className="flex flex-row px-2 py-3">
        <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full mr-1 border-none outline-none">
          <img
            src={items.image ? items.image : James}
            alt={items.name ? '' : 'No Name'}
            className="img-comments w-20 h-20 rounded-full object-cover bg-no-repeat bg-cover bg-center border border-gray"
          />
        </div>
        <p className="inline-block mt-3">
          {items.name ? items.name : 'No Name'}
        </p>
      </div>
      <div className="bottom-matter flex flex-col">
        <p>{items.title}</p>
        <div className="py-1">
          <MBTIBtn text={items.mbti ? items.mbti : 'None'} />
          <EnneagramBtn text={items.enneagram ? items.enneagram : 'none'} />
          <ZodiacBtn text={items.zodiac ? items.zodiac : 'none'} />
        </div>
        <textarea className="my-3 p-3 backdrop-grayscale-0 lg:h-full h-screen" rows="6">
          {items.body}
        </textarea>
        <span className="flex flex-row">
          <span
            className="inline-block mr-1"
            type="button"
            onClick={() => {
              handleVotes(items.id);
            }}
            role="presentation"
          >
            <BsFillHeartFill className="my-auto cursor-pointer" />
          </span>
          <span className="inline-block text-xs text-black">
            {items.like_count}
          </span>
        </span>
      </div>
    </div>
  ));

  return (
    <>
      {/* <AddComment /> */}
      <div className="flex flex-col mx-1 px-1 py-1 my-5 rounded-2xl">
        {/* {comment.length ? (
        renderComments()
      ) : (
        <p className="text-center text-gray-700 font-semibold col-span-2">
          No Comments yet!!
        </p>
      )} */}
        {renderComments()}
      </div>
    </>
  );
};

export default Comment;
