'use client';


import { PlusIcon } from '@heroicons/react/24/outline'
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

function NewChat() {
    const router = useRouter()

    const {data: session} = useSession()

const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
    });

    router.push(`/chat/${doc.id}`);
}



  return (
    <button 
    onClick={createNewChat}
    className='flex space-x-3 text-center bg-gray-100 w-full p-3  hover:shadow-xl border-[1px] border-gray-50 text-gray-800 rounded-lg font-semibold'><PlusIcon className='w-6 h-6 font-bold' /><span> New chat</span></button>
  )
}

export default NewChat