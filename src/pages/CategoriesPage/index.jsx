import React from 'react';
import CategoryCard from '../../components/CategoryCard';
import ContactSection from '../../components/ContactSection';
import styles from './CategoriesPage.module.css';

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
  {
    id: 5,
    title: "Pots and planters",
    image: "/assests/posts.png",
  },
];

const CategoriesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.row}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default CategoriesPage; 