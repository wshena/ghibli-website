'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navigationLink } from '../utils/const'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from '@/app/utils/Icons'
import { useGlobalState } from '../utils/globalContextProvider'

const Navbar = () => {
  const {menuClick, setMenuClick, closeMenu} = useGlobalState();
  const route = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    setMenuClick(!menuClick)
  };
    
  const handleRoute = (link:string) => {
    route.push(link)
  }

  return (
    <nav className={`text-white container w-full p-[1rem] flex items-center justify-between md:px-[3rem] lg:px-[50px] xl:px-0`}>
      <Link href={'/'} className='order-2 md:order-1'>
        <Image src={'/logo.png'} alt='logo' width={100} height={100} />
      </Link>

      {/* Mobile Nav */}
      <button className='block md:hidden order-1' onClick={handleClick}>
        <Menu size={25} color='black' />
      </button>

      <div className={`z-50 fixed md:hidden top-20 w-full h-[100vh] transition-all duration-[1000ms] ease-linear ${menuClick ? 'right-0' : 'right-[80rem]'} p-[1rem] bg-gradient-to-tr from-cyan-700 via-sky-500 to-blue-500`}>
        <ul className='flex flex-col gap-[1rem]'>
          {
            navigationLink.map((item) => {
              const link = item.link
              return (
                <li key={item.id} onClick={() => {
                  handleRoute(item.link);
                  closeMenu();
                }} className='cursor-pointer relative nav-item'>
                  <Link href={item.link} className='font-bold text-[1.6rem] md:text-[16px]'>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* Mobile Nav */}

      <ul className='hidden md:flex items-center gap-[1rem] order-2'>
        {
          navigationLink.map((item) => {
            const link = item.link
            return (
              <li key={item.id} onClick={() => handleRoute(link)} className={`cursor-pointer relative nav-item ${link === pathname && 'border-b border-white'}`}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar