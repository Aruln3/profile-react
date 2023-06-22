import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the corresponding CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop >190);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`header ${isSidebarOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`logo-container ${isScrolled ? 'show' : ''}`}>
        <div className="logo">Arul D</div>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
        <li onClick={() => window.location.href = '/home'}>Home</li>
    <li onClick={() => window.location.href = '/about'}>About</li>
    <li onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
