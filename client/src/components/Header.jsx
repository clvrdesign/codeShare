import PropTypes from 'prop-types';

const Header = ({ title, description }) => {
  return (
    <div className="h-[375px] w-full flex flex-col items-center justify-center bg-[#f8f296]">
      <h1 className='max-w-[550px] mb-4 text-center lg:text-3xl text-xl font-semibold'>{title}</h1>
      <p className='text-center lg:text-lg text-[15px]'>{description}</p>
    </div>
  );
};

// Define prop types for the Header component
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Header;
