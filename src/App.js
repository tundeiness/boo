/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  SectorBtn, CommentBtn, BestBtn, RecentBtn,
} from './components/ButtonCollections';
import SubCards from './components/SubCards';
import Comments from './components/Comment';
import { profiles } from './components/data/data';

function App() {
  const [user, setUser] = useState(profiles);

  const filterPersonality = (category) => {
    setUser(profiles.filter((item) => item.category === category));
  };
  return (
    <div className="App">
      <Header />
      <div className="max-w-[1640px] flex md:flex-row flex-col md:px-10 border border-red-500">
        <Sidebar />
        <main className="flex flex-col w-screen border border-gray-500">
          <div className="flex flex-col w-64 border border-red-500">
            <h1 className="flex justify-start text-2xl font-semibold mb-2">
              Elon Musk
              {' '}
              <span className="text-viking inline-block ml-3">MBTI</span>
            </h1>
            <div className="flex justify-start">
              <SectorBtn sector="Business" />
              <SectorBtn sector="Technology" />
            </div>
          </div>
          <div className="lg:flex lg:flex-row sm:flex-col justify-between border border-gray mt-1">
            {/* <div className="w-64 flex flex-col justify-center items-center border border-red-500"> */}
            <div className="hidden lg:w-60 lg:h-60 rounded-full lg:flex justify-center items-center ml-6 mt-6 border border-red-500">
              inner stuff
            </div>
            {/* </div> */}
            <div className="grid md:grid-cols-4 md:gap-5 grid-cols-3 gap-3 md:mr-10 border border-red-500">
              <div className="lg:hidden w-25 h-25 flex flex-col justify-center items-center  border border-gray">
                {/* <div className="w-full h-full rounded-full border border-red-500"> */}
                <img
                  src="./"
                  alt="elon"
                  className="img inline-block w-20 h-20 rounded-full shadow-lg object-cover"
                />
                {/* </div> */}
              </div>
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
              <SubCards title="MBTI" text="INTP" />
            </div>
          </div>
          <div className="lg:pt-10 lg:pl-2 lg:pr-10 lg:pb-10 p-2 border border-red-500 text-sm">
            Aliquip veniam tempor irure sit. Ut esse excepteur Lorem deserunt
            cupidatat hello commodo est occaecat culpa ut incididunt ut ea
            deserunt. Cillum dolor dolor adipisicing nulla deserunt in
            exercitation dolor officia minim dolor duis et labore. Amet aliqua
            aliqua proident laborum nostrud et consequat pariatur. Laboris
            incididunt id commodo ut Lorem aute irure adipisicing. Culpa amet et
            culpa aute ut ea veniam consequat cillum anim proident veniam.
            aliqua proident laborum nostrud et consequat pariatur. Laboris
            incididunt id commodo ut Lorem aute irure adipisicing. Culpa amet et
            incididunt id commodo ut Lorem aute.
          </div>
          <div className="flex flex-col outline outline-blue-600 px-2">
            <div className="flex flex-row justify-between my-3">
              <p className="text-lg font-bold leading-7">Comments</p>
              <CommentBtn text="Vote/Comment" />
            </div>
            <div className="outline outline-red-500 max-w-[390px]">
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
          <Comments />
        </main>
      </div>
    </div>
  );
}

export default App;
