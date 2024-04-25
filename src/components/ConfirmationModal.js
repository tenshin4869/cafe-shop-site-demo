import React, { useState } from 'react';
import styles from '../styles/confirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, item, quantity, onQuantityChange }) => {
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleConfirmOrder = () => {
      
      console.log(`商品: ${item?.name}, 個数: ${quantity}`);
      setOrderConfirmed(true); // 注文が確定したことを設定
    };
  
    const handleCloseModal = () => {
      setOrderConfirmed(false); // モーダルが閉じられたら注文確定状態をリセット
      onClose();
    };

    const calculateTotalPrice = () => {
        return item?.price * quantity;
      };
    return (
    <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}>
      <div className={styles.modalContent}>
        
        <span className={styles.closeButton} onClick={handleCloseModal}>
          &times;
        </span>

        <div className={styles.sideBySideCenter}>
        <h1>注文内容を確認</h1>
        
        <img width="600" height="500" src={item?.image} alt={item?.name} />

        <div className={styles.orderItemName}>{item?.name}</div>
        <div className={styles.orderItemPrice}>¥{item?.price}</div>
        <div className={styles.quantitySelector}>
          <label>数量：</label>
          <button onClick={() => onQuantityChange(Math.max(quantity - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
        </div>
        <div className={styles.totalPrice}>
          合計金額：¥{calculateTotalPrice()}
        </div>
        <div className={styles.confirmMessage}>
        {orderConfirmed ? '注文ありがとうございました。' : 'この注文でお間違えないですか？'}
        </div>
        {!orderConfirmed && (
          <button onClick={handleConfirmOrder} className={styles.confirmButton}>
            注文確定
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;