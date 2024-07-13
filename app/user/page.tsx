
import Image from "next/image";

import axios from "axios"; 


async function fetchdata(){
const response=await axios.get("http://localhost:3000/api/user")
await new Promise(r=>setTimeout(r,5000));
console.log("response is "+JSON.stringify(response.data));
return response.data;
}


export  default async function User() {
    const data=await fetchdata();
  
   
  return (
    <div>
      {data.name}
      <br />
      {data.email}
      <br />

    </div>
  );
}
