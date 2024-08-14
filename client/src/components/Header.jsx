import PropTypes from 'prop-types';

const Header = ({ title, description }) => {
  return (
    <div className="h-[375px] w-full bg-[#f8f296]">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

// Define prop types for the Header component
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Header;
