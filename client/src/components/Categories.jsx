import { useState, useEffect } from 'react';
import axios from 'axios'
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        axios.get('http://localhost:4000/categories')
          .then((response) => {
            setCategories(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []);

    if (loading) {
        return <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
            Loading categories...
        </div>;
    }

    if (error) {
        return <div className='flex items-center justify-center text-center text-[15px] rounded-xl text-gray-400 bg-gray-900 p-4'>
            {error.message}
        </div>;
    }

    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((data) => (
                <Category key={data.id} name={data.name} />
            ))}
        </div>
    );
};

export default Categories;
