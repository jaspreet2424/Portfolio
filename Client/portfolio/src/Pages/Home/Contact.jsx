import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="w-full h-fit border-t-2 border-zinc-800">
      <h1 className="text-6xl text-zinc-900 pt-6 text-center">Contact</h1>

      <div className="w-full flex flex-col my-10">
        <div className="cards flex justify-center items-center gap-12">
          <div className="each-div flex flex-col gap-6 justify-center items-center w-80 h-fit px-6 py-12 bg-gray-100">
            <i className="fa-solid fa-phone text-6xl text-gray-400"></i>
            <span className="text-3xl text-gray-400">Make a Call</span>
            <span className="text-2xl text-gray-400">+91 7696993411</span>
          </div>
          <div className="each-div flex flex-col gap-6 justify-center items-center w-80 h-fit px-6 py-12 bg-gray-100">
            <i className="fa-solid fa-envelope text-6xl text-gray-400"></i>
            <span className="text-3xl text-gray-400">Send an Email</span>
            <span className="text-xl text-gray-400">singhjaspreet2425@gmail.com</span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-zinc-800 pt-6 text-center">Let's have a talk.</h1>

      <div className="w-full  py-10 flex justify-center items-center">
        <form className="grid gap-6 grid-cols-1 px-16 py-10 grid-rows-2 justify-center items-center lg:w-2/4">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="py-2 px-3 border border-stone-400 
            hover:border-zinc-600 focus:outline-zinc-900"
            />
            <label htmlFor="name"></label>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="mobile"
              placeholder="Mobile Number"
              className="py-2 px-3 border border-stone-400 
            hover:border-zinc-600 focus:outline-zinc-900"
            />
            <label htmlFor="mobile"></label>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="Persoanl Email"
              className="py-2 px-3 border border-stone-400 
            hover:border-zinc-600 focus:outline-zinc-900"
            />
            <label htmlFor="email"></label>
          </div>
          <textarea
            name="text-area"
            id="text-area"
            placeholder="Leave a message"
            cols="30"
            rows="10"
            className=" py-4 px-4 border 
          border-stone-400 hover:border-zinc-600 focus:outline-zinc-800"
          ></textarea>
          <div className="flex justify-center items-center mt-6 gap-5">
            <button className="bg-zinc-900 rounded-sm px-6 py-2 text-white text-xl hover:bg-zinc-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
