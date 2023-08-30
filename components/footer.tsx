import { ArrowBigUp, Zap } from "lucide-react"
import { Card } from "./ui/card"

const Footer = () => {
  return (
    <Card className="w-full flex justify-center items-center sticky text-xl  p-2 py-4 text-center shadow-2xl rounded-none bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Design and developed by <div className="flex gap-x-1"><span className=" underline font-semibold ml-1 text-2xl"><a href="https://shobhnik.vercel.app/" target="_blank">Shobhnik</a></span><Zap className="mt-1 fill-black"/></div>  
    </Card>
  )
}

export default Footer