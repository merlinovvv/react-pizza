import style from './style.module.css';
import { Menu, Pizza } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { useCallback } from 'react';
import { fetchPizzas } from '../../redux/actions/pizzas';
import PizzasLoading from '../../components/PizzasLoading/PizzasLoading';

const categories = ['М`ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onClickSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  return (
    <div className={style.home}>
      <span className={style.line}></span>
      <div className={style.container}>
        <Menu
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categories}
          onClickSortType={onClickSortType}
          sortBy={sortBy}
        />
        <div className={style.pizza_page}>
          <div className={style.title}>Всі піци</div>
          <div className={style.pizza_list}>
            {!isLoaded &&
              Array(12)
                .fill()
                .map((_, index) => <PizzasLoading key={index} />)}
            {items && items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
