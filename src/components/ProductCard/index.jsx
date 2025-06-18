import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Вычисляем процент скидки, если есть discount_price
  const hasDiscount = product.discount_price && product.discount_price < product.price;
  const discountPercent = hasDiscount
    ? Math.round(100 - (product.discount_price / product.price) * 100)
    : null;

  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={product.title}
          src={product.image}
        />
        {hasDiscount && (
          <div className={styles.badge}>
            -{discountPercent}%
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{product.title}</h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>
            {hasDiscount ? `${product.discount_price} ₽` : `${product.price} ₽`}
          </span>
          {hasDiscount && (
            <span className={styles.originalPrice}>
              {product.price} ₽
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 