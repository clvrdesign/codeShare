

const Form = () => {

    const validateForm = (onChange, onSubmit, ) => {
        const errors = {};

        if (!formData.title.trim()) {
            errors.title = "Title is required.";
        }

        if (!formData.imageUrl.trim()) {
            errors.imageUrl = "Image URL is required.";
        } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(formData.imageUrl)) {
            errors.imageUrl = "Image URL must be a valid image URL (jpg, jpeg, png, gif, bmp).";
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

    

    return (
        <div className="w-1/4">
            <h1 className="text-3xl text-center text-gray-300 font-bold mt-10">Add post</h1>
            <form
                className="flex flex-col items-center justify-center gap-2 my-10"
                method="post"
                onSubmit={onSubmit}
            >
                <input
                    className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={formData.title || ""}
                    onChange={onChange}
                />

                <input
                    className="w-full h-10 px-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
                    placeholder="Image url"
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl || ""}
                    onChange={onChange}
                />

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


                <textarea
                    name="content"
                    value={formData.content || ""}
                    onChange={handleChange}
                    placeholder="Content"
                    className="w-full min-h-[150px] p-2 outline-none rounded-md text-gray-400 placeholder:text-gray-700 bg-gray-900"
                ></textarea>


                <button
                    type="submit"
                    className="w-full h-10 px-2 outline-none rounded-md font-semibold bg-[#f8f296]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Add post'}
                </button>
            </form>
        </div>
    )
}

export default Form