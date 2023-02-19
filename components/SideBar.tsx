'use client'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

import { collection } from 'firebase/firestore'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import ChatRow from './ChatRow'

function SideBar() {

    const { data: session } = useSession()



    const [chats, loading, error] = useCollection(
        session &&collection(db, "users", session?.user?.email!, "chats"));
    

    // console.log(chats)
    return (
        <div className='flex flex-col h-screen bg-gray-200 text-white p-3 space-y-3 w-[15rem]'>
            <div className='flex-1 w-full'>

                <div className='w-full flex flex-col space-y-2'>

                    {/* new chat */}
                    <NewChat />

                    <div>
                    {/* model selection */}
                    </div>


                    {
                    chats?.docs?.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />

                    )  )
                    }





                </div>
            </div>
            {session &&
                <div className='flex flex-row justify-between items-center w-full p-2 hover:shadow-xl text-gray-800 bg-gray-50 rounded-xl'>
                    <div className='flex'>
                        <ArrowRightOnRectangleIcon className='w-12 font-bold h-8' />
                        <span>logout</span>
                    </div>
                    <img onClick={() => signOut()} src={session.user?.image!} className='h-10 w-1o rounded-xl  hover:opacity-50 cursor-pointer' alt='profile pic' />
                </div>}
        </div>
    )
}

export default SideBar