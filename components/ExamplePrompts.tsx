
import React from 'react';

interface ExamplePromptsProps {
  onPromptClick: (prompt: string) => void;
}

const prompts = [
  'Schemes for starting a new business?',
  'How to apply for a Mudra loan?',
  'What is Sukanya Samriddhi Yojana?',
  'MSME registration for women?',
];

const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onPromptClick }) => {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 font-medium mb-2 text-center">Don't know where to start? Try one of these:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt)}
            className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;
