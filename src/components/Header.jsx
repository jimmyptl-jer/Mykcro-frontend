import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing the FiMenu and FiX icons


const Header = () => {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-black mt-10  px-4 py-2 md:px-8 md:py-4" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="self-center text-lg sm:text-xl font-semibold flex items-center hover:underline"
          style={{ color: 'black' }}
        >
          Myckro
        </Link>

        {/* Hamburger menu button for mobile view */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="w-6 h-6" style={{ color: 'black' }} /> : <FiMenu className="w-6 h-6" style={{ color: 'black' }} />}
        </button>

        {/* Sliding window for navigation links */}
        <div className={`fixed top-0 right-0 h-full bg-white w-4/5 md:hidden z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <FiX className="w-6 h-6 text-black" />
            </button>
          </div>
          <nav className="flex flex-col items-center pt-8 gap-20">
            <Link to="/" className={`text-black ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`text-black ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
            <Link to="/project" className={`text-black ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
          </nav>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex md:items-center md:ml-auto md:justify-center bg-white md:bg-transparent md:px-4 md:py-2">
          <ul className="md:flex gap-4">
            <li className="hidden md:block">
              <Link to="/" className={`text-black ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/about" className={`text-black ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/dashboard" className={`text-black ${path === '/dashboard' ? 'font-bold' : ''}`} onClick={closeMenu}>Dashboard</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/services" className={`text-black ${path === '/service' ? 'font-bold' : ''}`} onClick={closeMenu}>Services</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/business" className={`text-black ${path === '/business' ? 'font-bold' : ''}`} onClick={closeMenu}>Business</Link>
            </li>
            <li>
              <Link to="/login" className="text-black hover:text-purple-500 font-semibold" onClick={closeMenu}>Login</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
