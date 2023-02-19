'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login () {
  return (
    <div className='bg-gradient-to-br from-cyan-500 to-indigo-600 h-screen flex flex-col items-center justify-center'>
        <Image src="/gpt.png" 
        width={200} height={200} alt="logo" />
        <button onClick={() => signIn('google')} className='text-white font-bold text-3xl animate-pulse'>Sign in to use myGpt</button>
    </div>
  )
}

export default Login