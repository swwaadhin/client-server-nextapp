import { PrismaClient } from "@prisma/client";
import { NextResponse,NextRequest } from "next/server";
import client from "@/db"; 

export async function GET(req:NextResponse){
    const user=await client.user.findFirst();
    
    return NextResponse.json({
        email:user?.email,
        name:"swadhin"
    })
}




 export async function POST(req:NextRequest){

    const body=await req.json();

   
      try{
    await client.user.create({
             data:{
                email:body.email,
                password:body.password
             }
    })

    return  NextResponse.json({
       body
    })
}catch(e){
  return NextResponse.json({
        message:"Error while signup",
    },{
        status:411

    
    })
}

}