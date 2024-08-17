import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [validationErrors, setValidationErrors] = useState({}); // Validation errors

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/categories/')
      .then((response) => {
        setCategories(Array.isArray(response.data) ? response.data : []);
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

  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "Title is required.";
    }

    if (!formData.imageUrl.trim()) {
      errors.imageUrl = "Image URL is required.";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp|)$/i.test(formData.imageUrl)) {
      errors.imageUrl = "Image URL must be a valid image URL (jpg, jpeg, png, gif, bmp, webp).";
    }

    if (!formData.category) {
      errors.category = "Category is required.";
    }

    if (!formData.content.trim()) {
      errors.content = "Content is required.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If validation fails, do not proceed with the submission.
    }

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
        setValidationErrors({});
        navigate('/posts')
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


      <div className="w-full">
        <h1 className="text-3xl text-center text-gray-300 font-bold mt-10">Add post</h1>
        <form
          className="flex flex-col justify-center gap-2 my-10"
          method="post"
          onSubmit={handleSubmit}
        >
          {submitError && (

            <div className="bg-red-950 text-red-100 p-2 border border-red-700">
              <small>
                {submitError}
              </small>
            </div>

          )}

          {validationErrors.title && (
            <small className="text-red-500 text-sm">{validationErrors.title}</small>
          )}
          <input
            className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />

          {validationErrors.imageUrl && (
            <small className="text-red-500 text-sm">{validationErrors.imageUrl}</small>
          )}
          <input
            className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
            placeholder="Image url"
            type="text"
            name="imageUrl"
            value={formData.imageUrl || ""}
            onChange={handleChange}
          />

          {validationErrors.category && (
            <small className="text-red-500 text-sm">{validationErrors.category}</small>
          )}
          <select
            className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
          >
            <option value="" disabled>Select category</option>
            {Array.isArray(categories) && categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>

          {validationErrors.content && (
            <small className="text-red-500 text-sm">{validationErrors.content}</small>
          )}
          <textarea
            name="content"
            value={formData.content || ""}
            onChange={handleChange}
            placeholder="Content"
            className="w-full min-h-[150px] p-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
          ></textarea>



          <button
            type="submit"
            className="w-full h-10 px-2 outline-none rounded-md font-semibold text-gray-900 bg-[#f8f296]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Add post'}
          </button>
        </form>
      </div>


    </>
  );
}

export default CreatePage;
