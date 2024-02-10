import React, { useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { loginUser } from "../../Redux/Actions/User";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const User = useSelector((state) => state.User.User);

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginUser(formData , navigate));
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="login-container flex flex-col gap-12 bg-white items-center px-6 py-6 w-1/4">
        <h1 className="text-6xl text-zinc-900">Login</h1>
        <form className="flex flex-col gap-6 w-full" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="enter email"
            className="px-4 py-2 border border-zinc-400 hover:border-zinc-700 focus:outline-zinc-900"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="enter password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            className="px-4 py-2 border border-zinc-400 hover:border-zinc-700 focus:outline-zinc-900"
          />

          <button className="w-full rounded-sm px-5 py-2 text-white bg-zinc-900 hover:bg-zinc-600 text-xl">
            {isLoading ? <span>Loading.....</span> : <span>Login</span>}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
