"use client";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handelSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    
    
}

  return (
    <div className="w-11/12 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <form onSubmit={handelSubmit}>
        <fieldset className=" h-100 shadow fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className=" text-center font-bold text-xl pb-2 ">
            Login your account
          </h2>

          <label className="label font-bold text-black">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label font-bold text-black">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required={true} />

          <button className="btn btn-neutral mt-4">Login</button>
          <h2 className="font-semibold">
            Dont Have An Account ?{" "}
            <Link className="text-red-500" href={"register"}>
              Register
            </Link>
          </h2>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
