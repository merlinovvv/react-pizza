import { useEffect, useState, useRef } from 'react';
import style from './style.module.css';
function Sort({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const activeName = items[activeItem].name;

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
    setActiveItem(index);
    setVisiblePopup(false);
  };
  return (
    <div ref={sortRef} className={style.sorting}>
      <div className={style.label}>
        <span
          className={
            style.arrow + ' ' + (visiblePopup ? style.active : '')
          }></span>
        <label htmlFor="sort">
          Сортування за:{' '}
          <span onClick={clickPopup} className={style.click_link}>
            {activeName}
          </span>
        </label>
      </div>
      {visiblePopup && (
        <ul id="sort" className={style.sort_list + ' ' + style.active_popup}>
          {items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(index)}
                className={
                  style.sort_link +
                  ' ' +
                  (activeItem === index ? style.active : '')
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

export default Sort;
