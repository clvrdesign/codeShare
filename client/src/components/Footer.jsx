import { useState, useEffect } from "react"

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(year)
    }, [year])

    return (
        <div className="max-w-[1200px] m-auto flex items-center justify-center text-gray-600 text-center border-t border-gray-900 py-5">
            &copy; {year} codeShare | Alright reserved
        </div>
    )
}

export default Footer