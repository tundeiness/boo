/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { TextField, TextComment } from './TextField';
import { SubmitButton, Mbti } from './ButtonCollections';
import { addComment } from '../redux/features/commentSlice';

const AddComment = ({ handleToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    zodiac: '',
    mbti: '',
    enneagram: '',
    image:
      'https://media.istockphoto.com/photos/head-and-shoulders-mans-silhouette-picture-id513727339?k=20&m=513727339&s=612x612&w=0&h=Bq2aFi5p2q-qq2EQx7Hlvn8j9JrqVPAdw8oh5gTGayk=',
    title: '',
    comments: '',
  });

  const [status, setStatus] = useState(null);
  const [gram, setGram] = useState(null);
  const [zodiac, setZodiac] = useState(null);

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  const changeEnneagram = (e) => {
    setGram(e.target.value);
  };

  const changeZodiac = (e) => {
    setZodiac(e.target.value);
  };

  const mutation = useMutation(() => axios({
    method: 'post',
    url: 'http://localhost:3001/api/v1/posts/',
    data: {
      title: values.title,
      body: values.comments,
      name: values.name,
      zodiac,
      mbti: status,
      enneagram: gram,
      image: values.avatarUrl,
    },
  }),

  {
    onSuccess: () => {
      navigate('/');
    },
  });

  return (
    <form className="flex flex-col lg:px-4 py-2 mb-4 mx-3 lg:mt-5 rounded-3xl border border-gray-200 shadow-xl drop-shadow-xl">
      <div>
        <TextField
          label="Name"
          values={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'johnny' }}
        />

        <div className="flex flex-row  w-full my-4">
          <div className="mbti-container rounded-full flex items-center px-2 w-[90px] lg:mx-4 border border-gray">
            <select
              value={status}
              onChange={changeStatus}
              placeholder="Categories"
              className="bg-transparent py-0.5 px-2 w-full focus:outline-none text-black text-sm"
            >
              <option value="" label="MBTI">
                MBTI
              </option>
              <option value="INFP">INFP</option>
              <option value="INFJ">INFJ</option>
              <option value="ESTJ">ESTJ</option>
              <option value="ESTP">ESTP</option>
              <option value="ISTJ">ISTJ</option>
              <option value="ISTP">ISTP</option>
              <option value="ESFJ">ESFJ</option>
              <option value="ESFP">ESFP</option>
              <option value="ISFJ">ISFJ</option>
              <option value="ISFP">ISFP</option>
              <option value="ENTJ">ENTJ</option>
              <option value="ENTP">ENTP</option>
              <option value="INTJ">INTJ</option>
              <option value="INTP">INTP</option>
              <option value="ENFP">ENFP</option>
              <option value="ENFJ">ENFJ</option>
            </select>
          </div>

          <div className="gram-container rounded-full flex items-center px-2 w-[135px] lg:mr-4 border border-gray">
            <select
              value={gram}
              onChange={changeEnneagram}
              placeholder="Enneagram"
              className="bg-transparent py-0.5 px-2 w-full focus:outline-none text-black"
            >
              <option value="" label="Enneagram">
                Enneagram
              </option>
              <option value="1w2">1w2</option>
              <option value="2w3">2w3</option>
              <option value="3w2">3w2</option>
              <option value="3w4">3w4</option>
              <option value="4w3">4w3</option>
              <option value="4w5">4w5</option>
              <option value="5w4">5w4</option>
              <option value="5w6">5w6</option>
              <option value="6w5">6w5</option>
              <option value="6w7">6w7</option>
              <option value="7w6">7w6</option>
              <option value="7w8">7w8</option>
              <option value="8w7">8w7</option>
              <option value="8w9">8w9</option>
              <option value="9w8">9w8</option>
              <option value="9w1">9w1</option>
            </select>
          </div>

          <div className="zodiac rounded-full flex items-center px-2 py-0.5 w-[105px] md:mx-0 mx-0">
            <select
              value={zodiac}
              onChange={changeZodiac}
              placeholder="Zodiac"
              className="bg-transparent py-0.5 px-2 w-full focus:outline-none text-white"
            >
              <option value="" label="Zodiac">
                Zodiac
              </option>
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option value="Gemini">Gemini</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Sagittaurus">Sagittaurus</option>
              <option value="Capricon">Capricon</option>
              <option value="Aquairus">Aquairus</option>
              <option value="Pisces">Pisces</option>
            </select>
          </div>
        </div>

        <TextField
          label="Title"
          values={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'lorem ipsum' }}
        />

        <TextComment
          label="Comment"
          values={values.comments}
          onChange={(e) => setValues({ ...values, comments: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'lorem ipsum' }}
        />
      </div>
      <SubmitButton onClick={() => { mutation.mutate(); handleToggle(); }} />
    </form>
  );
};

export default AddComment;
