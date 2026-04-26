"use client";
import Link from "next/link";
import React from "react";



const RegisterPage = () => {
  const handelSubmitRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(photo,name,email, password);
  };

    return (
      <div className="w-11/12 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <form onSubmit={handelSubmitRegister}>
          <fieldset className=" h-100 shadow fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h2 className=" text-center font-bold text-xl pb-2 ">
              Register your account
            </h2>

            <label className="label font-bold text-black">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required={true}
            />
            <label className="label font-bold text-black">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Inter your Photo URL"
            />
            <label className="label font-bold text-black">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required={true}
            />

            <label className="label font-bold text-black">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required={true}
            />

            <button className="btn btn-neutral mt-4">Register Now</button>
            <h2 className="font-semibold">
              Dont Have An Account ?
              <Link className="text-red-500" href={"login"}>
                Loing Now
              </Link>
            </h2>
          </fieldset>
        </form>
      </div>
    );
};

export default RegisterPage;