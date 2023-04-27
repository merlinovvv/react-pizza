import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';

import style from './App.module.css';

function App() {
  const location = useLocation();
  const displayButton = location.pathname !== '/cart'; // если путь не '/cart', то displayButton будет равен true, иначе - false

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Header displayButton={displayButton} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;
