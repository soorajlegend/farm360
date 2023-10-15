import { farmerAssistantChat } from '@/data'
import React from 'react'
import ChatMessage from './chat-message'

const ChatBody = () => {


    return (
        <div className='flex flex-col flex-1 w-full h-full overflow-y-auto'>
            {
                farmerAssistantChat.map((chat) => (
                    <ChatMessage
                        key={chat.id}
                        data={chat}
                    />
                ))
            }
        </div>
    )
}

export default ChatBody