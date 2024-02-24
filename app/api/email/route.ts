import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyDx7qXf6BA8KA8jtWEAwu2w5UL8siJXfIQ');

export async function POST(req:Request){
    try{
        const body=await req.json()
    const {senderName,receiverName,title,experience,company,type,tech}=body;
    if(!senderName){
        return new NextResponse('sender name is required!',{status:400})
    }

    if(!receiverName){
        return new NextResponse('receiver name is required!',{status:400})
    }

    if(!title){
        return new NextResponse('title is required!',{status:400})
    }
    
    if(!experience){
        return new NextResponse('experience is required!',{status:400})
    }
    if(!company){
        return new NextResponse('company is required!',{status:400})
    }
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `Generate a cold email for a ${title} role as a ${type} position in the company named ${company} where the sender name is ${senderName} and sender is having a previous experience in the applied field for ${experience} years and have worked on the techstack like ${tech} to the receiver whose name is ${receiverName}`

    const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

//   http://localhost:3000/dashboard/api/auth/callback/google
    return NextResponse.json(text)
}catch(error){
    console.log('api error!',error)
    return new NextResponse('Internal error',{status:500})
}
}