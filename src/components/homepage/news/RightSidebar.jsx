"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handekgooleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("Google",data);
  };
  
  const handelGithubLogin = async () => {
     const data = await authClient.signIn.social({
       provider: "github",
     });
     console.log("Github",data)
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={handekgooleLogin}
          className="btn border-blue-500 text-blue-500"
        >
          <FaGoogle />
          Login with google
        </button>
        <button onClick={handelGithubLogin} className="btn">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
