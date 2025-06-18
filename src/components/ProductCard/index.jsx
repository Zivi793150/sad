import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={product.name}
          src={product.image}
        />
        {product.discount && (
          <div className={styles.badge}>
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>
            ${product.currentPrice}
          </span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 