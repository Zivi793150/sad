import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ContactSection from '../../components/ContactSection';
import styles from './SalePage.module.css';

const allProducts = [
  {
    id: 1,
    name: 'Secateurs',
    currentPrice: 199,
    originalPrice: 240,
    discount: 17,
    image: '/assests/img-3.png',
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
    image: '/assests/img (16).png',
  },
  {
    id: 4,
    name: 'Souvenir thermometer',
    currentPrice: 98,
    originalPrice: 120,
    discount: 18,
    image: '/assests/img (15).png',
  },
  {
    id: 5,
    name: 'Decorative forged bridge',
    currentPrice: 500,
    originalPrice: 1000,
    discount: 50,
    image: '/assests/img.png',
  },
  {
    id: 6,
    name: 'Flower basket',
    currentPrice: 100,
    originalPrice: 150,
    discount: 34,
    image: '/assests/img-1.png',
  },
  {
    id: 7,
    name: 'Aquarium lock',
    currentPrice: 150,
    originalPrice: 200,
    discount: 25,
    image: '/assests/img-2.png',
  },
];

const SalePage = () => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sort, setSort] = useState('default');

  // Фильтрация по цене
  const filteredProducts = allProducts.filter(product => {
    const from = priceFrom ? product.currentPrice >= Number(priceFrom) : true;
    const to = priceTo ? product.currentPrice <= Number(priceTo) : true;
    return from && to;
  });

  // Сортировка
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-asc') return a.currentPrice - b.currentPrice;
    if (sort === 'price-desc') return b.currentPrice - a.currentPrice;
    if (sort === 'discount') return (b.discount || 0) - (a.discount || 0);
    return 0;
  });

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
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default SalePage; 