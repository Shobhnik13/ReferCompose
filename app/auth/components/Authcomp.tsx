'use client'
import {  Zap } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"

const AuthComp = () => {
  const supabase=createClientComponentClient()
      const handleLogin=()=>{
        supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
          redirectTo:`${location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
    },
    })
      }
  return (
    <div>
        {/* <LandingNav type="auth"/> */}
        <div className="flex justify-center items-center h-[85vh]">
          <Card className="rounded-xl shadow-md shadow-gray-100 scale-110 bg-purple-100/10">
            <div className="p-8 flex space-y-5 flex-col items-center justify-center">
              <p className="text-2xl/snug font-semibold text-purple-600/60">Get your free cold email template now!!</p>
              <Button onClick={handleLogin} className="border-none text-lg bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-400 text-black">Login with Google <Zap className="fill-black ml-1 "/> </Button>
            </div>
          </Card>
        </div>
    </div>
  )
}

export default AuthComp