'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';


type Props = {
  id: string
}
function ChatInput({ id }: Props) {
  const [prompt, setPrompt] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState<number>(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { data: session } = useSession();


  //TODO: useSWR to get model 
  const model = "text-davinci-003"



  const handleTextAreaInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
      if (!textAreaRef.current.value) {
        textAreaRef.current.style.height = '40px';
      }
      return;
    }
  };


  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
      message
    );


    // toast notification to say thinking
    const notification = toast.loading('I am thinking...')



    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId: id,
        model,
        session
      }),
    }).then(() => {
      // toast message
      toast.success('Here is my response!',  {
        id: notification,
      });
    })


  }

  return (
    <div className="w-full h-auto px-2 md:px-5 pb-2 md:pb-7 ">
      <form onSubmit={sendMessage} className='shadow-xl bg-white  rounded-xl px-5 py-2 items-end flex w-full md:max-w-3xl lg:max-w-5xl md:mx-auto h-auto'>
        <textarea
          ref={textAreaRef}
          onInput={handleTextAreaInput}
          value={prompt}
          disabled={!session}
          rows={1}
          onChange={(e) => setPrompt(e.target.value)}
          className='flex-1 py-2 outline-none resize-none  hide-scrollba  min-h-[40px]' />
        <button type='submit' disabled={!prompt || !session} className='bg-transparent hover:opacity-50 cursor-pointer'>
          <PaperAirplaneIcon className='w-6 h-6' />
        </button>
      </form>
    </div>
  )

}


export default ChatInput