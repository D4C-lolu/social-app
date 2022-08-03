import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/Router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo1 from "../utils/logo1.png";
import Logo2 from "../utils/logo2.png";

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px] flex">
          <Image
            src={Logo1}
            priority={true}
            alt="4go"
            className="cursor-pointer"
            layout="intrinsic"
            height="240px"
          />
          <Image
            src={Logo2}
            priority={true}
            alt="4go"
            className="cursor-pointer"
            layout="intrinsic"
            height="240px"
          />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>
        {user ? (
          <div>LOGGED IN</div>
        ) : (
          <GoogleLogin onSuccess={() => {}} onError={() => {}} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
