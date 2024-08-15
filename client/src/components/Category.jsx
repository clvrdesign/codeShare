import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({name}) => {
  return (
    <div className='cursor-pointer hover:bg-gray-800 bg-gray-900 py-2 px-4 ease-out duration-150 rounded-full'>
        <Link to='/category' className='text-gray-400'>{name}</Link>
    </div>
  )
}

// Define prop types for the Category component
Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Category