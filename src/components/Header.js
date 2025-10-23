import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={menuActive ? 'active' : ''}>
      <Link to="/" className="logo">S & L</Link>
      <div 
        className={`menuToggle ${menuActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
      </div>
      <nav className={menuActive ? 'active' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="#" id="NavNum">+1 6474094430</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;