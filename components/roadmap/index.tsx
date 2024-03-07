import Image from "next/image";
import Check from "@/images/check.svg";
import Circles from "@/images/circles.svg";
import Tag from "../Tag";
import Layout from "@/app/template";
import { fadeIn } from "@/lib/motion";
import Link from "next/link";

function Roadmap() {
  const steps = [
    {
      name: "Phase 1",
      description: [
        "Token Launch on Uniswap",
        "Release Dapp",
        "Launch HubTensor Bot",
        "Launching HubTensor Dashboard",
        "KOL Onboarding - Community Building"
      ],
    },
    {
      name: "Phase 2",
      description: [
        "Security Audits for Bot and Dapps",
        "Revenue Share Program Presentation",
        "Node program for providers",
        "Partnerships with Global Companies",
        "Staking Tier Mechanism"
      ],
    },
    {
      name: "Phase 3",
      description: [
        "Extend node providers globally",
        "Optimization Techniques for GPU Programming",
        "Adding support for more job types",
        "Tuning machine miner on endpoints",
        "Optimizing threading and parallelism in orchestration"
      ],
    },
    {
      name: "Phase 4",
      description: [
        "Expanding machine miner builds for more use cases",
        "Enhancing the Explorer for network management",
        "Load balancing tests and optimizations",
        "API integration with AI protocols",
        "Niche compute clusters / application subnets"
      ],
    },
  ]
  return (
    <div
      id="roadmap"
      className="flex justify-center">
      <div className="relative overflow-visible max-w-[1960px] flex-1">
        <div className="absolute -z-10">
          <svg width="603" height="1450" viewBox="0 0 603 1450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2026_592)">
              <ellipse cx="176.237" cy="324.989" rx="176.237" ry="324.989" transform="matrix(1 0 0 -1 -150 1050)" fill="url(#paint0_radial_2026_592)" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter0_f_2026_592" x="-550" y="0.0229492" width="1152.47" height="1449.98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2026_592" />
              </filter>
              <radialGradient id="paint0_radial_2026_592" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.237 1128.87) rotate(-90) scale(1128.87 417.388)">
                <stop offset="0.308205" stopColor="#AE61FB" />
                <stop offset="1" stopColor="#9747FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 -top-[20%] -z-10">
          <svg width="683" height="1124" viewBox="0 0 683 1124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2026_539)">
              <ellipse cx="220.322" cy="161.602" rx="220.322" ry="161.602" transform="matrix(1 0 0 -1 400.242 724)" fill="url(#paint0_radial_2026_539)" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter0_f_2026_539" x="0.242188" y="0.795898" width="1240.64" height="1123.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2026_539" />
              </filter>
              <radialGradient id="paint0_radial_2026_539" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220.322 561.335) rotate(-90) scale(561.335 521.796)">
                <stop offset="0.308205" stopColor="#C061FB" />
                <stop offset="1" stopColor="#9747FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <Image src={Circles} alt="circle" className="absolute -z-10 hidden md:block" />
        <div className="flex flex-col items-center md:items-start lg:flex-row lg:justify-between px-16 py-44 lg:py-44 ">
          <div className="pb-20 lg:pb-0 md:py-48 space-y-4 flex flex-col items-center md:items-start">
            <Tag text={`HubTensor`} />
            <div style={{
              background: "var(--Gradient-Primary, linear-gradient(90deg,#C7B3F8 0%,#6C3BEF 50%,#4223A1 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }} className="md:text-5xl text-4xl font-bold pb-4">Roadmap</div>
            <Link href="#">
            <button className="bg-[#191919] hover:shadow-none transition-all duration-500 ease-in-out rounded-full py-3 px-8 text-white font-jetbrains flex items-center gap-x-2 shadow-[0px_2px_4px_0px_#A158FF_inset,0px_-4px_12px_0px_rgba(190,_166,_255,_0.50)]">
              <span>Access roadmap</span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66687 12.196L11.3335 5.5293" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.66687 5.5293H11.3335V12.196" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            </Link>
          </div>
          <div className="flex flex-col self-end gap-y-8 lg:gap-y-0">
            {steps.map(({ name, description }, index) => (
              <div key={index} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-8 ">
                <div className="font-jetbrains text-sm flex items-center gap-x-4">
                  <div className="relative px-4 lg:px-0">
                    <span>{name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className="absolute -top-3 left-0 lg:-left-3">
                      <path d="M1 16.777V6.25285L7.45027 1.5H24.0852" stroke="#6C3BEF" strokeWidth="2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className="absolute -bottom-3  right-0 lg:-right-3">
                      <path d="M24 0.222982L24 10.7472L17.5497 15.5L0.914839 15.5" stroke="#6C3BEF" strokeWidth="2" />
                    </svg>
                  </div>
                  <svg width="199" height="1" viewBox="0 0 199 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
                    <line y1="0.5" x2="199" y2="0.5" stroke="#353539" />
                  </svg>
                </div>
                <div className="border px-6 py-12 border-[#353539] space-y-4">
                  <Layout variant={
                    fadeIn('right', 'spring', 0.5, 1)
                  }>
                    {/* <div className="flex items-center gap-x-4">
                      <Image src={Check} alt="Roadmap" className="rounded-full bg-[#9747FF] size-8 p-1" />
                      <span>{name}</span>
                    </div> */}
                    {
                      description.map((desc, index) => (
                        <div key={index} className="font-jetbrains md:w-[560px] w-[300px] text-[#918DA4]">{desc}</div>
                      ))
                    }
                  </Layout>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;