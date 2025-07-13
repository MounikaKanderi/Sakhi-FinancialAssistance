
import React, { useState } from 'react';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const SendIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);


const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask me anything about Indian financial schemes..."
        disabled={isLoading}
        className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-200 transition-shadow duration-200"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-purple-600 text-white rounded-full p-3 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300 disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Send Message"
      >
        <SendIcon className="w-6 h-6"/>
      </button>
    </form>
  );
};

export default MessageInput;
