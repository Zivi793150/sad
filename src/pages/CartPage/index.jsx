import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem';
import ContactSection from '../../components/ContactSection';
import styles from './CartPage.module.css';
import { removeFromCart, changeQuantity, clearCart } from '../../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products.items);

  // Собираем товары корзины с данными о продукте
  const cartProducts = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean);

  const totalItems = cartProducts.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = cartProducts.reduce((sum, p) => sum + (p.discont_price && p.discont_price < p.price ? p.discont_price : p.price) * p.quantity, 0);

  // Форма заказа (заглушка)
  const [form, setForm] = React.useState({ name: '', phone: '', email: '' });
  const [showSuccess, setShowSuccess] = React.useState(false);
  const handleFormChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleOrder = e => {
    e.preventDefault();
    // TODO: отправка заказа
    dispatch(clearCart());
    setShowSuccess(true);
  };

  return (
    <div className={styles.cartPage}>
      {showSuccess && (
        <>
          <div className={styles.successOverlay} />
          <div className={styles.successPopup}>
            <button className={styles.closeBtn} onClick={() => setShowSuccess(false)}>&times;</button>
            <div className={styles.successTitle}>Congratulations!</div>
            <div className={styles.successText}>Your order has been successfully placed on the website.<br/>A manager will contact you shortly to confirm your order.</div>
          </div>
        </>
      )}
      <h1 className={styles.title}>Shopping cart</h1>
      <div className={styles.content}>
        <div className={styles.itemsBlock}>
          {cartProducts.length === 0 ? (
            <div className={styles.empty}>Cart is empty</div>
          ) : (
            cartProducts.map(product => (
              <CartItem
                key={product.id}
                product={product}
                quantity={product.quantity}
                onRemove={() => dispatch(removeFromCart(product.id))}
                onChangeQuantity={q => dispatch(changeQuantity({ id: product.id, quantity: q }))}
              />
            ))
          )}
        </div>
        <div className={styles.orderBlock}>
          <div className={styles.orderTitle}>Order details</div>
          <div className={styles.orderInfo}>
            <div>{totalItems} items</div>
            <div className={styles.orderTotalLabel}>Total</div>
            <div className={styles.orderTotal}>{totalPrice.toLocaleString()} ₽</div>
          </div>
          <form className={styles.form} onSubmit={handleOrder}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleFormChange} required />
            <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleFormChange} required />
            <input name="email" placeholder="Email" value={form.email} onChange={handleFormChange} required />
            <button type="submit" className={styles.orderBtn}>Order</button>
          </form>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default CartPage; 