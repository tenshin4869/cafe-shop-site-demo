import ConfirmationModal from "@/components/ConfirmationModal";
import Container from "@/components/container";
import Hero from "@/components/hero";
import menuItems from "@/components/item";

import styles from "@/styles/menu.module.css";
import React, { useState } from "react";

export default function Menu() {
  const [confirmationData, setConfirmationData] = useState({
    isOpen: false,
    selectedItem: null,
    quantity: 1,
  });

  const openConfirmationModal = (item) => {
    setConfirmationData({
      isOpen: true,
      selectedItem: item,
      quantity: 1,
    });
  };

  const closeConfirmationModal = () => {
    setConfirmationData((prevData) => ({
      ...prevData,
      isOpen: false,
    }));
  };

  const handleQuantityChange = (value) => {
    setConfirmationData((prevData) => ({
      ...prevData,
      quantity: value,
    }));
  };

  return (
    <>
      <Container>
        <Hero
          title="PRODUCT"
          subtitle="こちらの商品はすべてTAKEOUTとなっています。"
        />
        <h2>メニュー一覧</h2>
        <div className={styles.container}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
              />
              <div className={styles.productName}>{item.name}</div>
              <div className={styles.productPrice}>¥{item.price}</div>

              <button
                onClick={() => openConfirmationModal(item)}
                className={styles.purchaseButton}
              >
                購入
              </button>
            </div>
          ))}

          <ConfirmationModal
            isOpen={confirmationData.isOpen}
            onClose={closeConfirmationModal}
            item={confirmationData.selectedItem}
            quantity={confirmationData.quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
      </Container>
    </>
  );
}
