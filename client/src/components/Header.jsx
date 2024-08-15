import PropTypes from 'prop-types';

const Header = ({ title, description }) => {
  return (
    <div className="h-[375px] w-full flex flex-col items-center justify-center bg-[#f8f296] px-3">
      <h1 className='max-w-[750px] mb-4 text-center lg:text-4xl text-xl text-gray-900 font-semibold'>{title}</h1>
      <p className='max-w-[650px] text-center lg:text-lg text-[15px] text-gray-900'>{description}</p>
    </div>
  );
};

// Define prop types for the Header component
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Header;
