import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
