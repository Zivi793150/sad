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
          <img src="/assests/basket=empty.svg" alt="Cart" width={48} height={48} />
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header; 