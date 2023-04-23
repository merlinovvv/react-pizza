import style from './style.module.css';
import { Menu, Pizza } from '../../components';
import { useSelector } from "react-redux";

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  return (
    <div className={style.home}>
      <span className={style.line}></span>
      <div className={style.container}>
        <Menu
          onClickItem={(item) => console.log(item)}
          items={['М`ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']}
        />
        <div className={style.pizza_page}>
          <div className={style.title}>Всі піци</div>
          <div className={style.pizza_list}>
            {items && items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
