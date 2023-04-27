import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Pizza, PizzasLoading } from '../../components';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import style from './style.module.css';
import { addPizzaToCart } from '../../redux/actions/cart';

const categories = ['М`ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

function Home() {
  const dispatch = useDispatch();
  const itemsPizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onClickSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  };

  const { items } = useSelector(({ cart }) => cart);

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
            {itemsPizzas &&
              itemsPizzas.map((pizza) => (
                <Pizza
                  onClickAddPizza={handleAddPizzaToCart}
                  key={pizza.id}
                  totalPizzas={items}
                  {...pizza}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
