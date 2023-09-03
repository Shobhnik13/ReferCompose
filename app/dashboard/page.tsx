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
      
      <div>
        <div>
          <FormComp/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage