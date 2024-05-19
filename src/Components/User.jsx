// Basic user info will be shown
import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import Notification from "./Notification";


const User = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentuser, setcurrentuser] = useState(null);
  const [notification, setnotification] = useState("");
  const [newuser, setnewuser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [adduser, setadduser] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

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

  const handleEdit = (user) => {
    setIsEditing(true);
    setcurrentuser(user);
    setformdata({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };
  const handelchange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handeluserchange = (e) => {
    const { name, value } = e.target;
    setnewuser({
      ...newuser,
      [name]: value,
    });
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${currentuser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      if (!response.ok) {
        throw new Error("Fail to update Details");
      }
      const updateddata = await response.json();
      console.log(updateddata);

      setusers(
        users.map((user) => (user.id === currentuser.id ? updateddata : user))
      );
      setIsEditing(false);
      setloading(false);
      setnotification("User updated successfully!");
      setTimeout(() => {
        setnotification("");
      }, 2000);
      setcurrentuser(null);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };

  const handleSavenew = async (e) => {
    e.preventDefault();
    // const id = users.length + 1;
    const userwithid = { ...newuser, id };
    console.log(userwithid);
    setloading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userwithid),
        }
      );

      if (!response.ok) {
        setloading(false);
        throw new Error("Not able to add user");
      }
      const afteradd = await response.json();
      console.log(afteradd);
      setusers((users) => [...users, afteradd]);
      setadduser(false);
      setloading(false);

      setnotification("User Added successfully!");
      setTimeout(() => {
        setnotification("");
      }, 2000);
      setnewuser({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const handleDelete = async (id) => {
    setloading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Fail to update Details");
      }
      setusers(users.filter((user) => user.id !== id));
      setnotification("User Deleted successfully!");
      setloading(false);
      setTimeout(() => {
        setnotification("");
      }, 2000);
    } catch (error) {
      seterror(error);
    }
  };

  if (error) {
    return  <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 flex items-center">
    <p>{error.message}</p>
  </div>;
  }
  return (
    <div className="userpage px-5 py-5 ">
      {loading ? (
        <div className="loader z-30 flex justify-center items-center w-full h-screen   opacity-30 absolute  ">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <div className="addnew fixed top-20">
        <button
          className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
          onClick={() => {
            setadduser(true);
          }}
        >
          Add User
        </button>
        {notification && <Notification message={notification} />}
      </div>
      <div className="text-black flex flex-wrap justify-center gap-x-10 py-10">
        {users.map((user, key) => {
          return (
            <div key={key}>
              <div className="mx-auto max-w-md p-6 bg-[#c7cbd1] shadow-md rounded-md mt-4 text-[#004944] w-[45vw]">
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
                <div className="flex justify-end">
                  <div>
                    <button
                      className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
                      onClick={() => {
                        handleEdit(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#d32240] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#922929] transition-colors"
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
              <h2 className="text-xl font-semibold mb-2">Edit User</h2>
              <form onSubmit={handleSave}>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formdata.name}
                    onChange={handelchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formdata.email}
                    onChange={handelchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formdata.phone}
                    onChange={handelchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition-colors"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {adduser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
              <h2 className="text-xl font-semibold mb-2">Add New User</h2>
              <form onSubmit={handleSavenew}>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newuser.name}
                    onChange={handeluserchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newuser.email}
                    onChange={handeluserchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 font-semibold" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={newuser.phone}
                    onChange={handeluserchange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition-colors"
                    onClick={() => setadduser(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
