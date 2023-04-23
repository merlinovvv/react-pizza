import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Home, Cart } from './pages';
import { Header } from './components';
import { setPizzas } from './redux/actions/pizzas';
import style from './App.module.css';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('http://localhost:3000/data.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Header displayButton={true} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;
