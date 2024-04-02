import React from 'react'
import { footerNavLinks } from '../utils/const'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full text-white py-[2rem] px-[30px] lg:px-[50px] xl:px-0 bg-gradient-to-tr from-cyan-700 via-sky-500 to-blue-500'>
      <div className="container">
        <div className="flex flex-col gap-[30px] lg:gap-[100px] lg:flex-row items-center justify-between">
          <div className="flex flex-col gap-[20px] md:gap-0 md:flex-row md:items-center justify-between w-full">
            {
              footerNavLinks.map((item) => {
                return (
                  <div className="flex flex-col gap-[20px]" key={item.id}>
                    <h1 className='font-bold text-[1.3rem]'>{item.title}</h1>
                    <div className="flex flex-col gap-[10px]">
                      {
                        item.links.map((link, idx) => {
                          return (
                            <Link key={idx} href='#' className='border-b border-b-blue-800 hover:border-b-white'>{link}</Link>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          
          <Image src='/logo.png' width={250} height={250} alt='logo' />
        </div>

        <p className='mt-[50px] text-[.8rem]'>2024 Studio Ghibli Inc.</p>
      </div>
    </footer>
  )
}

export default Footer