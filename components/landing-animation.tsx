'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from './ui/card'
import TypewriterComponent from 'typewriter-effect'
import { ArrowUp } from 'lucide-react'
const companies=[
  {
    id:2,
    link:'/amazon.png',
    title:'Amazon'
  },
  {
    id:3,
    link:'/twitter.png',
    title:'Twitter'
  },
  {
    id:4,
    link:'/instagram.png',
    title:'Instagram'
  },
  {
    id:5,
    link:'/facebook.png',
    title:'Facebook'
  },
  {
    id:6,
    link:'/amex.png',
    title:'American-Express'
  },
  {
    id:7,
    link:'/phonepe.png',
    title:'PhonePe'
  },
  {
    id:9,
    link:'/walmart.png',
    title:'Walmart'
  },
  {
    id:10,
    link:'/ms.png',
    title:'Microsoft'
  },
  {
    id:11,
    link:'/razorpay.png',
    title:'Razorpay'
  },
  {
    id:12,
    link:'/netflix.png',
    title:'Netflix'
  },
  {
    id:13,
    link:'/adobe.png',
    title:'Adobe'
  },
]
const LandingAnimation = () => {
  return (
    <div id='about' className='flex gap-x-4 px-20  pb-20 pt-56'>
            <div className='w-[30%] space-y-4'>
                <h1 className='text-2xl font-bold text-violet-700/80'>Generate the best cold email templates and get hired in top companies across the globe!</h1>
                <p className=' text-violet-700/70'>Introducing our AI-powered Cold Emailing SaaS, a game-changer in securing job referrals.Elevate your job search with tailored cold emails that leave a lasting impression.</p>
                <Link href={'/'}>
                <Button className='w-full mt-4' onClick={()=>window.scrollTo(0,0)}>Get Started <ArrowUp className='w-4 h-4'/></Button>
                </Link>
            </div>
            <div className='w-[60%]'>
                <div className=' mt-24 gap-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide relative flex'>
                  {companies.map((item)=>(
                    <Card key={item.id} className='justify-start inner bg-inherit border-none p-10'><Image src={item.link} fill alt='logo' className='w-full h-full'/></Card>
                  ))}
                </div>
                <div className="pt-6 text-center text-2xl/snug font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-500 via-purple-600 to-pink-600">
        <TypewriterComponent
                    options={{
                        strings:[
                         'Emails that can get you placed in top notch companies!!'
                        ],
                        autoStart:true,
                        loop:true,
                    }}/>
        </div>
            </div>
    </div>
     )
}

export default LandingAnimation