import Link from "next/link";
import React from "react";
import { useState } from "react";
import LogoImage from "../ui/Logo";

const links = [
  { id: 1, path: "/why-rencoin", name: "Why Rencoin?" },
  { id: 2, path: "/how-it-works", name: "How it works." },
  { id: 3, path: "/buy", name: "Buy" },
  { id: 4, path: "/products", name: "Products" },
  { id: 5, path: "/news", name: "News" },
];

export function Close({ close }) {
  return (
    <svg
      onClick={close}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-8 h-8 text-white'>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
}

export function Menu() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className='w-8 h-8 text-white'>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
}

export function LinksFunt({ textSize }) {
  return links.map(({ id, path, name }) => {
    return (
      <li key={id} className='font-bold text-[#f1f7fd]'>
        <Link
          className={`${textSize} active:text-gray-300 focus:text-gray-500 hover:text-gray-400`}
          href={path}>
          {name}
        </Link>
      </li>
    );
  });
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const slide = open ? "left-0 md:left-1/2" : "left-full";
  return (
    <div>
      <div>
        <div className='h-20 flex justify-between items-center px-8 lg:hidden '>
          <div className=' w-24 lg:w-36'>
            {/* <img src={Logo} alt='Rencoin' /> */}
            <LogoImage />
          </div>
          <div
            className='cursor-pointer'
            onClick={() => {
              setOpen(!open);
            }}>
            <Menu />
          </div>
        </div>
      </div>
      <ul
        className={` w-full md:w-1/2 h-screen lg:hidden transition-all ease duration-300 fixed top-0 left-0 ${slide} z-50`}
        style={{ backgroundColor: "rgba(0, 51, 86, 0.98)" }}>
        <li className=' h-20 flex justify-between items-center px-6'>
          <LogoImage />
          <li className='cursor-pointer'>
            <Close close={() => setOpen(!open)} />
          </li>
        </li>
        <li className='flex flex-col items-start justify-evenly h-80  px-6'>
          <LinksFunt textSize={"text-xl text-[#f1f7fd]"} />
        </li>
        <li className=' h-36 flex  w-full flex-col justify-evenly items-start mt-8 px-6'>
          <li className='font-bold mb-4 font-bold py-4 px-10 w-full rounded-full border  border-white text-center cursor-pointer transition-all text-[#3a7700] ease-in duration-300 hover:bg-[#f1f7fd] '>
            <Link className='text-lg ' href='/log-in'>
              Log in
            </Link>
          </li>
          <li className='font-bold py-4 px-10 text-white w-full rounded-full bg-[#3a7700] text-center cursor-pointer  transition-all ease-in duration-300 hover:border border-[#3a7700] hover:bg-transparent hover:text-[#3a7700]'>
            <Link href='/sign-up' className='text-lg'>
              Register
            </Link>
          </li>
        </li>
      </ul>
    </div>
  );
}

export function DesktopNav() {
  return (
    <ul className='w-full h-full justify-evenly items-center hidden lg:flex '>
      <LogoImage />
      <li className='flex justify-evenly items-center w-[50%]  px-6'>
        <LinksFunt textSize={"text-lg text-[#f1f7fd]"} />
      </li>
      <li className='flex w-[20%] justify-evenly items-center'>
        <li className='font-bold mr-10 text-white'>
          <Link className='text-lg text-white' href='/log-in'>
            Log in
          </Link>
        </li>
        <li className='font-bold py-2 px-8 rounded text-[#f1f7fd] bg-[#3a7700]'>
          <Link href='/sign-up' className='text-[#f1f7fd]'>
            Register
          </Link>
        </li>
      </li>
    </ul>
  );
}
