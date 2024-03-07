import React from 'react'
import Image from 'next/image'
import reflect from '@/images/reflect.svg'
import Tag from '../Tag'
import bgPatternLeft from '@/images/tokenPatternLeft.png'
import bgPatternRight from '@/images/tokenPatternRight.png'
import Layout from '@/app/template'
import { fadeIn } from '@/lib/motion'
import Link from 'next/link'

const Tokenomic = () => {

  const tokenomic = [
    {
      number: '5%',
      title: 'Taxes',
    },
    {
      number: '100M',
      title: 'Max Supply',
    },
    {
      number: '100% ',
      title: 'Revenue Share',
    }
  ]

  return (
    <div className='h-[1085px] pb-[132px] flex flex-col justify-center items-center mx-auto overflow-hidden'>
      <Layout variant={
        fadeIn('down', 'spring', 1, 1)
      }>
        <div className='w-[1320.167px] h-[522.078px] relative max-w-[1440px] md:mx-auto rounded-[60px] bg-[linear-gradient(180deg,rgba(5,5,29,0.00)_0%,#29176B_36.02%,#5F2FDA_59.89%,#906EF4_82.4%,#FFF_110.71%)] mt-[37px]'>
          <div className='flex flex-col gap-[87px]'>
            <div className='flex flex-col items-center justify-center gap-[16px]'>
              <Tag text="TensorPro" />
              <h1 className='md:text-[48px] text-[32px] md:leading-[44px] leading-[40px]  title-text font-bold'>Tokenomic</h1>
            </div>
            <div className='flex items-center md:gap-[140px] gap-[32px] justify-center md:px-0 px-3'>
              {
                tokenomic.map((item, index) => (
                  <div key={index} className='flex flex-col gap-[10px] items-center justify-center text-[#FDFDFD] font-segoe'>
                    <h1 className='md:text-[80px] text-[40px]  font-bold'>{item.number}</h1>
                    <p className='md:text-[24px] text-[16px] leading-[22px] font-semibold'>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <Image src={bgPatternLeft} alt='bgPattern' className='left-[0%] absolute bottom-0 mix-blend-lighten ' />
          <Image src={bgPatternRight} alt='bgPattern' className='right-[0%] absolute bottom-0 mix-blend-lighten' />
        </div>
      </Layout>
      <Layout variant={
        fadeIn('up', 'spring', 1, 1)
      }>
        <div
          style={{
            backgroundImage: `url(${reflect.src})`,
            backgroundSize: 'cover',
            backgroundPosition: '-20px 0px',
            backgroundRepeat: 'no-repeat'
          }}
          className='w-[1440px] h-[393.372px] top-[-3%] relative'>
          <div className='flex flex-col gap-[40px] items-center justify-center absolute top-[162px] left-1/2 transform -translate-x-1/2 '>
            <div className='flex flex-col gap-[16px] items-center justify-center'>
              <div className='rounded-full p-[1px] border-0' style={{
                backgroundImage: "linear-gradient(90deg, #FB6064 20%, #4DCAFF 60%, #814FFE 100%)"
              }}>
                <div className="rounded-full bg-black flex items-center justify-center w-fit px-4 py-3 space-x-2" style={{
                  background: "linear-gradient(162deg, #010214 14.93%, #bea6ff 369.16%)"
                }}>
                  <span className="font-jetbrains text-white">TensorPro</span>
                </div>
              </div>
              <h1 className='font-segoe md:text-[48px] text-[32px] md:leading-[44px] leading-[40px] font-bold text-center text-[#FDFDFD]'><span className='title-text'>Enabling AI</span> Infrastructure<br />
                On Blockchain</h1>
            </div>
            <Link href='https://t.me/tensorpro_ERC'>
            <button className="bg-[#191919] rounded-full hover:shadow-none transition-all duration-500 ease-in-out py-3 px-4 text-white font-jetbrains flex items-center gap-x-2 shadow-[0px_2px_4px_0px_#A158FF_inset,0px_-4px_12px_0px_rgba(190,_166,_255,_0.50)]">
              <span>Discover</span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66687 12.196L11.3335 5.5293" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.66687 5.5293H11.3335V12.196" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Tokenomic