/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { queryClient } from '../App';

const COMMENTS_URL = 'http://localhost:3001/api/v1/posts';

const Prefetch = () => {
  const test = 0;
  // useEffect(() => {
  //   queryClient.prefetchQuery('allPosts', () => axios.get(COMMENTS_URL));
  // }, []);

  useEffect(() => {
    queryClient.prefetchQuery('allPosts', () => axios.get(COMMENTS_URL));
  }, []);
  return (
    <div>prefetch</div>
  );
};

export default Prefetch;
