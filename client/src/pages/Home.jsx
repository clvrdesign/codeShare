import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Posts from "../components/Posts"

const Home = () => {
  return (
    <>
        <Navbar />
        <Header
          title="Your Hub for the Latest in Development News and Features"
          description="Stay up-to-date with the latest developments in the world of technology and software development."
        />
        <div className="max-w-[1200px] m-auto">
          <h1 className="text-3xl font-bold text-center mt-10">Latest posts</h1>
          <Posts />
        </div>
    </>
  )
}

export default Home