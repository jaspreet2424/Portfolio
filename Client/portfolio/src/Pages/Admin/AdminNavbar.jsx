import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminNavbar() {
  const User = useSelector((state) => state.User.User);

  return (
    <div className="w-full bg-zinc-800 px-40 py-6 flex justify-between items-center">
      <Link className="text-3xl text-white">Dashboard</Link>

      <ul className="flex justify-between items-center gap-6">
        <li className="">
          <Link className="w-full h-full px-5 py-2 rounded-full text-white text-md hover:bg-zinc-600">
            Update Profile
          </Link>
        </li>
        <li className="">
          <Link className="w-full h-full px-5 py-2 rounded-full text-white text-md hover:bg-zinc-600">
            Add Skills
          </Link>
        </li>
        <li className="">
          <Link className="w-full h-full px-5 py-2 rounded-full text-white text-md hover:bg-zinc-600">
            Add Certificate
          </Link>
        </li>

        {User.token ? (
          <button className="text-white  py-1 text-lg rounded-full underline hover:opacity-50">
            Logout
          </button>
        ) : (
          <Link
            to="/admin/login"
            className="text-white px-5 py-1 text-lg rounded-full bg-zinc-600 hover:underline"
          >
            Login
          </Link>
        )}
      </ul>
    </div>
  );
}

export default AdminNavbar;
