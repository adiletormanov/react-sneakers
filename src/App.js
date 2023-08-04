import React from 'react';
import { Route, Routes} from 'react-router-dom';
import axios from 'axios';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import NotFound from './components/pages/NotFound';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [sneakers, setSneakers] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCart = () => {
    setCartOpen(true);
  };

  const onClickClose = () => {
    setCartOpen(false);
  };

  const fetchSneakers = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        `https://6462a1ab4dca1a66134ac09e.mockapi.io/data`,
      );
      setSneakers(res.data);
    } catch (error) {
      alert('Ошибка при получении кроссовок');
      console.log('ERROR', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <div className="wrapper">
      {cartOpen && <Drawer onClickClose={onClickClose} />}
      {/* {cartOpen ? <Drawer onClickClose={onClickClose} /> : null} */}
      <Header onClickCart={onClickCart} />

      <Routes>
        <Route
          path="/"
          element={<Home sneakers={sneakers} isLoading={isLoading} />}
        />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/*" element={<NotFound />} />

				<Route path="/LoginPage" element={<LoginPage/>} />

				<Route path="/RegisterPage" element={<RegisterPage/> } />

      </Routes>
    </div>
  );
}

export default App;
