import React from 'react'
import Image from 'next/image'
import ethereum from '@/images/collab/eth.svg'
import google from '@/images/collab/google.svg'
import nvidia from '@/images/collab/nvidia.svg'
import Layout from '@/app/template'
import { slideIn } from '@/lib/motion'

const Collaborator = () => {

  const collaborators = [
    {
      name: 'ethereum',
      image: ethereum,
      style: 'w-[150px] h-[100px]'
    },
    {
      name: 'google',
      image: google,
      style: ''
    },
    {
      name: 'nvidia',
      image: nvidia,
      style: ''
    },
  ]

  return (
    <Layout variant={
      slideIn('down', 'spring', 0.5, 1)
    }>
      <div className='py-[44px] flex items-center justify-center md:gap-[52px] gap-[12px] md:px-0 px-3'>
        {collaborators.map((item, index) => (
          <div key={index} className='flex items-center justify-center '>
            <Image src={item.image} alt={item.name} className={` ${item.style} `} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Collaborator