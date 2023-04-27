import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import style from './style.module.css';

function Header({displayButton}) {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className={style.header}>
      <Link to="/">
        <div className={style.logo}>
          <img src="img/logo.png" alt="" />
          <div className={style.text}>
            <p className={style.logo_title}>REACT PIZZA</p>
            <p className={style.logo_subtitle}>найсмачніша піца у всесвіті</p>
          </div>
        </div>
      </Link>

      {displayButton && (
        <Link to="/cart">
          <ButtonHeader totalPrice={totalPrice} totalCount={totalCount} />
        </Link>
      )}
    </div>
  );
}

export default Header;
