import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DiscountFormSection.module.css';

const DiscountFormSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Здесь будет логика отправки формы
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        5% off on the first order
      </h2>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt="Gardening tools and plants"
            src="/assests/image.png"
          />
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                {...register('name', { required: 'Name is required' })}
                className={styles.input}
                placeholder="Name"
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                {...register('phone', { required: 'Phone number is required' })}
                className={styles.input}
                placeholder="Phone number"
              />
              {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={styles.input}
                placeholder="Email"
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
          </form>

          <button 
            onClick={handleSubmit(onSubmit)}
            className={styles.submitButton}
          >
            Get a discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountFormSection; 