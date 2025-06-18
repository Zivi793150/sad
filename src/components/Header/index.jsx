import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
  const menuItems = [
    { label: "Main Page", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "All products", href: "/products" },
    { label: "All sales", href: "/sales" },
  ];

  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img
          className={styles.plantIcon}
          alt="Plant"
          src="/assests/plant.svg"
        />
        <img
          className={styles.groundIcon}
          alt="Ground"
          src="/assests/ground.svg"
        />
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link to={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Shopping cart icon */}
      <div className={styles.cartIcon}>
        <Link to="/cart">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header; 