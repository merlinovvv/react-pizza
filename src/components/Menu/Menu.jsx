import React, { memo } from 'react';
import style from './style.module.css';
import Sort from '../Sort/Sort';
import PropTypes from 'prop-types';

const sortItems = [
  { name: 'популярністю', type: 'rating' },
  { name: 'ціною', type: 'price' },
  { name: 'алфавітом', type: 'name' },
];

const Menu = memo(function Menu({
  activeCategory,
  items,
  onClickCategory,
  onClickSortType,
  sortBy,
}) {
  return (
    <nav className={style.features}>
      <ul className={style.menu_list}>
        <li className={style.menu_link}>
          <button
            className={activeCategory === null ? style._active : ''}
            onClick={() => onClickCategory(null)}>
            Всі
          </button>
        </li>
        {items &&
          items.map((item, index) => (
            <li key={`${item}_${index}`} className={style.menu_link}>
              <button
                className={activeCategory === index ? style._active : ''}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}>
                {item}
              </button>
            </li>
          ))}
      </ul>
      <Sort
        activeSortType={sortBy}
        items={sortItems}
        onClickSortType={onClickSortType}
      />
    </nav>
  );
});

Menu.propTypes = {
  activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Menu;
