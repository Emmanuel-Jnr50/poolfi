import './index.css'
import React from 'react'
// import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'
// import Button from './components/Button'
import NotificationIcon from './components/NotificationIcon'
import SettingIcon from './components/SettingIcon'
import PlusIcon from './components/PlusIcon'
import wavepattern from './assets/wave-pattern.svg'
import WalletIconBold from './components/WalletIconBold'
import WalletIcon from './components/WalletIcon'
import money from './assets/money.svg'

const App = () => {
  return (
    <div className='flex min-h-screen bg-foam'>
      <SideBar />
      <main className='min-w-0 flex-1 p-6 bg-white my-4 mr-4 rounded-xl border border-mist overflow-y-scroll scrollbar-none'>

        <div className="header flex justify-between items-start mb-6 w-full">
          <div>
            <h1 className="text-[26px] font-bold text-ink font-primary tracking-[-0.8px]">Good morning, Emmanuel.</h1>
            <p className="text-[12.5px] text-[#777777] font-body tracking-[-0.2px] font-medium">
              Wednesday, 7 Oct 2026
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className='flex items-center justify-center h-12 w-12 bg-foam rounded-full'><NotificationIcon className="scale-80"/></span>
            <span className='flex items-center justify-center h-12 w-12 bg-foam rounded-full'><SettingIcon height={24} width={24} className="scale-80"/></span>
            <button className='flex items-center justify-center gap-1.5 w-fit h-12 px-5 pl-3.5 bg-pool-blue rounded-full font-primary text-white text-[14px] font-bold shadow-soft'>
              <PlusIcon className="scale-80" />
              Create Pool
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-mist mt-10 relative h-fit shadow-raised">
          <img src={wavepattern} alt="Wave Pattern" className="w-full h-full object-cover absolute" />

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <span className="text-[14px] font-primary font-bold text-white py-2.5 px-4 rounded-full bg-white/10 flex gap-2 items-center ="><img src={money} alt="Money Icon" className="scale-80" /> Your PoolFi balance:</span>

              <div className="flex items-center gap-3.5">
                <button className='flex items-center justify-center gap-1.5 w-fit h-11 px-5 pl-3.5 bg-white rounded-full font-primary text-pool-blue text-[14px] font-bold shadow-soft'>
                <PlusIcon className="scale-80" color="#1B4FD8" />
              Add Funds
              </button>
              <button className='flex items-center justify-center gap-1.5 w-fit h-11 px-5 bg-transparent rounded-full font-primary text-white text-[14px] font-bold border border-white/60 hover:shadow-soft'>
                Withdraw
              </button>
              </div>
            </div>

            <span className="balance flex flex-col gap-1">
              <h2 className='text-[38px] text-white font-primary font-bold tracking-[-0.4px]'>$100,000.<b className='text-[30px]'>00</b></h2>
              <p className='text-[14px] text-white/75 font-primary'>Total Balance</p>
            </span>

            <div className="flex gap-6 flex-1/3 relative mt-6">
              <div className="bg-[#f6f9ff]/15 border border-foam/20 h-fit w-full rounded-lg p-4">
                <span className='flex items-center p-1 px-3 rounded-full bg-white/10 w-fit gap-1.5 text-[12px] font-primary font-bold text-white'> <WalletIcon color='#fff' className="scale-70" /> AVAILABLE </span>

                <h2 className='font-primary text-white font-bold text-[30px] mt-3'>$53,500.<b className='text-[25px]'>00</b></h2>
                <p className='text-white/75 font-primary text-[12px] mt-0.5'>Free to use &nbsp;&nbsp; <b className='text-[12px] text-success'>+5 contributions</b></p>
              </div>
              <div className="bg-[#f6f9ff]/15 border border-foam/20 h-fit w-full rounded-lg p-4">
                <span className='flex items-center p-1 px-3 rounded-full bg-white/10 w-fit gap-1.5 text-[12px] font-primary font-bold text-white'> <WalletIcon color='#fff' className="scale-70" /> LOCKED </span>

                <h2 className='font-primary text-white font-bold text-[30px] mt-3'>$47,500.<b className='text-[25px]'>00</b></h2>
                <p className='text-white/75 font-primary text-[12px] mt-0.5'>In 1 active pool</p>
              </div>
              <div className="bg-[#f6f9ff]/15 border border-foam/20 h-fit w-full rounded-lg p-4">
                <span className='flex items-center p-1 px-3 rounded-full bg-white/10 w-fit gap-1.5 text-[12px] font-primary font-bold text-white'> <WalletIcon color='#fff' className="scale-70" /> POOLS </span>

                <h2 className='font-primary text-white font-bold text-[30px] mt-3'>2 Active</h2>
                <p className='text-white/75 font-primary text-[12px] mt-0.5'><b className='text-[12px] text-splash'>20/24 contributions</b></p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App