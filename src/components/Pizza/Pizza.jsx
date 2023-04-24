import style from './style.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Pizza({ name, imageUrl, price, types, sizes }) {
  const typeNames = ['тонке', 'традиційне'];

  const sizeNames = [26, 30, 40];
  
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  useEffect(() => {
    for (let i = 0; i < sizeNames.length; i++) {
      if (sizes.indexOf(sizeNames[i]) !== -1) {
        setActiveSize(i);
        break;
      }
    }
  },[]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className={style.pizza_box}>
      <img src={imageUrl} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <div className={style.settings}>
        <div className={style.dough_settings}>
          {typeNames.map((typeName, index) => (
            <button
              key={typeName}
              onClick={() => onSelectType(index)}
              className={
                style.settings_btn +
                ' ' +
                (activeType === index && types.includes(index)
                  ? style.active
                  : '') +
                (!types.includes(index) ? style.disabled : '')
              }>
              {typeName}
            </button>
          ))}
        </div>
        <div className={style.size_settings}>
          {sizeNames.map((sizeName, index) => (
            <button
              key={sizeName}
              onClick={() => onSelectSize(index)}
              className={
                style.settings_btn +
                ' ' +
                (activeSize === index && sizes.includes(sizeName)
                  ? style.active
                  : '') +
                (!sizes.includes(sizeName) ? style.disabled : '')
              }>
              {sizeName} см.
            </button>
          ))}
        </div>
      </div>
      <div className={style.purchase}>
        <p className={style.price}>від {price} ₴</p>
        <button className={style.add_cart}>
          <span className={style.plus}></span>
          Додати
          <span className={style.quantity}></span>
        </button>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};

Pizza.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
}

export default Pizza;
