
import React from 'react';
import { Message, Sender } from '../types';
import { marked } from 'marked';

// Configure marked to handle markdown rendering
marked.setOptions({
  breaks: true, // Add <br> on a single line break
  gfm: true, // Use GitHub Flavored Markdown
});

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  // Sanitize and parse the markdown content
  const renderedHtml = marked.parse(message.text, { async: false }) as string;

  const bubbleClasses = isUser
    ? 'bg-purple-600 text-white rounded-br-none'
    : 'bg-white text-gray-800 rounded-bl-none shadow-md';

  const containerClasses = isUser ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex ${containerClasses}`}>
      <div className={`rounded-lg p-3 max-w-xl ${bubbleClasses}`}>
        <div 
          className="prose prose-sm max-w-none text-inherit"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      </div>
    </div>
  );
};

export default ChatBubble;
