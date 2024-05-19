import React from 'react';

const Notification = (props) => {
  return (
    <div className="fixed top-10 right-4 bg-[#009652] text-white px-4 py-2 rounded shadow-lg z-50">
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
