import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost"
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
    <div className="bg-gray-950">
      {modalOpen && selectedPost && (
        <Modal>
          <CreatePost/>
        </Modal>
      )}
      <Navbar addPost={toggleModal} />
      <Header
        title="Your Hub for the Latest in Development News and Features"
        description="Stay up-to-date with the latest developments in the world of technology and software development."
      />
      <div className="w-full py-10">
        <div className="max-w-[1200px] m-auto px-3">
          <h1 className="lg:text-3xl text-2xl font-bold text-center text-gray-300 m-10">
            Latest posts
          </h1>
          <Posts onPostClick={handlePostClick} />
        </div>
      </div>
      <div className="w-full pt-10 pb-20">
        <div className="max-w-[1200px] m-auto flex flex-wrap px-3">
          <Categories />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
