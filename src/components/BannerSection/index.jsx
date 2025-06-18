import React from 'react';
import styles from './BannerSection.module.css';

const BannerSection = () => (
  <section className={styles.banner}>
    <img className={styles.bg} src="/assests/02-head.png" alt="Banner" />
    <div className={styles.overlay}>
      <h1 className={styles.title}>Amazing Discounts on Garden Products!</h1>
      <a href="#sale" className={styles.button}>Check out</a>
    </div>
  </section>
);

export default BannerSection; 