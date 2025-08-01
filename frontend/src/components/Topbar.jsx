import React from 'react'
import { useState } from 'react';
const Topbar = () => {
  const [logout, setLogout] = useState(false);

    return (
    <div>
        <div
          className='flex items-center justify-between'
        >
          <img
            src="https://internshala-uploads.internshala.com/logo%2F644777764f8411682405238.jpg.webp"
            alt="logo"
            className="rounded-full ml-5"
          />
          <button
          className="bg-blue-500 capitalize text-white p-2 rounded-lg mr-3  font-medium hover:cursor-pointer"
            onClick={() => {
              setLogout((prev) => !prev);
            }}
          >
            {logout ? "login" : "logout"}
          </button>
        </div>
    </div>
  )
}

export default Topbar
