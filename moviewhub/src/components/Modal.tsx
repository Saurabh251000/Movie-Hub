"use client";
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-red-600 px-4 py-2 rounded mt-4"
        >
          <X/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
