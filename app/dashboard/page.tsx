import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import LandingNav from "../../components/landing-nav"
import { cookies } from "next/headers";
import {redirect} from 'next/navigation'
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
const DashboardPage = async() => {
  const supabase=createServerComponentClient({cookies});
  const {data}=await supabase.auth.getSession()
  //if user failed to logged in then redirect to auth page
  if(!data.session){
    redirect('/auth')
  }
  // console.log(data)
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default DashboardPage