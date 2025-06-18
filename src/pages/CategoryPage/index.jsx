import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ContactSection from '../../components/ContactSection';
import styles from './CategoryPage.module.css';

const products = [
  {
    id: 1,
    name: 'Secateurs',
    currentPrice: 199,
    originalPrice: 240,
    discount: 17,
    image: '/assests/img (3).png',
  },
  {
    id: 2,
    name: 'Collection for berries (plastic)',
    currentPrice: 26,
    originalPrice: 35,
    discount: 26,
    image: '/assests/img (8).png',
  },
  {
    id: 3,
    name: 'Gloves (black)',
    currentPrice: 9,
    originalPrice: 14,
    discount: 36,
    image: '/assests/img (9).png',
  },
  {
    id: 4,
    name: 'Sickle-shaped hacksaw',
    currentPrice: 155,
    image: '/assests/img (12).png',
  },
  {
    id: 5,
    name: 'Bayonet shovel',
    currentPrice: 180,
    image: '/assests/img (10).png',
  },
  {
    id: 6,
    name: 'Garden pitchfork',
    currentPrice: 179,
    image: '/assests/img (13).png',
  },
  {
    id: 7,
    name: 'Barbell',
    currentPrice: 12,
    image: '/assests/img (14).png',
  },
  {
    id: 8,
    name: 'Souvenir thermometer',
    currentPrice: 98,
    originalPrice: 120,
    discount: 18,
    image: '/assests/img (15).png',
  },
];

const CategoryPage = () => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discounted, setDiscounted] = useState(false);
  const [sort, setSort] = useState('default');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tools and equipment</h1>
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
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={discounted}
            onChange={e => setDiscounted(e.target.checked)}
          />
          Discounted items
        </label>
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
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default CategoryPage; 