import { useMessages } from './../utility/useMessage';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  return (
    <div className="max-w-3xl mx-auto pt-8">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user';
        if (message.role === 'system') return null;
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${
              i === 1 ? 'max-w-md' : ''
            }`}
            key={message.content}
          >
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? 'mr-2 bg-deep-blue text-white'
                  : 'ml-2  text-blue-1'
              }`}
            >
              {message.content.trim()}
            </div>
            
          </div>
        );
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
