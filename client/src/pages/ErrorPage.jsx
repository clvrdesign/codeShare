import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
        <Navbar/>
        <Header>
        <h1 className='max-w-[750px] mb-4 text-center lg:text-4xl text-xl text-gray-900 font-semibold'>
          Error 404
        </h1>
        <p className='max-w-[650px] text-center lg:text-lg text-[15px] text-gray-900'>
          Stay up-to-date with the latest developments in the world of technology and software development.
        </p>
        </Header>
        <div className="text-gray-50">ErrorPage</div>
        <Footer/>
    </>
  )
}

export default ErrorPage