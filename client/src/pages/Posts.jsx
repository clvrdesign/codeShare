import { useState } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
// import { Link } from "react-router-dom";

const AllPosts = () => {
    // const [modalOpen, setModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (data) => {
        setSelectedPost(data);
        // toggleModal();
      };
      
    return (
        <div className="bg-gray-950">
            <Navbar />
            <Header>
                <form action="" className="relative lg:w-[550px] w-[310px] mb-7">
                    <input type="search" name="" id="" className="w-full h-14 outline-none px-12 rounded-full" />
                    
                        <i className="fi fi-rr-search absolute top-[18px] left-5"></i>
                    
                </form>
                <p className='max-w-[650px] text-center lg:text-lg text-[15px] text-gray-900'>
                    Stay up-to-date with the latest developments in the world of technology and software development.
                </p>
            </Header>
            <div className="w-full pt-10">
                <div className="max-w-[1200px] m-auto flex flex-wrap px-3">
                    <Categories />
                </div>
            </div>

            <div className="w-full py-10">
                <div className="max-w-[1200px] m-auto flex flex-col items-center px-3">
                    <Posts onPostClick={handlePostClick} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AllPosts