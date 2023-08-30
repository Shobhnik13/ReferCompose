'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const LandingAnimation = () => {
  return (
    <div id='about' className='flex gap-x-4 px-20 pt-44 pb-20'>
            <div className='w-[30%] space-y-4'>
                <h1 className='text-2xl font-bold text-violet-700/80'>Generate the best cold email templates!</h1>
                <p className=' text-violet-700/70'>Introducing our AI-powered Cold Emailing SaaS, a game-changer in securing job referrals.Elevate your job search with tailored cold emails that leave a lasting impression.</p>
                <Link href={'/'}>
                <Button className='w-full mt-4' onClick={()=>window.scrollTo(0,0)}>Get Started</Button>
                </Link>
            </div>
            <div>
                <div>

                </div>
            </div>
    </div>
     )
}

export default LandingAnimation