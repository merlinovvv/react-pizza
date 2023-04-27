import style from './style.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Pizza({ id, name, imageUrl, price, types, sizes, onClickAddPizza, totalPizzas }) {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: typeNames[activeType],
      size: sizeNames[activeSize],
    };
    onClickAddPizza(obj);

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
        <button onClick={onAddPizza} className={style.add_cart}>
          <span className={style.plus}></span>
          Додати
          <span className={totalPizzas[id] === 0 || totalPizzas[id] === null || totalPizzas[id] === undefined ? '' : style.quantity}>{totalPizzas[id] ? totalPizzas[id].length : null}</span>
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
  onClickAddPizza: PropTypes.func.isRequired,
};

Pizza.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default Pizza;
