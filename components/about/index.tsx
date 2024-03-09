import React from 'react'
import Image from 'next/image'
import orb from '@/images/orb.png'
import Tag from '../Tag'
import Layout from '@/app/template'
import { fadeIn } from '@/lib/motion'

const About = () => {
  return (
    <div className='mx-auto overflow-hidden'>
      <div className='relative flex lg:justify-between justify-start h-[701px] max-w-[1440px] mx-auto px-3 lg:px-0 '>

        <div className='flex flex-col gap-8 w-full mx-auto flex-1 items-center text-center justify-center '> <div className='flex flex-col gap-4'>
          <div className='flex item-center justify-center text-center'>
            <Tag text="TensorPro" />
          </div>
              
              <h1 className='md:text-[48px] text-[32px] md:leading-[60px] leading-[48px]  font-bold font-segoe text-[#FDFDFD]'>ABout <span className='title-text'>TensorPro</span></h1>
            </div>
            <p className='md:text-[20px] w-ful md:max-w-[60%] text-[18px] md:leading-[34px] leading-[26px] font-segoe text-[#918DA4]'>TensorPro offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.</p>
          
        </div>
      </div>
    </div>
  )
}

export default About