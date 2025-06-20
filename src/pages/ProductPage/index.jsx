import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import ContactSection from '../../components/ContactSection';
import styles from './ProductPage.module.css';

const API_URL = 'http://localhost:3333/products';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        }
      });
  }, [id]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  const discount = product.discont_price && product.price
    ? Math.round(100 - (product.discont_price / product.price) * 100)
    : null;

  const handleAdd = () => {
    dispatch(addToCart({ id: product.id, quantity: count }));
    setAdded(true);
    setCount(1);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productBlock}>
        <div className={styles.imageBlock}>
          <img
            src={`http://localhost:3333/${product.image}`}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.priceRow}>
            <span className={styles.price}>{product.discont_price || product.price} ₽</span>
            {product.discont_price && (
              <span className={styles.oldPrice}>{product.price} ₽</span>
            )}
            {discount && (
              <span className={styles.discount}>-{discount}%</span>
            )}
          </div>
          <div className={styles.cartRow}>
            <div className={styles.counterWrap}>
              <button onClick={() => setCount(c => Math.max(1, c - 1))} className={styles.counterBtn}>-</button>
              <span className={styles.count}>{count}</span>
              <button onClick={() => setCount(c => c + 1)} className={styles.counterBtn}>+</button>
            </div>
            <button
              className={added ? styles.addedBtn : styles.addToCart}
              onClick={handleAdd}
              disabled={added}
            >
              {added ? 'Added' : 'Add to cart'}
            </button>
          </div>
          <div className={styles.descBlock}>
            <h2 className={styles.descTitle}>Description</h2>
            <p className={styles.desc}>{product.description}</p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ProductPage; 