'use client'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {inter} from '@/lib/fonts'
import {ChatMessageList} from '@/components/chat-message-list'
import {PromptForm} from '@/components/prompt-form'
import {useChat} from 'ai/react'
import {nanoid} from 'ai'


export default function Home() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [{
            role: 'assistant',
            content: 'Hi! I\'m a conversational AI model. You can talk to me through your microphone - just make sure that your volume is turned up!',
            id: nanoid(12)
        }]
    });


    return (

        //  Header Bar
        <main className={'flex min-h-screen max-h-screen flex-col items-center justify-between w-screen'}>
            <header className={'bg-gray-900 text-white py-4 px-6 flex items-center justify-between w-full'}>
                <h1 className={'text-xl font-bold'}> Private Siri</h1>
                <div className={'flex flex-row items-center gap-4'}>
                    {/*<Button variant={'ghost'} size={'icon'}>
                        <SettingsIcon className={'h-5 w-5'}/>
                        <span className={'src-only'}>Settings</span>
                    </Button>*/}
                    <Avatar className={'w-8 h-8 border'} style={inter.style}>
                        <AvatarImage src={'/placeholder.svg'} alt={'avatar'}/>
                        <AvatarFallback className={'text-gray-900'}>KM</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            {/* Chat Messages*/}
            <section className={'w-full flex-grow overflow-auto p-6 bg-gray-100 dark:bg-gray-950 flex flex-col'}>
                <ChatMessageList messages={messages}/>
            </section>

            {/* Toolbar*/}
            <section className={'w-full bg-gray-200 dark:bg-gray-950 p-4 flex flex-row items-center gap-2'}>
                <PromptForm input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </section>

        </main>
    );
}
