import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import ProductCard from '../ProductCard';
import styles from './SaleSection.module.css';

const SaleSection = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Фильтруем только товары со скидкой
  const saleProducts = products.filter(product => product.discount_price && product.discount_price < product.price);

  // Формируем абсолютный путь к изображению
  const getImageUrl = (image) =>
    image.startsWith('http')
      ? image
      : `http://localhost:3333/public/product_img/${image}`;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        
        <div className={styles.separatorContainer}>
          <div className={styles.separator} />
          <Link to="/sales" className={styles.allButton}>
            All sales
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Failed to load products</div>}
        {status === 'succeeded' && saleProducts.map((product) => (
          <ProductCard key={product.id} product={{ ...product, image: getImageUrl(product.image) }} />
        ))}
      </div>
    </section>
  );
};

export default SaleSection; 