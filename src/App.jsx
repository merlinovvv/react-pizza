import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';

import style from './App.module.css';

function App() {
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
