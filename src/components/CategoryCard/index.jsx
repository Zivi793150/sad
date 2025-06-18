import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className={styles.card}>
      <img
        className={styles.image}
        alt={category.title}
        src={category.image}
      />
      <h3 className={styles.title}>{category.title}</h3>
    </Link>
  );
};

export default CategoryCard; 