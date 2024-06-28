import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import classes from './header.module.css'; // Ensure you have this CSS file
import { FaUser, FaTimes } from 'react-icons/fa'; // Add react-icons for icons
import { FiLogOut } from 'react-icons/fi';

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleLogout = () => {
    // Run logout logic here
    logout();
    // Run additional function or logic here
    closeMenu();
  };


  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to='/' className={classes.logo}>
          <image src='/icons/black-full-logo' />
          Trading View
        </Link>
        <div className={classes.menuToggle} onClick={toggleMenu}>
          ☰
        </div>
        <nav ref={menuRef} className={`${classes.nav} ${menuOpen ? classes.show : ''}`}>
          <div className={classes.closeMenu} onClick={closeMenu}>
            <FaTimes />
          </div>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to='/' className={classes.navLink} onClick={closeMenu}>Home</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='/about' className={classes.navLink} onClick={closeMenu}>About</Link>
            </li>
            <li className={classes.navItem}>
              <Link to='/services' className={classes.navLink} onClick={closeMenu}>Services</Link>
            </li>
            {user ? (
              <>
                <li className={`${classes.navItem} ${classes.desktopOnly}`}>
                  <Link to='/profile' className={classes.navLink} onClick={closeMenu}>
                    <FaUser />
                  </Link>
                </li>
                <li className={`${classes.navItem} ${classes.desktopOnly}`}>
                  <Link to='/login' className={classes.navLink} onClick={handleLogout}>
                    <FiLogOut />
                  </Link>
                </li>
                <li className={`${classes.navItem} ${classes.mobileOnly}`}>
                  <Link to='/profile' className={classes.navLink} onClick={closeMenu}>Profile</Link>
                </li>
                <li className={`${classes.navItem} ${classes.mobileOnly}`}>
                  <Link to='/login' className={classes.navLink} onClick={handleLogout}>Logout</Link>
                </li>
              </>
            ) : (
              <li className={classes.navItem}>
                <Link to='/login' className={classes.navLink} onClick={closeMenu}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
