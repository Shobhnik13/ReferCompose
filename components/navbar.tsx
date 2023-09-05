'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { error } from "console"




const Navbar = () => {
    const router=useRouter()
    const supabase=createClientComponentClient()
    const [dialog,setDialog]=useState(false)
    const handleLogout=()=>{
      setDialog(prev=>!prev);
    }
    const handleLogout2=async()=>{
      try{
            await supabase.auth.signOut();
            router.refresh()
        }catch(error:any){
          toast.error('Something went wrong!')
          console.log('error logging out!',error)
        }
    }
  return (
    <div className="p-4 flex justify-between items-center">
      <div>  
        <Link href={'/'}>
        <Button variant='outline' className="rouned-full text-sm md:text-lg hover:scale-90 duration-100 transition-all hover:bg-purple-900/30">
          <ArrowLeft className="mr-1 w-4 h-4"/> Go back to home page
        </Button>
        </Link>
        </div>
      <div className="relative">  
        <Button onClick={handleLogout} variant='outline' className="rouned-full text-sm md:text-lg hover:scale-90 duration-100 transition-all hover:bg-purple-900/30">
          Logout
        </Button>
        {dialog && 
        <div className="bg-purple-500/20 z-99 absolute right-2 mt-5 rounded-lg w-[300px] p-7 ">
        <h2 className="mb-4 text-lg font-semibold">Are you sure you want to logout?</h2>
        <div className="flex items-center justify-center gap-x-4 ">
            <Button className="w-[60%]" onClick={()=>setDialog(false)}>No</Button>
            <Button className="w-[60%]" onClick={handleLogout2}>Yes</Button>
        </div>
    </div>}
        </div>
      </div>
  )
}

export default Navbar