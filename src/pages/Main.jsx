import React from 'react';
import Cell from '../components/Cell';
import StoreContext from '../hooks/useContext';

function Main({ searchInput, airbrush, onAddToCart }) {
    const { loadingReady } = React.useContext(StoreContext);

    const itemsRender = () => {
        const airbrushFilter = airbrush.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())) //фільтр для пошуку

        return (loadingReady ? [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]//Array(10).fill({})
            : airbrushFilter).map((cardObj) => (
                <Cell
                    key={cardObj.id}
                    {...cardObj}
                    handleClickAdd={(item) => onAddToCart(item)} //для додання в корзину, передає об'єкт
                />));
    };

    return (
        <>
            {searchInput && <h2>Поиск по: {searchInput}</h2>}
            {Boolean(airbrush.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).length)
                || (loadingReady || <>
                    <img className='emptyCart' src="img\emptyCart.png" alt="emptyCart" />
                    <h1 > Ничего не найдено...</h1>
                </>)}

            <div className='disFlex'>
                {itemsRender()}
            </div>
        </>
    );
}

export default Main;