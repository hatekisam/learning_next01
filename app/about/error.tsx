"use client"

import { useEffect } from "react"



export default function Error({error,reset}:{error:Error,reset:()=>void}) {
        useEffect(()=>{
                console.log(error)
        },[])
  return (
    <div>Error</div>
  )
}
