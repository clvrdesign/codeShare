import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({name}) => {
  return (
    <div className='border'>
        <Link to='/category'>{name}</Link>
    </div>
  )
}

// Define prop types for the Category component
Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Category