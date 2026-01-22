"use client"

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default function AboutPage(){
    
    const [data,setData]=useState();
    const [error,setError]=useState <{message:string } | null> (null);
    console.log(data);
    console.log(error);
    useEffect(()=>{
        (async()=>{
            const {data,error} = await getBlogs();
            setData(data);
            setError(error)
        })();
    },[])
    // throw new Error("Something went wrong");

    return(
        <div>
            <h1>This is a about page component</h1>
        </div>
    );
}