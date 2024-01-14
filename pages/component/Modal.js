import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 " onClick={handleOverlayClick}>
            <div className="bg-white p-8 rounded shadow-lg">
                {children}
                <button
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
