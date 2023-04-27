import React from 'react';
import style from './style.module.css';

function CartProduct({ item, deleteOnePizza, incPizza, decPizza }) {
  const totalPrice = item.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className={style.product_block}>
      <div className={style.product_main}>
        <img className={style.image_product} src={item[0].imageUrl} alt="" />
        <div className={style.text_product}>
          <p className={style.title}>{item[0].name}</p>
          <p className={style.sub_title}>
            {item[0].type} тісто, {item[0].size} см.
          </p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.count_operations}>
          <button
            onClick={() => decPizza(item)}
            className={style.operations_btn}>
            –
          </button>
          <p className={style.count_product}>{item.length}</p>
          <button
            onClick={() => incPizza(item)}
            className={style.operations_btn}>
            +
          </button>
        </div>
        <p className={style.sum_price}>{totalPrice} ₴</p>
        <button
          onClick={() => deleteOnePizza(item)}
          className={style.delete_product}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
