'use client'


import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formSchema, typeOpts } from '../app/dashboard/coversation'
import { ArrowLeft, CopyCheck, CopyIcon, Zap } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
const FormComp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          senderName:"",
          receiverName:'',
          title:"",
          company:"",
          experience:"",
          type:'Internship',
          tech:"",
        },
      })
      const router=useRouter()
      const isLoading=form.formState.isSubmitting
      const [message,setMessage]=useState('')
      const onSubmit=async(values: z.infer<typeof formSchema>)=>{
        try{

          const res=await axios.post('/api/email',values)
          setMessage(res.data);
          form.reset();
        }catch(error:any){
          console.log('error')
        }finally{
          router.refresh()
        }
      }
      const goback=()=>{
        setMessage('')
        setCopied(false)
      }
      const [copied,setCopied]=useState(false)
      const copyText=()=>{
        navigator.clipboard.writeText(message)
        setCopied(true);
      }
  return (
    <div className='w-[60%] m-auto'>
      <h1 className="text-center text-3xl/snug font-semibold pb-10 flex-col text-transparent bg-clip-text bg-gradient-to-r  from-indigo-400 via-purple-400 to-pink-600">{message?'Here is your email!!':'Enter your details'}</h1>
       {!message && <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg flex justify-center items-center flex-col gap-y-16">
            {/* sender name  */}
           <div className='flex flex-row gap-x-12 w-full'>
            <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem className="w-full ">
                        <FormControl >
                          <Input placeholder="Sender's name" disabled={isLoading} className=" text-lg focus:border-1 border-gray-400 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                {/* receivername  */}
                <FormField
                control={form.control}
                name="receiverName"
                render={({ field }) => (
                  <FormItem className="w-full">
                        <FormControl >
                          <Input placeholder="Receiver's name" disabled={isLoading} className=" text-lg  focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                </div>
                <div className='flex flex-row gap-x-12 w-full'>
            {/* title  */}
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full  ">
                        <FormControl >
                          <Input placeholder="Job Title" disabled={isLoading} className="text-lg focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                {/* company  */}
                <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-full  ">
                        <FormControl >
                          <Input placeholder="Company name" disabled={isLoading} className="text-lg focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                </div>
                <div className='flex flex-row gap-x-12 w-full'>
                {/* experience  */}
                <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="w-full ">
                        <FormControl >
                          <Input placeholder="Experience in the applied job title (in years)" disabled={isLoading} className="text-lg  focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                {/* type  */}
                <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem  className="w-[50%]">
                       <Select
                       disabled={isLoading}
                       value={field.value}
                       onValueChange={field.onChange}
                       defaultValue={field.value}>
                          <FormControl>
                              <SelectTrigger>
                                <SelectValue defaultValue={field.value}/>
                              </SelectTrigger>
                          </FormControl>
                          <SelectContent className=" text-lg  focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent">
                            {typeOpts.map((item)=>(
                                <SelectItem
                                key={item.value}
                                value={item.value}
                                >
                                  {item.title}
                                </SelectItem>
                            ))}
                          </SelectContent>
                       </Select>
                  </FormItem>
                )}/>
                </div>
                {/* techstack */}
                <FormField
                control={form.control}
                name="tech"
                render={({ field }) => (
                  <FormItem className="w-full ">
                        <FormControl >
                          <Input placeholder="Tech stack on which you are shipping stuff" disabled={isLoading} className=" text-lg  focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
                  <Button type="submit" className="mb-4 hover:scale-95 duration-150 transition-all bg-gradient-to-r from-indigo-500 text-black via-purple-500 to-pink-500 col-span-12 md:col-span-2 w-full text-lg " disabled={isLoading}>{isLoading?'Generating...':`Generate`} <Zap className='fill-black w-4 h-4 ml-1'/></Button>
            </form>
          </Form>}
          {message && (
            <div className=''>
              <div className='text-2xl text-emerald-500 bg-emerald-500/10  p-4 rounded-xl'>
              <TypewriterComponent
                    options={{
                        strings:[
                           `${message}`
                        ],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:99999,
                        delay:30,
                    }}/>
              </div>
              <div onClick={copyText} className='cursor-pointer bg-emerald-700 gap-x-2 flex justify-center items-center p-2  '>
                <h2 className='text-white text-lg'>{copied?'Successfuly copied!':'Copy to clipboard'}</h2>
                {copied ?( <CopyCheck className='text-white text-xl '/>):(<CopyIcon className='text-white text-xl '/>)}
              </div>
              <div className='flex justify-center items-center mt-4'>
                <Link href={'/dashboard'}>
                <Button className='gap-x-2 text-lg mb-4 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500' onClick={goback}><ArrowLeft/>Go back to form </Button>
                </Link>
              </div>
            </div>
          )}
    </div>
  )
}

export default FormComp