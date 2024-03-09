import Link from "next/link";
import React from "react";

const Board = () => {
  const contents = [
    {
      color: "#bdff00",
      title: "Accessible decentralized computing",
      text: "Democratizes decentralized computing - Aggregates decentralized infrastructure into a simplified, accessible cloud platform.",
    },
    {
      color: "#47F582",
      title: "Intuitive app development",
      text: "Empowers resilient application development - Enables intuitive, cost-effective building, migrating, and hosting of apps on the decentralized cloud.",
    },
    {
      color: "#16ff00",
      title: "Flexible adoption",
      text: "Removes adoption barriers - Leverages the flexibility of its open, global platform to reduce costs, strengthen security, and future-proof infrastructure.",
    },
  ];

  return (
    <article
      style={{
        background: "rgba(255, 255, 255, 0.10)",
        backdropFilter: "blur(10px)",
      }}
      className='font-segoe p-8 max-w-[537px] flex flex-col gap-[44px] rounded-2xl border border-[rgba(253,253,253,0.30)] 
    shadow-[-7px_4px_20px_0px_rgba(0,0,0,0.20)] 
    '>
      {contents.map((item, index) => (
        <div key={index} className='flex flex-col gap-[44px]'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'>
                <path
                  d='M11.4418 0C10.2498 6.39982 4.91244 12.2106 0 12.2106C3.46709 12.5589 9.43266 15.4042 11.4418 24C11.4418 17.4316 19.8139 13.4036 24 12.2106C16.3652 12.2106 13.0737 4.07021 11.4418 0Z'
                  fill={item.color}
                />
              </svg>
              <h3 className='config-text font-bold text-[24px]'>
                {item.title}
              </h3>
            </div>
            <p className='text-[#FDFDFD] text-[16px] leading-[23px]'>
              {item.text}
            </p>
          </div>
          {contents.length - 1 !== index && (
            <div className='h-[1px] w-full bg-[rgba(253,253,253,0.20)]'></div>
          )}
        </div>
      ))}
      <Link href='#'>
        <button className='bg-[#191919] rounded-full w-fit py-3 px-4 text-white font-jetbrains flex items-center gap-x-2 shadow-[0px_2px_4px_0px_#BDFF00_inset,0px_-4px_12px_0px_rgba(189,_255,_0,_0.50)] hover:shadow-none transition-all duration-500 ease-in-out'>
          <span>Open Dapp</span>
          <svg
            width='16'
            height='17'
            viewBox='0 0 16 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4.66687 12.196L11.3335 5.5293'
              stroke='#ffffff'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4.66687 5.5293H11.3335V12.196'
              stroke='#ffffff'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </Link>
    </article>
  );
};

export default Board;
