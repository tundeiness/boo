/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { TextField, TextComment } from './TextField';
import { SubmitButton } from './ButtonCollections';
import { addComment } from '../redux/features/commentSlice';

const AddComment = () => {
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

  const handleAddComment = async () => {
    setValues({
      name: '',
      zodiac: '',
      mbti: '',
      enneagram: '',
      image: '',
      title: '',
      comments: '',
    });

    const addComment = {
      title: values.title,
      body: values.comments,
      name: values.name,
      zodiac: values.zodiac,
      mbti: values.mbti,
      enneagram: values.enneagram,
      image: values.avatarUrl,
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: '*/*',
      },
    };

    try {
      const res = await axios.post('http://localhost:3001/api/v1/posts/', addComment);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }

    navigate('/');
  };

  useEffect(() => {
    let mounted = true;
    //  getAllComments().then((items) => {
    //    if (mounted) {
    //      setComment(items);
    //    }
    //  });

    return () => {
      mounted = false;
    };
  }, []);

  const mutation = useMutation(() => axios({
    method: 'post',
    url: 'http://localhost:3001/api/v1/posts/',
    data: {
      title: values.title,
      body: values.comments,
      name: values.name,
      zodiac: values.zodiac,
      mbti: values.mbti,
      enneagram: values.enneagram,
      image: values.avatarUrl,
    },
  }),

  {
    onSuccess: () => {
      navigate('/');
    },
  });

  return (
    <form className="my-2 lg:mx-30 mx-4 rounded-3xl border border-gray-200 shadow-lg drop-shadow-lg">
      <div>
        <TextField
          label="Name"
          values={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'johnny' }}
        />
        <br />
        <TextField
          label="Image"
          values={values.image}
          onChange={(e) => setValues({ ...values, image: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'www.https://some links' }}
        />
        <br />
        <TextField
          label="Zodiac"
          values={values.zodiac}
          onChange={(e) => setValues({ ...values, zodiac: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Sagitaurus' }}
        />
        <br />
        <TextField
          label="MBTI"
          values={values.mbti}
          onChange={(e) => setValues({ ...values, mbti: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'INTA' }}
        />
        <br />
        <TextField
          label="Enneagram"
          values={values.enneagram}
          onChange={(e) => setValues({ ...values, enneagram: e.target.value })}
          inputProps={{ type: 'text', placeholder: '5 wing 6' }}
        />

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
      <SubmitButton onClick={() => mutation.mutate()} />
    </form>
  );
};

export default AddComment;
