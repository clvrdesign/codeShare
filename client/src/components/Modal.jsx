import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    // Close the modal when the Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {isOpen && (
                <div
                    className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-50 z-50"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="max-w-[1200px] m-auto bg-white overflow-hidden rounded-2xl">
                        <div className="min-w-[926px] p-4 relative">
                            {children}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full"
                                aria-label="Close modal"
                            >
                                x
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
