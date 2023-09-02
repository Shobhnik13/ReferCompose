'use client'


import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formSchema } from '../app/dashboard/coversation'
import { Zap } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/navigation'
const FormComp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          senderName:"",
          receiverName:'',
          title:"",
          experience:"",
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
  return (
    <div className='w-[60%] m-auto'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg flex justify-center items-center flex-col gap-y-16">
            {/* sender name  */}
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
                  <FormItem className="w-full ">
                        <FormControl >
                          <Input placeholder="Receiver's name" disabled={isLoading} className=" text-lg  focus:border-1 border-gray-300 outline-none focus-visible:ring-0 focus-visible:ring-transparent" {...field} />
                        </FormControl>
                  </FormItem>
                )}/>
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
                  <Button type="submit" className="bg-gradient-to-r from-indigo-500 text-black via-purple-500 to-pink-500 col-span-12 md:col-span-2 w-full text-lg " disabled={isLoading}>{isLoading?'Generating...':`Generate`}</Button>
            </form>
          </Form>
          {message && (
            <div>
              {message}
            </div>
          )}
    </div>
  )
}

export default FormComp