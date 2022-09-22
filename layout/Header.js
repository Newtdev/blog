import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [nav, setNav] = useState(true);
  const navHandler = () => setNav(!nav);

  function headerLinks() {
    return [
      { id: 1, href: "/why-rencoin", name: "Why Rencoin" },
      { id: 2, href: "/how-it-works", name: "How it works?" },
      { id: 3, href: "/news", name: "News" },
      { id: 4, href: "/log-in", name: "Log in" },
    ].map(({ id, href, name }) => {
      return (
        <li key={id}>
          <Link href={href}>{name}</Link>
        </li>
      );
    });
  }

  return (
    <Fragment>
      <div className='bg-[#00496e] py-2 px-3 md:py-4 xl:px-24 md:px-4 flex justify-between items-center'>
        <div className='flex justify-between items-center w-full md:w-fit'>
          <Link href='/'>
            <Image src={logo} alt='Rencoin' className='cursor-pointer' />
          </Link>
          <div onClick={navHandler} className='cursor-pointer md:hidden'>
            {/* {nav ? (
              <MenuIcon className='text-[#fff] w-7' />
            ) : (
              <XIcon className='text-[#fff] w-7' />
            )} */}
          </div>
        </div>
        <div className='hidden md:block w-full'>
          <ul className='list-none w-5/6 flex justify-evenly mx-auto text-white font-bold'>
            {headerLinks()}
          </ul>
        </div>

        <div>
          <button className='hidden bg-[#cc1aa3] md:flex text-[#fff] w-[12rem] text-lg py-4 font-bold justify-center items-center rounded-full'>
            Register
          </button>
        </div>
      </div>
      <div>
        <div
          className={
            nav
              ? "hidden"
              : "bg-[#01002C] flex-col md:hidden text-center content-center justify-center py-2"
          }>
          <ul className='list-none'>{headerLinks()}</ul>
        </div>
        <div>
          <button
            className={
              nav
                ? "hidden"
                : "bg-[#b70000] flex text-[#fff] h-11 justify-center items-center py-4 w-full md:hidden"
            }>
            RenCoinPaper
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
