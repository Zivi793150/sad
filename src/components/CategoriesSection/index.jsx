import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard';
import styles from './CategoriesSection.module.css';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Fertilizer",
      image: "/assests/img-4.png",
    },
    {
      id: 2,
      title: "Protective products and septic tanks",
      image: "/assests/img-5.png",
    },
    {
      id: 3,
      title: "Planting material",
      image: "/assests/img-6.png",
    },
    {
      id: 4,
      title: "Tools and equipment",
      image: "/assests/img-7.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Categories</h2>
        
        <div className={styles.separatorContainer}>
          <div className={styles.separator} />
          <Link to="/categories" className={styles.allButton}>
            All categories
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection; 