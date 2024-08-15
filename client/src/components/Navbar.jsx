import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Navbar = ({addPost}) => {
  return (
    <nav className="sticky top-0 left-0 py-5 px-3 shadow-sm bg-[#f8f296] lg:border-none border-b border-[#ece890] z-40">
        <div className="max-w-[1200px] m-auto flex justify-between items-center">
            <Link to='/' className="w-full h-[35px]">
                <img className="h-full cursor-pointer md:block hidden" src={assets.logo} alt="" />
                <img className="h-full cursor-pointer md:hidden block" src={assets.logo_small} alt="" />
            </Link>
            <ul className="flex items-center text-gray-900 gap-4 text-xl font-bold">
                <li className="cursor-pointer">
                    Posts
                </li>
                <li onClick={addPost} className="cursor-pointer flex items-center">
                    Create
                </li>
            </ul>
        </div>
    </nav>
  )
}
Navbar.propTypes = {
    addPost: PropTypes.func.isRequired,
};

export default Navbar