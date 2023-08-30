import LandingAbout from "../../components/landing-about"
import LandingAnimation from "../../components/landing-animation"
import LandingHero from "../../components/landing-hero"
import LandingNav from "../../components/landing-nav"

const LandingPage = () => {
  return (
    <div className="h-full">       
        <LandingNav/>
        <LandingHero/>
        <LandingAbout/>
        <LandingAnimation/>
    </div>
  )
}

export default LandingPage