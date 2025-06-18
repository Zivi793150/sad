import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, hideButton }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  // Вычисляем процент скидки, если есть discount_price
  const hasDiscount = product.discount_price && product.discount_price < product.price;
  const discountPercent = hasDiscount
    ? Math.round(100 - (product.discount_price / product.price) * 100)
    : null;

  const handleAdd = e => {
    e.preventDefault();
    dispatch(addToCart({ id: product.id }));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className={styles.cardWrap}>
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
        {!hideButton && (
          <button
            className={added ? styles.addedBtn : styles.addBtn}
            onClick={handleAdd}
            disabled={added}
          >
            {added ? 'Added' : 'Add to cart'}
          </button>
        )}
      </Link>
    </div>
  );
};

export default ProductCard; 