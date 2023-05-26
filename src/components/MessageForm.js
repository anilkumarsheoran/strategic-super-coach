import { Button, TextArea } from '@apideck/components';
import { useState } from 'react';
import { useMessages } from './../utility/useMessage';

const MessageForm = () => {
  const [content, setContent] = useState('');
  const { addMessage } = useMessages();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    addMessage(content);
    setContent('');
  };

  return (
    <form className="relative mx-auto max-w-3xl mb-16 " onSubmit={handleSubmit}>
      <div className=" border-gray-200 h-[130px] mx-4  ">
        {/* <label htmlFor="content" className="sr-only">
          Your message
        </label> */}
        <div className='grid grid-cols-6 gap-x-4 mb-5'>
        <input
          name="content"
          placeholder="Enter your message here..."
          rows={3}
          value={content}
          autoFocus
          className="w-full h-42 rounded-xl col-span-5 p-2"
          onChange={(e) => setContent(e.target.value)}
        />
        <button>
        <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="42" rx="21" fill="#1A3B8E"/>
            <rect width="44" height="42" rx="21" fill="url(#paint0_linear_26_3644)"/>
            <path d="M8.5 16.6L8.5 25.4M13 11.1L13 30.9M17.5 15.5V26.5M22 13.3L22 28.7M26.5 10V32M31 14.4V27.6M35.5 19.35V22.65" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_26_3644" x1="33.8148" y1="1.16667" x2="15.2674" y2="38.0452" gradientUnits="userSpaceOnUse">
            <stop offset="0.162393" stop-color="#7BABF5"/>
            <stop offset="1" stop-color="#C4D1E5" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        </button>
        </div>
        <div className="">
          <div className="w-full">
          <button className="bg-blue-1 w-full h-10 justify-center  text-white font-bold py-2 px-4 rounded-3xl flex ">
            {'Enter '} 
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2 rotate-180"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg> */}
            </button>
           
          </div>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
