
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Message, Sender } from './types';
import { getBotResponseStream } from './services/geminiService';
import Header from './components/Header';
import ChatBubble from './components/ChatBubble';
import MessageInput from './components/MessageInput';
import ExamplePrompts from './components/ExamplePrompts';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: "Namaste! I'm Sakhi, your financial guide. How can I empower you today? You can ask me about government schemes, loans, or starting a business.",
      sender: Sender.BOT,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: Sender.USER,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: botMessageId, text: '', sender: Sender.BOT },
    ]);

    try {
      const stream = await getBotResponseStream(inputText);
      let fullResponse = '';
      for await (const chunk of stream) {
        fullResponse += chunk.text;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, text: fullResponse } : msg
          )
        );
      }
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: 'I apologize, but I encountered an issue. Please check your API key or try again later.',
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          {isLoading && (
             <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg p-3 max-w-lg shadow-md flex items-center space-x-2">
                    <span className="animate-pulse h-2 w-2 bg-purple-500 rounded-full"></span>
                    <span className="animate-pulse h-2 w-2 bg-purple-500 rounded-full delay-150"></span>
                    <span className="animate-pulse h-2 w-2 bg-purple-500 rounded-full delay-300"></span>
                </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
        <div className="max-w-4xl mx-auto">
          {messages.length <= 1 && <ExamplePrompts onPromptClick={handleSendMessage} />}
          <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </footer>
    </div>
  );
};

export default App;
