import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CreatePage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    category: "",
    content: "",
  });
  const [submitError, setSubmitError] = useState(null); // Error state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false); // Submitting state

  useEffect(() => {
    axios.get('http://localhost:4000/categories/')
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    axios.post('http://localhost:4000/posts/', formData)
      .then(() => {
        alert("Post created successfully!");
        setFormData({
          title: "",
          imageUrl: "",
          category: "",
          content: "",
        });
      })
      .catch((error) => {
        setSubmitError(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
        Loading categories ...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
        {error.message}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-950 overflow-hidden">
        <div className="w-1/4">
          <h1 className="text-3xl text-center text-gray-300 font-bold mt-10">Add post</h1>
          <form 
            className="flex flex-col items-center justify-center gap-2 my-10" 
            method="post" 
            onSubmit={handleSubmit}
          >
            <input 
              className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" 
              placeholder="Title" 
              type="text" 
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
            <input 
              className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" 
              placeholder="Image url" 
              type="text" 
              name="imageUrl"
              value={formData.imageUrl || ""}
              onChange={handleChange}
            />
            <select 
              className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900" 
              name="category" 
              value={formData.category || ""}
              onChange={handleChange}
            >
              <option value="" disabled>Select category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <textarea
              name="content"
              value={formData.content || ""}
              onChange={handleChange}
              placeholder="Content"
              className="w-full min-h-[150px] p-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
            ></textarea>
            {submitError && (
              <div className='text-red-500'>{submitError}</div>
            )}
            <button 
              type="submit" 
              className="w-full h-10 px-2 outline-none rounded-md font-semibold bg-[#f8f296]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Add post'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatePage;
