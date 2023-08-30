'use client'

import { CheckCircleIcon, FileCheck, MailIcon, UsersIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { cn } from "../lib/utils"
import TypewriterComponent from "typewriter-effect"

const LandingAbout = () => {
    const services=[
        {
            id:1,
            title:"Mailing",
            icon:MailIcon,
            desc:'Unlock a new era of seamless communication with our Cold Emailing SaaS, empowering you to effortlessly reach prospects, establish connections, and foster relationships with just a few clicks',
            iconColour:'text-emerald-500',
            bgColor:'bg-emerald-500/10'
        },
        {
            id:2,
            title:"Networking",
            icon:UsersIcon,
            desc:"Revolutionize your networking game with our Cold Emailing SaaS, effortlessly connecting you with professionals, mentors, and opportunities for meaningful interactions.",
            iconColour:'text-blue-500',
            bgColor:'bg-blue-500/10'
        },
        {
            id:3,
            title:"Getting your dream job",
            icon:FileCheck,
            desc:'Our SaaS harnesses advanced algorithms to tailor cold emails with recipient-specific details, ensuring each message resonates on an individual level while reaching a broad audience',
            iconColour:'text-pink-500',
            bgColor:'bg-pink-500/10'
        },
    ]
  return (
    <div className="pt-52 mb-20 flex flex-col items-center justify-center" id="features">
        <div className="text-center font-bold text-3xl/snug text-violet-800/90">
        <TypewriterComponent 
        options={{
            strings:[
                'Features',
            ],
            autoStart:true,
            loop:true,
        }}
        />
        </div>
            {/* <h1 >Features</h1> */}
            <div className="flex flex-col md:flex-row items-center justify-between px-16 gap-x-12 mt-20">
                {services.map((item)=>(
                    <Card key={item.id} className="border-none mb-16 rounded-lg hover:shadow-xl hover:scale-110 duration-150 cursor-pointer transition-all bg-inherit">
                        <div className={cn("p-4 rounded-md w-full flex justify-center",item.bgColor)}>
                            <item.icon className={cn("w-10 h-10 ",item.iconColour)}/>
                        </div>
                      <CardHeader className="gap-y-2">
                        <div className="flex gap-x-2">
                        <CardTitle>{item.title}</CardTitle>
                        <CheckCircleIcon className="bg-green-500/10 flex mt-1 text-green-500"/>
                        </div>
                        <CardDescription>{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                ))}
            </div>
    </div>
  )
}

export default LandingAbout