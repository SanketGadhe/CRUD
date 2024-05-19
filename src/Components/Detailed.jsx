// Detailed info about particular user will be shown
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Detailed = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchuser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      try {
        if (!response.ok) {
          throw new Error("Network Response was not ok");
        }
        const data = await response.json();
        setusers(data);
        setloading(false);
      } catch (error) {
        seterror(error);
        setloading(false);
      }
    };
    fetchuser();
  }, []);

  if (error) {
    return (
      <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 flex items-center">
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div className="px-5 py-5">
      {loading ? (
        <div className="loader z-30 flex justify-center items-center w-full h-screen   opacity-30 absolute  ">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <div className="text-black flex flex-wrap justify-center gap-x-10 py-10">
        {users.map((user, key) => {
          return (
            <div key={key}>
              <div className="mx-auto max-w-md p-6 bg-[#c7cbd1] text-[black] shadow-md rounded-md mt-4  w-[45vw] max-md:w-[80vw]">
                <div className="mb-2">
                  <p className="block mb-1 font-semibold">Name </p>

                  <p>{user.name}</p>
                </div>

                <div className="mb-2">
                  <p className="block mb-1 font-semibold">Email Address</p>

                  <p>{user.email}</p>
                </div>
                <div className="mb-2">
                  <p className="block mb-1 font-semibold">Phone Number</p>

                  <p>{user.phone}</p>
                </div>
                <div className="mb-2">
                  <p className="block mb-1 font-semibold">Address</p>

                  <p>
                    {user.address.street} {user.address.suite}{" "}
                    {user.address.city} {user.address.zipcode}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="block mb-1 font-semibold">Company name</p>

                  <p>{user.company.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detailed;
