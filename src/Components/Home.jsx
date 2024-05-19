import React from "react";

const Home = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:sanketgadhe366@gmail.com?subject=Response to React Developer Internship&body=Dear Sanket,";
  };

  const handleProjectClick = () => {
    window.location.href = "/Users";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center mt-10">
        <h1 className="text-3xl font-bold text-teal-400 mb-4">Thank You!</h1>
        <p className="text-lg mb-4">
          Hello, I am <span className="text-teal-400">Sanket Gadhe</span>.
        </p>
        <p className="mb-4">
          I am grateful for the opportunity to interview for the React Developer
          Internship role. I have completed the CRUD operation assignment as
          requested. This project demonstrates my ability to perform Create,
          Read, Update, and Delete operations using React and fetching data from
          an API.
        </p>
        <p>
          I look forward to the possibility of contributing to your team and
          further discussing how I can be an asset to your company. Thank you
          once again for this opportunity.
        </p>
        <div className="mt-6 flex justify-around">
          <button
            onClick={handleEmailClick}
            className="bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-teal-300 transition duration-200"
          >
            Email Me
          </button>
          <button
            onClick={handleProjectClick}
            className="bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-teal-300 transition duration-200"
          >
            Explore CRUD Project
          </button>
        </div>
        <footer className="mt-4 text-gray-500 text-sm">
          Sanket Gadhe | sanketgadhe366@gmail.com
        </footer>
      </div>
    </div>
  );
};

export default Home;
