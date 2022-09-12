/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  SectorBtn, CommentBtn, BestBtn, RecentBtn,
} from './components/ButtonCollections';
import SubCards from './components/SubCards';
import Comments from './components/Comment';
import { profiles } from './components/data/data';
import UserFilter from './components/UserFilter';
import AddComment from './components/AddComment';

const BEST_COMMENTS_URL = 'http://localhost:3001/api/v1/posts?best';
export const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(profiles);
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const filterPersonality = (category) => {
    setUser(profiles.filter((item) => item.category === category));
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const handleBest = async () => {
  //   try {
  //     const res = await axios.post(
  //       'http://localhost:3001/api/v1/posts',
  //     );
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  const getBestComments = () => axios.get(BEST_COMMENTS_URL).then((response) => response.data);

  useEffect(() => {
    let mounted = true;
    getBestComments().then((items) => {
      if (mounted) {
        setData(items);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <div className="max-w-[1640px] flex md:flex-row flex-col md:px-10">
          <Sidebar />
          <main className="flex flex-col w-screen">
            <UserFilter />
            {/* comment section */}
            <div className="flex flex-col px-4">
              <div className="flex flex-row justify-between my-3">
                <p className="text-lg font-bold leading-7">Comments</p>
                <CommentBtn text="Vote/Comment" onClick={() => handleToggle()} />
              </div>
              <div className="max-w-[390px]">
                <ul className="flex flex-row text-sm">
                  <li
                    onClick={() => setUser(profiles)}
                    className="pr-3"
                    role="presentation"
                  >
                    All
                  </li>
                  <li
                    onClick={() => filterPersonality('MBTI')}
                    className="pr-3"
                    role="presentation"
                  >
                    MBTI
                  </li>
                  <li
                    onClick={() => filterPersonality('Enneagram')}
                    className="pr-3"
                    role="presentation"
                  >
                    Enneagram
                  </li>
                  <li
                    onClick={() => filterPersonality('Zodiac')}
                    className="pr-3"
                    role="presentation"
                  >
                    Zodiac
                  </li>
                </ul>
              </div>
              <div className="flex flex-row mt-4">
                <BestBtn text="best" />
                <RecentBtn text="recent" />
              </div>
            </div>
            {/* <Routes>
              <Route path="/add-comment" element={<AddComment />} />
              <Route path="/" element={<Comments />} />
            </Routes> */}
            {toggle ? <AddComment /> : ''}
            <Comments />
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
