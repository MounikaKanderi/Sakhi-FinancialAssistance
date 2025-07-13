
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-10">
      <div className="max-w-4xl mx-auto py-4 px-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55V11.55zM16.5 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM21 8v11c-3.48-2.2-6.64-3.55-9-3.55V8c3.48 0 6.64 1.35 9 3.55V8z" opacity=".3" />
              <path d="M12 11.55c2.36-2.2 5.52-3.55 9-3.55V19.5c-3.48-2.2-6.64-3.55-9-3.55V11.55zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-7.5-6c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm3 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
            </svg>
          <div>
             <h1 className="text-2xl font-bold text-gray-800">Sakhi</h1>
             <p className="text-sm text-purple-600">Your Financial Guide for a Brighter Future</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
