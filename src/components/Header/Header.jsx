import { Link } from 'react-router-dom';
import HeaderButton from '../ButtonHeader/ButtonHeader';
import style from './style.module.css';

function Header(props) {
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

      {props.displayButton && (
        <Link to="/cart">
          <HeaderButton />
        </Link>
      )}
    </div>
  );
}

export default Header;
