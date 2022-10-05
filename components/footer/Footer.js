import { Fragment } from "react";
import Image from "next/image";
// import Logo from "../assets/logo.png";
import Logo from "../../assets/logo.png";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, farFaceb } from "@fortawesome/free-solid-svg-icons";
// import image from "c";

function Footer() {
  return (
    <Fragment>
      <footer>
        <section className='container mx-auto flex flex-col lg:flex-row lg:justify-evenly lg:items-center p-6 lg:h-80 lg:pt-24'>
          <article className='w-full lg:w-1/2'>
            <div className='mb-14 mt-10 lg:mt-0 lg:mb-0'>
              <p className='text-center text-4xl lg:text-6xl font-bold text-white'>
                RENCOIN
              </p>
              <p className='text-lg text-center mt-1 text-white'>
                THE REVOLUTIONARY COIN
              </p>
            </div>
          </article>
          <article className='lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 lg:h-full'>
            <div>
              <ul>
                <p className='text-lg font-bold text-white'>Rencoin</p>
                <li className=' text-md text-white my-3'>
                  <Link href='/why-rencoin'>Why Rencoin?</Link>
                </li>
                <li className=' text-md  text-white'>
                  <Link href='/how-it-works'>How It Works</Link>
                </li>
                <li className=' text-md text-white my-3'>
                  <Link href='/knowledge'>Knowledge Base</Link>
                </li>
                <li className=' text-md text-white my-3'>
                  <Link href='/transparent'>Transparency</Link>
                </li>
                <li className=' text-md text-white '>
                  <Link href='/fees'>Fees</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p className='text-lg font-bold text-white'>
                  <Link href='/company'>Company</Link>
                </p>
                <li className=' text-md text-white my-3'>
                  <Link href='/about-us'> About Us</Link>
                </li>
                <li className=' text-md text-white my-3'>
                  <Link href='/contact'>Contact Us</Link>
                </li>
                <li className=' text-md  text-white'>
                  <Link href='/terms'> Legal Terms</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p className='text-lg font-bold text-white'>
                  <Link href='/resources'>Resources</Link>
                </p>
                <li className=' text-md text-white my-3'>
                  <Link href='/news'>News</Link>
                </li>
                <li className=' text-md  text-white '>
                  <Link href='/faq'>FAQs</Link>
                </li>
                <li className=' text-md text-white my-3'>
                  <Link href='/rencoin-facts'>Rencoin Facts</Link>
                </li>
                <li className=' text-md  text-white'>
                  <Link href='/whitepaper'>Whitepaper</Link>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className='container mx-auto w-full px-2 h-full lg:mt-6 lg:py-4'>
          <div className='mx-auto w-52 h-16 flex justify-center items-center mb-4 '>
            <Image src={Logo} alt='Rencoin' />
          </div>
          {/* SOCIAL MEDIA LINKS */}
          <div>{/* <FontAwesomeIcon icon={faCoffee} /> */}</div>
          {/* COPY RIGHT */}
          <div className='w-full text-center text-md text-white py-2'>
            <span> {new Date().getFullYear()}</span>
            <span> Tratrust Limited. All rights reserved.</span>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}

export default Footer;
