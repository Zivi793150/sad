import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice';
import CategoryCard from '../../components/CategoryCard';
import ContactSection from '../../components/ContactSection';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { items: categories, status } = useSelector(state => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.row}>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Failed to load categories</div>}
        {status === 'succeeded' && categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default CategoriesPage; 