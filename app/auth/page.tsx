import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthComp from "./components/Authcomp"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const AuthPage = async() => {
  const supabase=createServerComponentClient({cookies})
  const {data}=await supabase.auth.getSession()
  //now if user is there we dont need to show this page instead go to dashboard
  if(data.session){
    redirect('/dashboard')
  }
  return (
    <div>
      {/* now client getting render in server so we can use data.session  */}
      <AuthComp/>
    </div>
  )
}

export const dynamic = "force-dynamic"
export default AuthPage