/* eslint-disable max-len */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { SectorBtn } from './components/ButtonCollections';
import SubCards from './components/SubCards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="max-w-[1640px] flex md:flex-row flex-col md:px-10 px-4 border border-red-500">
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
          <div className="flex flex-row justify-between border border-gray mt-1">
            {/* <div className="w-64 flex flex-col justify-center items-center border border-red-500"> */}
            <div className="lg:w-60 lg:h-60 rounded-full flex justify-center items-center ml-6 mt-6 border border-red-500">
              inner stuff
            </div>
            {/* </div> */}
            <div className="grid md:grid-cols-4 gap-5  mr-10 border border-red-500">
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
          <div className="pt-10 pl-2 pr-10 pb-10 border border-red-500 text-sm">
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
        </main>
      </div>
    </div>
  );
}

export default App;
