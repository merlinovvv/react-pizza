import { useEffect, useState, useRef } from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

function Sort({ activeSortType, items, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeName =
    items[items.findIndex((item) => item.type === activeSortType)].name;

  const sortRef = useRef();
  const clickPopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    if (sortRef.current && !sortRef.current.contains(event.target)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className={style.sorting}>
      <div className={style.label}>
        <label htmlFor="sort">
          <span
            className={
              style.arrow + ' ' + (visiblePopup ? style.active : '')
            }></span>
          Сортування за:{' '}
        </label>
        <span onClick={clickPopup} className={style.click_link}>
          {activeName}
        </span>
      </div>
      {visiblePopup && (
        <ul id="sort" className={style.sort_list + ' ' + style.active_popup}>
          {items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(item.type)}
                className={
                  style.sort_link +
                  ' ' +
                  (activeSortType === item.type ? style.active : '')
                }
                key={`${item.type}_${index}`}>
                {item.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

Sort.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

Sort.defaultProps = {
  items: [],
};

export default Sort;
