import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:sanketgadhe366@gmail.com?subject=Response to React Developer Internship&body=Dear Sanket,";
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center mt-10">
        <h1 className="text-3xl font-bold text-teal-400 mb-4">Thank You!</h1>
        <p className="text-lg mb-4">
          Hello, I am <span className="text-teal-400">Sanket Gadhe</span>.
        </p>
        <p className="mb-4">
        I am grateful for the opportunity to complete the assignment for the React Developer Internship role at Synergy. I have completed the CRUD operation assignment as
          requested. This project demonstrates my ability to perform Create,
          Read, Update, and Delete operations using React and fetching data from
          an API.
        </p>
        <p>
          I look forward to the possibility of contributing to your team and
          further discussing how I can be an asset to your company. Thank you
          once again for this opportunity.
        </p>
        <div className="mt-6 flex justify-around flex-wrap gap-1">
          <button
            onClick={handleEmailClick}
            className="bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-teal-300 transition duration-200"
          >
            Mail Me
          </button>
          <NavLink
            to={'/Users'}
            className="bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-teal-300 transition duration-200"
          >
            Explore CRUD Project
          </NavLink>
        </div>
        <footer className="mt-4 text-gray-500 text-sm">
          Sanket Gadhe | sanketgadhe366@gmail.com
        </footer>
      </div>
    </div>
  );
};

export default Home;
