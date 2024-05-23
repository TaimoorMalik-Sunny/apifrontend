// components/Modal.tsx

import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // Adjusted to include children prop
  }  
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children } : any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50" >
      <div className="bg-white p-6 rounded shadow-lg">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          Close
        </button>
        <div className="mt-0">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
