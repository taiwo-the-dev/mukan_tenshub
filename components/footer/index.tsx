import React from 'react'
import logo from '@/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  const links = [
    {
      title: 'Web Links',
      links: [
        {
          title: 'Home',
          href: '#',
        },
        {
          title: 'Features',
          href: '#features',
        },
        {
          title: 'Roadmap',
          href: '#roadmap',
        },
        {
          title: 'Docs',
          href: '#',
        },
      ]
    },
    {
      title: 'Socail Links',
      links: [
        {
          title: 'TG Bot',
          href: '#',
        },
        {
          title: 'Dapp',
          href: '#',
        },
        {
          title: 'Twitter',
          href: '#',
        },
        {
          title: 'Telegram',
          href: 'https://t.me/tensorpro_ERC',
        },
      ]
    },
    {
      title: 'Other Links',
      links: [
        {
          title: 'Etherscan',
          href: '#',
        },
        {
          title: 'Dextools',
          href: '#',
        },
        {
          title: 'CoinmarketCap',
          href: 'https://coinmarketcap.com/',
        },
        {
          title: 'Coingecko',
          href: 'https://www.coingecko.com/',
        }
      ]
    }
  ]



  return (
    <footer className='border-t border-[#353539] bg-[rgba(1,2,20,0.50)] backdrop-blur-[40px]'>
      <div className='py-[32px] md:px-[60px] px-[30px] max-w-[1440px] mx-auto flex flex-col gap-[58px] items-center justify-center  relative overflow-hidden'>
        <div className='w-[699.262px] h-[84.279px] bg-[#6C3BEF] rounded-[699.262px] blur-[100px] absolute top-0 left-1/2 -translate-x-1/2' ></div>
        <div className='flex md:flex-row flex-col md:gap-0 gap-[60px] w-full justify-between'>
          <div className='flex flex-col gap-[15px]'>
            <Image src={logo} alt="logo" />
            <span className='text-[14px] leading-[22px] font-medium font-jetbrains text-[#C1B4D7]'>Infinity Solutions for Web3 Mass Adoption</span>
          </div>
          <div className='flex md:flex-row flex-col gap-[60px] '>
            <div className='flex md:gap-[75px] gap-[30px]'>
              {
                links.map((item, index) => (
                  <div key={index} className='flex flex-col gap-[32px]'>
                    <h4 className='text-[16px] leading-[22px] font-semibold font-segoe text-[#FFFFFF]'>{item.title}</h4>
                    {
                      item.links.map((link, index) => (
                        <Link key={index} href={link.href} className='text-[16px] leading-[22px] font-semibold font-segoe text-[#918DA4]'>{link.title}</Link>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            {/* <div className='flex flex-col gap-6'>
              <form className='flex flex-col gap-5'>
                <h1 className='text-[16px] leading-[22px] font-bold font-segoe text-[#FFFFFF]'>Join Our Community</h1>
                <div className='pl-[16px] py-[4px] pr-[4px] bg-[rgba(255,255,255,0.10)] rounded-[89px] flex gap-[10px]'>
                  <input type="text"
                    placeholder='Email address'
                    className='bg-transparent placeholder:text-[#918DA4] md:max-w-[210px] w-full' />
                  <button className='py-2 px-3 rounded-[53px] bg-[linear-gradient(90deg,#C7B3F8_0%,#6C3BEF_50%,#4223A1_100%)] w-[64px] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12" stroke="#FDFDFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
              <div className='flex items-center gap-4'>

              </div>
            </div> */}
            <div></div>
          </div>
        </div>
        <div className='flex flex-col gap-[32px] w-full'>
          <div className='w-full h-[1px] bg-[#353539]'></div>
          <div className='flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-4'>
            <span className='text-[#EFF1F4] text-[14px] leading-[18.2px] font-twk'>© 2024 - 2025 , Inc</span>
            <div className='flex items-center gap-6 text-[#EFF1F4] text-[14px] leading-[18.2px] font-twk'>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
          <div className='text-[#918DA4] font-mono text-[14px] leading-[24px]'>
            Copyright © 2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer