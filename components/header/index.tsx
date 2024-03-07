"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/images/logo.svg'
import Link from 'next/link'

const Header = () => {

  const menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Features',
      link: '#features'
    },
    {
      name: 'Roadmap',
      link: '#roadmap'
    },
    {
      name: 'Docs',
      link: '#'
    }
  ]

  const [isOutOfView, setIsOutOfView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setIsOutOfView(true);
    } else {
      setIsOutOfView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <header className={`transition-all duration-300 ease-in-out pt-[12px] pb-[16px] z-40 sticky top-0 md:px-[60px] px-[30px] flex items-center justify-between  w-full mx-auto font-jetbrains h-[74px] border-b border-[#353539]
     ${isOutOfView ? 'bg-[#000] backdrop-blur-[40px]' : 'bg-transparent'}
    `}>
      <Image src={logo} alt='logo' />
      <ul className='md:flex hidden items-center gap-[25px] h-full'>
        {menu.map((item, index) => (
          <li key={index} className='flex items-center gap-[25px] h-full  text-[14px] leading-[22px] font-medium silver-text   '>
            <Link href={item.link} className='px-[10px] py-[12px] hover:bg-[#ffffff20] transition-all' >
              <span>{item.name}</span>
            </Link>
            {
              menu.length - 1 !== index && (
                <div className='h-full max-h-[20px] w-[1px] bg-[#353539] my-[12px]'></div>
              )
            }
          </li>
        ))}
      </ul>
      {isMenuOpen && (
        <ul className={`md:hidden  border-b border-[#353539] flex slideInDown flex-col gap-[25px] z-0 pb-[60px] px-[30px] absolute top-[74px] left-0 w-full  backdrop-blur-[40px] transition-all duration-300 ease-in-out  ${isOutOfView ? 'bg-[#000] backdrop-blur-[40px]' : 'bg-transparent'}`}>
          {menu.map((item, index) => (
            <li key={index} className='flex items-center gap-[24px] text-[14px] leading-[22px] font-medium silver-text '>
              <Link href={item.link} className='px-[10px] py-[12px]' >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          <Link href='http://dapp.hubtensor.com/'>
            <button className="rounded-full p-1 md:hidden flex w-fit justify-center mx-auto " style={{
              backgroundImage: "linear-gradient(90deg, #C7B3F8 0%, #6C3BEF 28.75%, #4223A1 100%)"
            }}>
              <div className="bg-[#010214] rounded-full px-5 py-2 flex items-center gap-x-2">
                <span>Start Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4.66699 11.3332L11.3337 4.6665" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.66699 4.6665H11.3337V11.3332" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </Link>
        </ul>
      )}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z" fill="#FDFDFD" />
        </svg>
      </button>
      <Link href='#' className=" md:flex hidden">
        <button className="rounded-full p-[3px] md:flex hidden" style={{
          backgroundImage: "linear-gradient(90deg, #C7B3F8 0%, #6C3BEF 28.75%, #4223A1 100%)"
        }}>
          <div className="bg-[#010214] rounded-full px-5 py-2 flex items-center gap-x-2 ">
            <span style={{
              background: "var(--Gradient-Primary, linear-gradient(180deg,#C7B3F8 0%,#6C3BEF 90%,#4223A1 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }} className='font-semibold text-white '>Start Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.66699 11.3332L11.3337 4.6665" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.66699 4.6665H11.3337V11.3332" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </Link>
    </header>
  )
}

export default Header