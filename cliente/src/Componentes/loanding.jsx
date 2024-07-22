import React from 'react';

export function LoadingScreen() {
  return (
    <div className="flex bg-blue-200 z-50 h-full w-full items-center justify-center absolute flex-col  text-black gap-4">
      <div className="animate-spin w-32 h-32 border-8 rounded-full border-t-8 border-b-4 border-blue-500 animate-pulse"></div>
      <p>Loading...</p>
    </div>
  );
}

