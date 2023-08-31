'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router=useRouter()
    const supabase=createClientComponentClient()
    const handleLogout=async()=>{
        try{
            await supabase.auth.signOut();
            router.refresh()
        }catch(error:any){

        }
    }

  return (
    <div className="p-4 flex justify-between items-center">
      <div></div>
      <div>  
        <Button onClick={handleLogout} variant='outline' className="rouned-full text-sm md:text-lg hover:scale-90 duration-100 transition-all hover:bg-purple-900/30">
          Logout
        </Button>
        </div>
      </div>
  )
}

export default Navbar