import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
const CreatePage = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state


  useEffect(() => {
    axios.get('http://localhost:4000/category/')
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
        if (loading) {
          return <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
            Loading categories ...
          </div>;
        }
      
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        if (loading) {
          return <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
            Loading categories ...
          </div>;
        }
      
      });
  }, [loading, error])

  
  if (error) {
    return <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
      {error.message}
    </div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-950 overflow-hidden">
        <div className="w-1/4">
          <h1 className="text-3xl text-center text-gray-300 font-bold mt-10">Add post</h1>
          <form className="flex flex-col items-center justify-center gap-2 my-10" method="post">
            <input className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" placeholder="Title" type="text" />
            <input className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" placeholder="Image url" type="text" />
            <select className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" name="" id="">
              <option selected disabled>Select category</option>
              {categories &&
                categories.map(category=>(
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))
              }
            </select>
            <textarea name="" id="" className="w-full min-h-[150px] p-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900">

            </textarea>
            <button type="submit" className="w-full h-10 px-2 outline-none rounded-md font-semibold bg-[#f8f296]">Add post</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreatePage