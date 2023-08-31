import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Footer from "../../components/footer"
import LandingAbout from "../../components/landing-about"
import LandingAnimation from "../../components/landing-animation"
import LandingHero from "../../components/landing-hero"
import LandingNav from "../../components/landing-nav"
import { cookies } from "next/headers"
const LandingPage = async() => {
  const supabase=createServerComponentClient({cookies});
  const {data}=await supabase.auth.getSession()
  return (
    <div className="h-full">       
        <LandingNav isUser={data?true:false}/>
        <LandingHero isUser={data?true:false}/>
        <LandingAnimation/>
        <LandingAbout/>
        <Footer/>
    </div>
  )
}

export default LandingPage