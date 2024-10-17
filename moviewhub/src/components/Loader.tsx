"use client";
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader">
        <style jsx>{`
          .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #3498db;
            animation: spin 1s ease infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
