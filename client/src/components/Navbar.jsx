import { assets } from "../assets/assets"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 py-5 px-3 shadow-sm bg-[#f8f296] lg:border-none border-b border-[#ece890] z-40">
        <div className="max-w-[1200px] m-auto flex justify-between items-center">
            <Link to='/' className="w-full h-[35px]">
                <img className="h-full cursor-pointer md:block hidden" src={assets.logo} alt="" />
                <img className="h-full cursor-pointer md:hidden block" src={assets.logo_small} alt="" />
            </Link>
            <ul className="flex items-center justify-between text-gray-900 lg:gap-10 gap-4 text-lg font-medium">
                <Link to='/' className="w-fit cursor-pointer text-gray-500">
                    Home
                </Link>
                <Link to='/trends' className="w-fit cursor-pointer">
                    Trends
                </Link>
                <Link to='/create' className="w-fit cursor-pointer flex items-center">
                    Create
                </Link>
            </ul>
        </div>
    </nav>
  )
}


export default Navbar