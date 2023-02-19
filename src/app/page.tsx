import React from 'react'
import {ExclamationTriangleIcon, BoltIcon, SunIcon } from '@heroicons/react/24/outline'

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-black h-screen'>
      <div className='flex flex-col items-center space-y-20'>
        <h1 className='text-5xl font-semibold'>rajGpt</h1>
        <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-3 w-full px-5 max-w-4xl'>
          <div className='flex flex-col items-center space-y-5 w-full'>
            {/* sun */}
            <SunIcon className="h-8 w-8" />
            <p className=''>Examples</p>

            <div className='flex flex-col space-y-3 w-full'>
              <p className='infoText'>"Explain quantum computing in simple terms" →</p>
              <p className='infoText'>"Got any creative ideas for a 10 year old’s birthday?" →</p>
              <p className='infoText'>"How do I make an HTTP request in Javascript?" →</p>
            </div>
          </div>
          <div className='flex flex-col items-center space-y-5 w-full'>
            {/* sun */}
            <BoltIcon className="h-8 w-8" />
            <p className=''>Capabilities</p>

            <div className='flex flex-col space-y-3 w-full'>
              <p className='infoText'>Remembers what user said earlier in the conversation</p>
              <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
              <p className='infoText'>Trained to decline inappropriate requests</p>
            </div>
          </div>
          <div className='flex flex-col items-center space-y-5 w-full'>
            {/* sun */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <p className=''>Limitations</p>

            <div className='flex flex-col space-y-3 w-full'>
              <p className='infoText'>May occasionally generate incorrect information</p>
              <p className='infoText'>"Got any creative ideas for a 10 year old’s birthday?" →</p>
              <p className='infoText'>Limited knowledge of world and events after 2021</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Homepage