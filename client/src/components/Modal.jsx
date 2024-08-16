import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    // Close the modal when the Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                console.log("Escape pressed, closing modal");
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleCloseClick = (e) => {
        e.stopPropagation(); // Stop event propagation
        console.log("Close button clicked");
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-50 z-50"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="max-w-[810px] m-auto bg-gray-950 rounded-2xl">
                        <div className="p-4 relative text-gray-100">
                            {children}
                            <button
                                onClick={handleCloseClick}
                                className="hidden absolute -top-10 right-0 w-[35px] h-[35px] items-center justify-center text-gray-50 bg-opacity-25 text-[12px] bg-gray-900 rounded-full"
                                aria-label="Close modal"
                            >
                               <i className="fi fi-rr-x"></i>
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
