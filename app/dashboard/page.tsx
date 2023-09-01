import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import LandingNav from "../../components/landing-nav"
import { cookies } from "next/headers";
import {redirect} from 'next/navigation'
import Navbar from "../../components/navbar";
import FormComp from "../../components/Formcomp";
const DashboardPage = async() => {
  const supabase=createServerComponentClient({cookies});
  const {data}=await supabase.auth.getSession()
  //if user failed to logged in then redirect to auth page
  if(!data.session){
    redirect('/auth')
  }
  return (
    <div>
      <Navbar/>
      <h1 className="text-center text-3xl/snug font-semibold pb-10 text-transparent bg-clip-text bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-600">Enter your details</h1>
      <div>
        <div>
          <FormComp/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage