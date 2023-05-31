import React from "react";
import styles from "./Product.module.css";

function Product(props) {
  const { name, description, price } = props;

  return (
    <>
      <div className={styles.item}>
        <h3 className={styles.name}>{name}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            className={styles.img}
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Cherry_fruit_on_white_background.jpg"
            alt=""
          />
          <p className={styles.info}>{description}</p>
        </div>
        <p className={styles.price}>Цена: {price} руб.</p>
      </div>
    </>
  );
}

export default Product;
