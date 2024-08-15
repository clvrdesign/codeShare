import { useState } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

const AllPosts = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handlePostClick = (data) => {
        setSelectedPost(data);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Assuming you have an array of posts data
    const postsData = [
        // Example data
        { id: 1, title: "Post 1", content: "Content of Post 1" },
        { id: 2, title: "Post 2", content: "Content of Post 2" },
        // Add more posts here...
    ];

    // Filter posts based on search query
    const filteredPosts = postsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-950">
            <Navbar />
            <Header>
                <form action="" className="relative lg:w-[550px] w-[310px] mb-7">
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search posts..."
                        aria-label="Search posts"
                        className="w-full h-14 outline-none px-12 rounded-full"
                    />
                    <i className="fi fi-rr-search absolute top-[18px] left-5 text-gray-500"></i>
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
                    <Posts onPostClick={handlePostClick} posts={filteredPosts} />
                </div>
            </div>

            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="lg:w-1/3 md:w-1/2 w-full bg-white p-6 rounded-3xl shadow-lg m-4">
                        <h2 className="text-2xl mb-4">{selectedPost.title}</h2>
                        <img className="w-full h-[215px] object-cover rounded-2xl" src={selectedPost.imageUrl} alt="" />
                        <p className="my-4 text-justify">{selectedPost.content}</p>

                        <button
                            onClick={() => setSelectedPost(null)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default AllPosts;
