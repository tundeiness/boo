/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SectorBtn } from './ButtonCollections';
import SubCards from './SubCards';
import Elon from '../Assets/static/elon.webp';

const UserFilter = () => {
  const text = 0;
  return (
    <>
      <div className="flex flex-col lg:w-64 sm:w-full px-4">
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
      <div className="lg:flex lg:flex-row flex-col justify-between mt-8">
        {/* <div className="w-64 flex flex-col justify-center items-center border border-red-500"> */}
        <div className="hidden xl:w-60 xl:h-60 lg:h-32 rounded-full lg:flex justify-center items-center ml-6 mt-6 lg:ml-0 lg:mt-0 w-30 h-30 border border-gray-600">
          <img
            src={Elon}
            alt="elon"
            className="img inline-block xl:w-60 xl:h-60 lg:h-32   rounded-full shadow-lg object-cover"
          />
        </div>
        {/* </div> */}
        <div className="grid md:grid-cols-4 xl:gap-5  grid-cols-3 gap-3 md:mr-10  px-4 lg:gap-10 lg:mr-6">
          <div className="xl:hidden lg:hidden w-25 h-25 flex flex-col justify-center items-center">
            {/* <div className="w-full h-full rounded-full border border-red-500"> */}
            <img
              src={Elon}
              alt="elon"
              className="img inline-block w-20 h-20 rounded-full shadow-lg object-cover"
            />
            {/* </div> */}
          </div>
          <SubCards title="MBTI" text="INTP" />
          <SubCards title="Enneagram" text="5w6" />
          <SubCards title="Instinctual Variant" text="so/sp" />
          <SubCards title="Tritype" text="513" />
          <SubCards title="Socionics" text="ILE" />
          <SubCards title="Big 5 Sloan" text="RCOEI" />
          <SubCards title="Atitudinal Psyche" text="VLFE" />
          <SubCards title="Temperament" text="Phlegmatic [Dominant]" />
        </div>
      </div>
      <div className="xl:pt-10 xl:pl-2 xl:pr-10 xl:pb-10 lg:pt-10 lg:pl-4 lg:pr-6 lg:pb-10 p-4 text-sm">
        Aliquip veniam tempor irure sit. Ut esse excepteur Lorem deserunt
        cupidatat hello commodo est occaecat culpa ut incididunt ut ea deserunt.
        Cillum dolor dolor adipisicing nulla deserunt in exercitation dolor
        officia minim dolor duis et labore. Amet aliqua aliqua proident laborum
        nostrud et consequat pariatur. Laboris incididunt id commodo ut Lorem
        aute irure adipisicing. Culpa amet et culpa aute ut ea veniam consequat
        cillum anim proident veniam. aliqua proident laborum nostrud et
        consequat pariatur. Laboris incididunt id commodo ut Lorem aute irure
        adipisicing. Culpa amet et incididunt id commodo ut Lorem aute.
      </div>
    </>
  );
};

export default UserFilter;
