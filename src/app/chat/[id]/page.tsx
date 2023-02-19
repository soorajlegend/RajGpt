import Chat from 'components/Chat'
import ChatInput from 'components/Chatinput'
import React from 'react'


type Props = {
    params: {
        id: string
    }
}

function ChatPage({params: {id}}: Props) {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            {/* chat section */}
            <Chat id={id} />
            {/* chat input section */}
            <ChatInput id={id} />
        </div>
    )
}

export default ChatPage