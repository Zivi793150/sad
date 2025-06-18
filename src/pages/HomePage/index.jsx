import React from 'react';
import BannerSection from '../../components/BannerSection';
import CategoriesSection from '../../components/CategoriesSection';
import ContactSection from '../../components/ContactSection';
import DiscountFormSection from '../../components/DiscountFormSection';
import SaleSection from '../../components/SaleSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BannerSection />
        <CategoriesSection />
        <DiscountFormSection />
        <SaleSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage; 