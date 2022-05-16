import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import StoreContext from './hooks/useContext';

import Header from './components/Header';
import Footer from './components/Footer';
import CartWindow from './components/CartWindow';

import Main from './pages/Main';
import Delivery from './pages/Delivery';
import Order from './pages/Order';
import RecentOrders from './pages/RecentOrders';

let tempLS = []; //масив для додавання товару до корзини
function App() {

  const [addCart, setAddCart] = React.useState([]); //список всіх товарів в корзині, також для додавання товару в корзину
  const [airbrush, setAirbrush] = React.useState([]); //массив с краскопультами
  const [searchInput, setSearchInput] = React.useState(''); //текст в строці пошуку
  const [openCart, setOpenCart] = React.useState(false); //для открытия и закрытия корзины
  const [loadingReady, setLoadingReady] = React.useState(true); //підтвердження загрyзки з БД

  tempLS = addCart;
  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoadingReady(true);

        const itemsResponse = await axios.get('https://62792bd2d00bded55ae56077.mockapi.io/airbrush');

        setLoadingReady(false);
        setAirbrush(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных с сервера :(\nОбновите страницу или попробуйте позже.');
        console.error(error);
      }
    }
    fetchData();

    if (!localStorage.getItem('Cart')) { //якщо в localStorage не існує Корзини то створити її
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    setAddCart(JSON.parse(localStorage.getItem('Cart'))); //задання корзини з localStorage для вівдображення на сторінці
  }, []);

  const onAddToCart = (item) => { //додавання певного товару до корзини
    let keyTemp; //записати індекс обраного товару
    for (const key in addCart) {
      if (addCart[key].id === item.id) {
        keyTemp = key;
        break;
      }
    }

    if (addCart.filter(el => el.id === item.id).length > 0) {
      tempLS.splice(keyTemp, 1); //remove
    } else {
      tempLS.push(item); //add
    }

    localStorage.setItem('Cart', JSON.stringify(tempLS));
    setAddCart(JSON.parse(localStorage.getItem('Cart')));
  };
  const onRemoveCart = (Id) => { //додавання певного товару до корзини
    for (const key in tempLS) {
      if (Id === tempLS[key].id) {
        tempLS.splice(key, 1);
      }
    }
    localStorage.setItem('Cart', JSON.stringify(tempLS));
    setAddCart(JSON.parse(localStorage.getItem('Cart')));
  };

  const onChangeSearch = (event) => { //для вікна пошуку
    setSearchInput(event.target.value);
  }
  const findItemMenu = (text) => { //для пошуку по краскопультам
    setSearchInput(text);
  }

  const isItemAdded = (id) => {
    return !addCart.some(obj => obj.id === id)
  };

  return (
    <>
      <StoreContext.Provider value={{ addCart, loadingReady, isItemAdded }}>
        {openCart && < CartWindow onClickCart={() => setOpenCart(false)} onRemove={onRemoveCart} /> /*відкриття корзини, додавання в корзину*/}

        <Header onClickCart={() => setOpenCart(true)} onChangeSearch={onChangeSearch} searchInput={searchInput} findItemMenu={findItemMenu} clearSearch={() => setSearchInput('')} />
        <div className='container'>

          <Routes>
            <Route exact path="/" element={<Main
              searchInput={searchInput}
              airbrush={airbrush}
              onAddToCart={onAddToCart}
            />} />
            <Route exact path='/delivery/' element={<Delivery />} />
            <Route exact path='/order/' element={<Order setAddCart={setAddCart} />} />
            <Route exact path='/recent-orders/' element={<RecentOrders />} />
            <Route path='*' element={<h1 style={{ margin: '50px 0 600px 0' }}>404 not found<br /><br />Страница не найдена</h1>} />
          </Routes>
        </div>
        <Footer />
      </StoreContext.Provider>
    </>
  );
}

export default App;
