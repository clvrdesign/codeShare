import { useState } from "react"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isOpen &&
                <div>
                    <h1>Modal is open</h1>
                    <button onClick={()=>setIsOpen(false)}>x</button>
                    This is a Modal
                </div>
            }
        </>
    )
}

export default Modal