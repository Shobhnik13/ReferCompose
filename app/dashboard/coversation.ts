"use client"
 
import * as z from "zod"
 
export const formSchema = z.object({
    senderName: z.string().min(1,{message:'field is required'}),
    receiverName: z.string().min(1,{message:'field is required'}),
    title: z.string().min(1,{message:'field is required'}),
    experience: z.string().min(1,{message:'field is required'}),
    company:z.string().min(1,{message:'field is required'}),
    type:z.string().min(1,{message:'field is required'}),
    tech:z.string().min(1,{message:'field is required'}),
})

export const typeOpts=[
    {
        value:'Full-time',
        title:'Full-time'
    },
    {
        value:'Internship',
        title:'Internship'
    },
]