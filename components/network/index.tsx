import React from 'react'
import Tag from '../Tag'
import Board from './Board'
import Layout from '@/app/template'
import { showVariant, staggerContainer } from '@/lib/motion'

const Precofig = () => {
  return (
    <Layout
      variant={
        showVariant
      }
    >
    <div
      id='features'
      className='md:py-[140px] py-[70px] flex md:flex-row flex-col md:gap-[96px] md:px-0 px-3 gap-8 font-segoe justify-center items-center relative'>
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="986" height="863" viewBox="0 0 986 863" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.873367H0.81877H492.681H493H493.319H985.181H985.5V1.15205V431.162V431.441V431.72V861.73V862.009H985.181H493.319H493H492.681H0.81877H0.5V861.73V431.72V431.441V431.162V1.15205V0.873367ZM1.13754 431.162H82.4947V360.036H1.13754V431.162ZM83.1323 431.162H164.596V360.036H83.1323V431.162ZM165.233 431.162H246.591V360.036H165.233V431.162ZM247.228 431.162H328.692V360.036H247.228V431.162ZM329.329 431.162H410.687V360.036H329.329V431.162ZM411.324 431.162H492.681V360.036H411.324V431.162ZM493.319 431.162H574.676V360.036H493.319V431.162ZM575.313 431.162H656.777V360.036H575.313V431.162ZM657.415 431.162H738.772V360.036H657.415V431.162ZM739.409 431.162H820.873V360.036H739.409V431.162ZM821.511 431.162H902.868V360.036H821.511V431.162ZM903.505 431.162H984.862V360.036H903.505V431.162ZM1.13754 431.72V502.846H82.4947V431.72H1.13754ZM83.1323 431.72V502.846H164.596V431.72H83.1323ZM165.233 431.72V502.846H246.591V431.72H165.233ZM247.228 431.72V502.846H328.692V431.72H247.228ZM329.329 431.72V502.846H410.687V431.72H329.329ZM411.324 431.72V502.846H492.681V431.72H411.324ZM984.862 431.72H903.505V502.846H984.862V431.72ZM902.868 431.72H821.511V502.846H902.868V431.72ZM820.873 431.72H739.409V502.846H820.873V431.72ZM738.772 431.72H657.415V502.846H738.772V431.72ZM656.777 431.72H575.313V502.846H656.777V431.72ZM574.676 431.72H493.319V502.846H574.676V431.72ZM411.324 1.43074H492.681V72.5572H411.324V1.43074ZM411.324 73.1146H492.681V144.334H411.324V73.1146ZM411.324 144.892H492.681V216.017H411.324V144.892ZM411.324 216.576H492.681V287.701H411.324V216.576ZM411.324 288.259H492.681V359.479H411.324V288.259ZM493.319 72.5572V1.43074H574.676V72.5572H493.319ZM493.319 144.334V73.1146H574.676V144.334H493.319ZM493.319 216.017V144.892H574.676V216.017H493.319ZM493.319 287.701V216.576H574.676V287.701H493.319ZM493.319 359.479V288.259H574.676V359.479H493.319ZM1.13754 1.43074V72.5572H82.4947V1.43074H1.13754ZM83.1323 1.43074V72.5572H164.596V1.43074H83.1323ZM165.233 1.43074V72.5572H246.591V1.43074H165.233ZM247.228 1.43074V72.5572H328.692V1.43074H247.228ZM329.329 1.43074V72.5572H410.687V1.43074H329.329ZM1.13754 359.479H82.4947V288.259H1.13754V359.479ZM1.13754 287.701H82.4947V216.576H1.13754V287.701ZM1.13754 216.017H82.4947V144.892H1.13754V216.017ZM1.13754 144.334H82.4947V73.1146H1.13754V144.334ZM83.1323 73.1146V144.334H164.596V73.1146H83.1323ZM165.233 73.1146V144.334H246.591V73.1146H165.233ZM247.228 73.1146V144.334H328.692V73.1146H247.228ZM329.329 73.1146V144.334H410.687V73.1146H329.329ZM410.687 144.892H329.329V216.017H410.687V144.892ZM410.687 216.576H329.329V287.701H410.687V216.576ZM410.687 288.259H329.329V359.479H410.687V288.259ZM328.692 359.479V288.259H247.228V359.479H328.692ZM246.591 359.479V288.259H165.233V359.479H246.591ZM164.596 359.479V288.259H83.1323V359.479H164.596ZM83.1323 287.701H164.596V216.576H83.1323V287.701ZM83.1323 216.017H164.596V144.892H83.1323V216.017ZM165.233 144.892V216.017H246.591V144.892H165.233ZM247.228 144.892V216.017H328.692V144.892H247.228ZM328.692 216.576H247.228V287.701H328.692V216.576ZM246.591 287.701V216.576H165.233V287.701H246.591ZM575.313 1.43074V72.5572H656.777V1.43074H575.313ZM657.415 1.43074V72.5572H738.772V1.43074H657.415ZM739.409 1.43074V72.5572H820.873V1.43074H739.409ZM821.511 1.43074V72.5572H902.868V1.43074H821.511ZM903.505 1.43074V72.5572H984.862V1.43074H903.505ZM984.862 73.1146H903.505V144.334H984.862V73.1146ZM984.862 144.892H903.505V216.017H984.862V144.892ZM984.862 216.576H903.505V287.701H984.862V216.576ZM984.862 288.259H903.505V359.479H984.862V288.259ZM575.313 73.1146V144.334H656.777V73.1146H575.313ZM657.415 73.1146V144.334H738.772V73.1146H657.415ZM739.409 73.1146V144.334H820.873V73.1146H739.409ZM821.511 73.1146V144.334H902.868V73.1146H821.511ZM902.868 144.892H821.511V216.017H902.868V144.892ZM902.868 216.576H821.511V287.701H902.868V216.576ZM902.868 288.259H821.511V359.479H902.868V288.259ZM820.873 359.479V288.259H739.409V359.479H820.873ZM738.772 359.479V288.259H657.415V359.479H738.772ZM656.777 359.479V288.259H575.313V359.479H656.777ZM575.313 287.701H656.777V216.576H575.313V287.701ZM575.313 216.017H656.777V144.892H575.313V216.017ZM657.415 144.892V216.017H738.772V144.892H657.415ZM739.409 144.892V216.017H820.873V144.892H739.409ZM820.873 216.576H739.409V287.701H820.873V216.576ZM738.772 287.701V216.576H657.415V287.701H738.772ZM411.324 503.403H492.681V574.623H411.324V503.403ZM411.324 575.181H492.681V646.307H411.324V575.181ZM411.324 646.865H492.681V717.99H411.324V646.865ZM411.324 718.548H492.681V789.768H411.324V718.548ZM411.324 790.325H492.681V861.452H411.324V790.325ZM493.319 574.623V503.403H574.676V574.623H493.319ZM493.319 646.307V575.181H574.676V646.307H493.319ZM493.319 717.99V646.865H574.676V717.99H493.319ZM493.319 789.768V718.548H574.676V789.768H493.319ZM493.319 861.452V790.325H574.676V861.452H493.319ZM410.687 861.452V790.325H329.329V861.452H410.687ZM328.692 861.452V790.325H247.228V861.452H328.692ZM246.591 861.452V790.325H165.233V861.452H246.591ZM164.596 861.452V790.325H83.1323V861.452H164.596ZM82.4947 861.452V790.325H1.13754V861.452H82.4947ZM1.13754 789.768H82.4947V718.548H1.13754V789.768ZM1.13754 717.99H82.4947V646.865H1.13754V717.99ZM1.13754 646.307H82.4947V575.181H1.13754V646.307ZM1.13754 574.623H82.4947V503.403H1.13754V574.623ZM83.1323 503.403V574.623H164.596V503.403H83.1323ZM165.233 503.403V574.623H246.591V503.403H165.233ZM247.228 503.403V574.623H328.692V503.403H247.228ZM329.329 503.403V574.623H410.687V503.403H329.329ZM410.687 575.181H329.329V646.307H410.687V575.181ZM410.687 646.865H329.329V717.99H410.687V646.865ZM410.687 718.548H329.329V789.768H410.687V718.548ZM328.692 789.768V718.548H247.228V789.768H328.692ZM246.591 789.768V718.548H165.233V789.768H246.591ZM164.596 789.768V718.548H83.1323V789.768H164.596ZM83.1323 717.99H164.596V646.865H83.1323V717.99ZM83.1323 646.307H164.596V575.181H83.1323V646.307ZM165.233 575.181V646.307H246.591V575.181H165.233ZM247.228 575.181V646.307H328.692V575.181H247.228ZM328.692 646.865H247.228V717.99H328.692V646.865ZM246.591 717.99V646.865H165.233V717.99H246.591ZM984.862 503.403H903.505V574.623H984.862V503.403ZM984.862 575.181H903.505V646.307H984.862V575.181ZM984.862 646.865H903.505V717.99H984.862V646.865ZM984.862 718.548H903.505V789.768H984.862V718.548ZM984.862 790.325H903.505V861.452H984.862V790.325ZM902.868 861.452V790.325H821.511V861.452H902.868ZM820.873 861.452V790.325H739.409V861.452H820.873ZM738.772 861.452V790.325H657.415V861.452H738.772ZM656.777 861.452V790.325H575.313V861.452H656.777ZM575.313 503.403V574.623H656.777V503.403H575.313ZM657.415 503.403V574.623H738.772V503.403H657.415ZM739.409 503.403V574.623H820.873V503.403H739.409ZM821.511 503.403V574.623H902.868V503.403H821.511ZM902.868 575.181H821.511V646.307H902.868V575.181ZM902.868 646.865H821.511V717.99H902.868V646.865ZM902.868 718.548H821.511V789.768H902.868V718.548ZM820.873 789.768V718.548H739.409V789.768H820.873ZM738.772 789.768V718.548H657.415V789.768H738.772ZM656.777 789.768V718.548H575.313V789.768H656.777ZM575.313 717.99H656.777V646.865H575.313V717.99ZM575.313 646.307H656.777V575.181H575.313V646.307ZM657.415 575.181V646.307H738.772V575.181H657.415ZM739.409 575.181V646.307H820.873V575.181H739.409ZM820.873 646.865H739.409V717.99H820.873V646.865ZM738.772 717.99V646.865H657.415V717.99H738.772Z" stroke="url(#paint0_radial_2009_391)" />
          <defs>
            <radialGradient id="paint0_radial_2009_391" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(493 431.441) rotate(90) scale(312.664 409.793)">
              <stop stopColor="#DED3FB" stopOpacity="0.32" />
              <stop offset="1" stopColor="#6C34B8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='w-[528px] h-[583.387px] absolute top-[108px] left-1/2 transform -translate-x-1/2 rounded-[583.387px] blur-[250px] bg-[radial-gradient(157.36%_118.62%_at_80.55%_8.29%,rgba(77,202,255,0.60)_0%,rgba(251,97,193,0.60)_57.6%,rgba(151,71,255,0.60)_100%)]'></div>
      <div className='flex items-start flex-col md:gap-[96px] gap-8'>
        <div className='flex flex-col gap-4'>
          <Tag text={`HubTensor`} />
          <h1 className='md:text-[48px] text-[32px] md:leading-[60px] leading-[48px] font-bold text-[#FDFDFD]'><span className='title-text'>HubTensor</span> Network</h1>
        </div>
        <p className='md:text-[16px] text-[14px] md:leading-[23px] leading-[20px] text-[#FDFDFD] font-normal max-w-[380px]'>HubTensor unlocks decentralized computing by aggregating it into an accessible cloud platform, empowering intuitive development of resilient applications, and removing adoption barriers through a flexible, open global infrastructure.</p>
      </div>
      
        <Board />
      
    </div>
    </Layout>
  )
}

export default Precofig