import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Post = ({title, thumbnail, content}) => {
  return (
    <div>
        <h2>{title}</h2>
        <img src={thumbnail} alt="img" />
        <p>{content}</p>
    </div>
  )
}

// Define prop types for the Post component
Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default Post