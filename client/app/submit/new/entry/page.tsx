"use client"

import { sendData } from '@/app/api/send/sendData'
import React from 'react'

export default function page() {
    async function submitHandler() {
        const body = {
            "message": "Testing POST API"
        }   

        const response = await sendData(body);

        console.log(response)
    }
  return (
    <div>
      <h1>This is the form submission page</h1>
      <button className='border-black border-4' onClick={submitHandler}>
        Submit data
      </button>
    </div>
  )
}
