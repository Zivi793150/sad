import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
  // Корректно формируем абсолютный путь к изображению
  let imageUrl = category.image;
  if (imageUrl.startsWith('/')) {
    imageUrl = `http://localhost:3333${imageUrl}`;
  } else if (!imageUrl.startsWith('http')) {
    imageUrl = `http://localhost:3333/public/category_img/${imageUrl}`;
  }

  return (
    <Link to={`/category/${category.id}`} className={styles.card}>
      <img
        className={styles.image}
        alt={category.title}
        src={imageUrl}
        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px', background: '#f5f5f5' }}
      />
      <h3 className={styles.title}>{category.title}</h3>
    </Link>
  );
};

export default CategoryCard; 