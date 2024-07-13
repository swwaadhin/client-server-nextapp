"use client"
import {useState} from "react"
import axios from "axios";
export function Signup(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center ">
            <div className="p-4 border rounded pb-4">
        <input onChange={(e)=>{
            setEmail(e.target.value);
        }} className="p-2" type="text"  placeholder="username"></input>
        <br />
        <br />
        <input onChange={(e)=>{
            setPassword(e.target.value);
        }} className="p-2" type="password" p-2 placeholder="password"></input>
         <br />
         <br />
         <div className="flex justify-center">
        <button onClick={()=>{
            axios.post("http://localhost:3000/api/user",{
            email,
            password
            })
        }} >signup</button>
        </div>
        <br />
        </div>
        </div>
    </div> 

}