"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { ThreeCircles } from "react-loader-spinner";

const Navbar = () => {
  const { data: session ,isPending } = authClient.useSession();
  const user =session?.user
  console.log(user);
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div>
        {" "}
        <h2 className="btn font-bold btn-primary">Hello : {user?.name}</h2>
      </div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      {isPending ? (
        // This is a loder
        <ThreeCircles
          visible={true}
          height="50"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : user ? (
        <div className="flex items-center gap-2">
          <Image
            src={user?.image || userAvatar}
            alt="User avatar"
            width={50}
            height={20}
            className="rounded-full"
          />
          <button onClick={async()=>await authClient.signOut()} className="btn bg-purple-500 text-white">
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
