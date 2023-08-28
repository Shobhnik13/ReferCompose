'use client'
import { Button } from "./ui/button"


const LandingNav = () => {
  return (
    <nav className="z-10 flex justify-between items-center p-4">
         {/* logo  */}
      <div className="">
        </div>
        <div className="">
           <Button variant='outline' className="rouned-full text-sm md:text-lg hover:scale-90 duration-100 transition-all hover:bg-purple-900/30">Get Started</Button>
        </div>
    </nav>
  )
}

export default LandingNav