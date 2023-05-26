import MessageForm from './../components/MessageForm'
import MessagesList from './../components/MessageList'
import { MessagesProvider } from './../utility/useMessage'

export default function Chat(){
    return (
        <div style={{background:"radial-gradient(133.37% 152.07% at 8.54% 110.8%, rgba(255, 255, 255, 0.9) 48.8%, rgba(106, 162, 249, 0.39) 100%)"}}  className=' m-4 rounded-2xl'> 
            <MessagesProvider>
                <MessagesList />
                <div className="">
                    <MessageForm />
                </div>
            </MessagesProvider>
        </div>
    )
}