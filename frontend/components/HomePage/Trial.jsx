"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button';
const Trial = () => {
  return (
    <>
    <div className='py-11 '>
        <div className='text-center text-2xl md:text-5xl font-semibold p-4'>
            <h3>Get Your First Trial visit</h3>

        </div>
    <div className='flex flex-row space-x-2 py-5 justify-center '>
    <Input type="email" placeholder="Email" className="w-2/6 " />
    <Button className="bg-main">Subscribe</Button>
    </div>
    </div>

    
    </>
  )
}

export default Trial