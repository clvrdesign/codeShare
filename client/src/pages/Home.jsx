import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Categories from "../components/Categories";
import Modal from "../components/Modal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handlePostClick = (data) => {
    setSelectedPost(data);
    toggleModal();
  };

  return (
    <>
      {modalOpen && selectedPost && (
        <Modal>
          <div>
            <h2 className='text-xl font-semibold'>{selectedPost.title}</h2>
            <div className="relative w-full h-[250px] my-4 overflow-hidden rounded-2xl">
              <img className='w-full h-full object-cover' src={selectedPost.thumbnail} alt={selectedPost.title.slice(0, 10)} />
            </div>
            <p>{selectedPost.content}</p>
            <p className='text-gray-500'>{new Date(selectedPost.date).toDateString()}</p>
          </div>
        </Modal>
      )}
      <Navbar />
      <Header
        title="Your Hub for the Latest in Development News and Features"
        description="Stay up-to-date with the latest developments in the world of technology and software development."
      />
      <div className="w-full py-10">
        <div className="max-w-[1200px] m-auto px-3">
          <h1 className="lg:text-3xl text-2xl font-bold text-center m-10">
            Latest posts
          </h1>
          <Posts onPostClick={handlePostClick} />
        </div>
      </div>
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-[1200px] m-auto px-3">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
