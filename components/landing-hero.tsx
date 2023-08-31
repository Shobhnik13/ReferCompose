'use client'
import TypewriterComponent from "typewriter-effect"
import { Button } from "./ui/button"
import Link from "next/link"
interface LandingHeroProps{
isUser:boolean
}
const LandingHero = ({isUser}:LandingHeroProps) => {
  return (
    <div>
        <div className="gradient-01 z-0"/>
        <div className="z-10 pt-20 mt-20 flex flex-col items-center justify-center backdrop-blur-xl">
        <div className="text-center w-[85%] text-fuchsia-800 text-5xl/snug font-extrabold backdrop-blur-3xl ">
            <p>The Ultimate AI powered tool to generate cold email templates!!!</p>
        </div>
        <div className="pt-6 text-5xl/tight font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-700 via-purple-600 to-pink-600">
        <TypewriterComponent
                    options={{
                        strings:[
                            'Making mailing easy!',
                            'Making connections',
                            'Establishing contacts',
                            'Collaborating',
                            'Communicating'
                        ],
                        autoStart:true,
                        loop:true,
                    }}/>
        </div>
        <div className="text-md/snug pt-2 text-purple-900/70">
            <p>Elevate Your Cold Emails with AI SaaS Magic!</p>  
        </div>
        <div className="pt-6" >
        <Link href={'/dashboard'}>
        <Button className="bg-gradient-to-r from-violet-500/80 to-pink-300/80 px-20 py-4 text-xl hover:scale-110 transition-all duration-200">Start Exploring!</Button>
        </Link>
        </div>
        </div>
    </div>  
  )
}

export default LandingHero