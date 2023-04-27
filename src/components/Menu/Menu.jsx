import React, { memo, useState } from 'react';
import style from './style.module.css';
import Sort from '../Sort/Sort';
import PropTypes from 'prop-types';
import Select from 'react-select';

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
  const options = [
    { value: null, label: 'Всі' },
    { value: 0, label: 'М`ясні' },
    { value: 1, label: 'Вегетаріанські' },
    { value: 2, label: 'Гриль' },
    { value: 3, label: 'Гострі' },
    { value: 4, label: 'Закриті' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'rgba(254, 93, 30, 0.073)'
        : state.isHover
        ? 'rgba(254, 93, 30, 0.051)'
        : 'transparent',
      color: state.isSelected || state.isHover ? '#FE5F1E' : '#000',
      padding: 10,
      cursor: 'pointer',
      fontWeight: state.isSelected || state.isHover ? 700 : 400,
      '&:active': {
        backgroundColor: 'rgba(254, 93, 30, 0.073)',
        color: '#FE5F1E',
        fontWeight: 700,
      },
    }),
    control: (provided, state) => ({
      ...provided,
      border: '0px solid #aaa',
      borderRadius: 5,
      padding: 5,
      minHeight: 40,
      boxShadow: state.isFocused ? 'none' : 'none',
    }),
    menu: (provided) => ({
      ...provided,
      open: false,
      margin: 0,
      padding: '10px 0',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.015em',
      minWidth: '120px',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.09)',
      borderRadius: '10px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#aaa',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#FE5F1E',
      textDecoration: 'underline dotted',
    }),
    container: (provided) => ({
      ...provided,
      border: '0px solid transparent',
    }),
  };

  const handleChange = (selectedOption) => {
    onClickCategory(selectedOption.value);
  };
  const [visiblePopup, setVisiblePopup] = useState(false);

  const clickPopup = (e) => {
    setVisiblePopup(e);
  };

  return (
    <nav className={style.features}>
      {window.innerWidth <= 1085 ? (
        <div className={style.menu_list_category}>
          <label htmlFor="select-category">
            <span
              className={
                style.arrow + ' ' + (visiblePopup ? style.active : '')
              }></span>
            Категорії:
          </label>
          <Select
            isSearchable={false}
            onMenuOpen={() => clickPopup(true)}
            onMenuClose={() => clickPopup(false)}
            onClick={() => clickPopup}
            id="select-category"
            options={options}
            value={options.find((option) => option.value === activeCategory)}
            onChange={handleChange}
            styles={customStyles}
          />
        </div>
      ) : (
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
      )}

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
