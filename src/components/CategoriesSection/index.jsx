import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice';
import CategoryCard from '../CategoryCard';
import styles from './CategoriesSection.module.css';

const CategoriesSection = () => {
  const dispatch = useDispatch();
  const { items: categories, status } = useSelector(state => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

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
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Failed to load categories</div>}
        {status === 'succeeded' && categories.slice(0, 4).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection; 