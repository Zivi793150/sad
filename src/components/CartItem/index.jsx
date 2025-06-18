import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ product, quantity, onRemove, onChangeQuantity }) => {
  let imageUrl = product.image;
  if (imageUrl && imageUrl.startsWith('/')) {
    imageUrl = `http://localhost:3333${imageUrl}`;
  } else if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `http://localhost:3333/public/product_img/${imageUrl}`;
  }

  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} alt={product.title} />
      <div className={styles.info}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.controls}>
          <button onClick={() => onChangeQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span className={styles.qty}>{quantity}</span>
          <button onClick={() => onChangeQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>{product.discont_price && product.discont_price < product.price ? product.discont_price : product.price} ₽</div>
        {product.discont_price && product.discont_price < product.price && (
          <div className={styles.oldPrice}>{product.price} ₽</div>
        )}
      </div>
      <button className={styles.remove} onClick={onRemove}>×</button>
    </div>
  );
};

export default CartItem; 