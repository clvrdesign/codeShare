import { assets } from "../assets/assets"

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 py-5 px-3 bg-[#f8f296] lg:border-none border-b border-[#ece890] z-40">
        <div className="max-w-[1200px] m-auto flex justify-between items-center">
            <div className="w-full h-[35px]">
                <img className="h-full cursor-pointer md:block hidden" src={assets.logo} alt="" />
                <img className="h-full cursor-pointer md:hidden block" src={assets.logo_small} alt="" />
            </div>
            <ul className="flex items-center gap-4 text-xl font-bold">
                <li className="cursor-pointer">
                    Posts
                </li>
                <li className="cursor-pointer flex items-center">
                    Create
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar