import React from "react";

interface ModalProps {
  title: string;
  message: string;
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, message, imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-center">
      <div className="bg-white p-6 rounded shadow-lg relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          x
        </button>
        <h2 className="text-2xl font-bold mb-5">{title}</h2>
        {imageUrl && (
          <img src={imageUrl} alt="popup" className="w-52 h-52 mb-5" />
        )}
        <p className="text-lg whitespace-pre">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
