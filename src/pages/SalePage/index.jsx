import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import ProductCard from '../../components/ProductCard';
import ContactSection from '../../components/ContactSection';
import styles from './SalePage.module.css';

const SalePage = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector(state => state.products);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Фильтруем только товары со скидкой
  let saleProducts = products.filter(p => p.discont_price && p.discont_price < p.price);

  // Фильтрация по цене
  if (priceFrom) {
    saleProducts = saleProducts.filter(p => (p.discont_price || p.price) >= Number(priceFrom));
  }
  if (priceTo) {
    saleProducts = saleProducts.filter(p => (p.discont_price || p.price) <= Number(priceTo));
  }

  // Сортировка
  if (sort === 'price-asc') {
    saleProducts = [...saleProducts].sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price));
  } else if (sort === 'price-desc') {
    saleProducts = [...saleProducts].sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price));
  } else if (sort === 'discount') {
    saleProducts = [...saleProducts].sort((a, b) => ((b.price - (b.discont_price || b.price)) - (a.price - (a.discont_price || a.price))));
  }

  // Формируем абсолютный путь к изображению
  const getImageUrl = (image) =>
    image && image.startsWith('/')
      ? `http://localhost:3333${image}`
      : image && !image.startsWith('http')
        ? `http://localhost:3333/public/product_img/${image}`
        : image;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discounted items</h1>
      <div className={styles.filters}>
        <div className={styles.priceFilter}>
          <span className={styles.filterLabel}>Price</span>
          <input
            type="number"
            placeholder="from"
            className={styles.input}
            value={priceFrom}
            onChange={e => setPriceFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="to"
            className={styles.input}
            value={priceTo}
            onChange={e => setPriceTo(e.target.value)}
          />
        </div>
        <div className={styles.sortFilter}>
          <span className={styles.filterLabel}>Sorted</span>
          <select
            className={styles.select}
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">by default</option>
            <option value="price-asc">by price (asc)</option>
            <option value="price-desc">by price (desc)</option>
            <option value="discount">by discount</option>
          </select>
        </div>
      </div>
      <div className={styles.grid}>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Failed to load products</div>}
        {status === 'succeeded' && saleProducts.map(product => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              image: getImageUrl(product.image),
              price: product.price,
              discount_price: product.discont_price
            }}
          />
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default SalePage; 