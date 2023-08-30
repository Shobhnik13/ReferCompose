'use client'
import { Button } from "./ui/button"


const LandingNav = () => {
  return (
    <nav className="z-10 flex justify-between items-center p-4">
         {/* logo  */}
      <div className="">
        </div>
        <div className="flex gap-x-40 font-bold list-none text-lg items-center text-violet-700/80">
          <li>
            <a href="#about" className=" hover:text-violet-700/40 text-xl">About</a>
          </li>
          <li>
            <a href="#features" className=" hover:text-violet-700/40 text-xl">Features</a>
          </li>
        </div>
        <div className="">
           <Button variant='outline' className="rouned-full text-sm md:text-lg hover:scale-90 duration-100 transition-all hover:bg-purple-900/30">Get Started</Button>
        </div>
    </nav>
  )
}

export default LandingNav