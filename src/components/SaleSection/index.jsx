import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import styles from './SaleSection.module.css';

const SaleSection = () => {
  const saleProducts = [
    {
      id: 1,
      name: "Decorative forged bridge",
      currentPrice: 500,
      originalPrice: 1000,
      discount: 50,
      image: "/assests/img.png",
    },
    {
      id: 2,
      name: "Flower basket",
      currentPrice: 100,
      originalPrice: 150,
      discount: 34,
      image: "/assests/img-1.png",
    },
    {
      id: 3,
      name: "Aquarium lock",
      currentPrice: 150,
      originalPrice: 200,
      discount: 25,
      image: "/assests/img-2.png",
    },
    {
      id: 4,
      name: "Secateurs",
      currentPrice: 199,
      originalPrice: 240,
      discount: 17,
      image: "/assests/img-3.png",
    },
  ];

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
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SaleSection; 