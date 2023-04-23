import {Header} from '../../components';
import style from './style.css';

function Basket() {
  return (
    <div className={style.main}>
      <Header displayButton={false}/>
      <span className={style.line}></span>
    </div>
  );
}

export default Basket;
