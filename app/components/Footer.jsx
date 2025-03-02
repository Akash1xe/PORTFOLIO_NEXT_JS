import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div >
           <p className='text-black text-3xl flex justify-center'>Akash kumar</p>
           <p className='flex text-2xl text-red-400 font-bold self-end '>.</p>
           <div className='w-max flex items-center gap-2 mx-auto'><Image src={assets.mail_icon} alt='' className='w-6' />
           akashkumar086mth@gmail.com
           
           </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                2025 Akash kumar. All right reserved. </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://github.com/Akash1xe">GitHub</a>

                    </li>
                    <li>
                        <a target='_blank' href="https://x.com/AKASH74067">Twitter</a>
                        
                    </li>

                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/akash-shrivastav-3b172a344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkeDln</a>
                        
                    </li>


                </ul>
            
        </div>
    </div>
  )
}

export default Footer