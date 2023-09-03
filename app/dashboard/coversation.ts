"use client"
 
import * as z from "zod"
 
export const formSchema = z.object({
    senderName: z.string().min(1,{message:'field is required'}),
    receiverName: z.string().min(1,{message:'field is required'}),
    title: z.string().min(1,{message:'field is required'}),
    experience: z.string().min(1,{message:'field is required'}),
    company:z.string().min(1,{message:'field is required'}),
})