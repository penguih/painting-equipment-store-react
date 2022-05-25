import React from 'react';
import Cell from '../components/Cell';
import StoreContext from '../hooks/useContext';

function Main({ searchInput, airbrush, onAddToCart, findItemMenu, setAirbrush }) {
    const { loadingReady } = React.useContext(StoreContext);

    const [filterOrder, setFilterOrder] = React.useState(true);

    const itemsSort = (item, defSort) => {
        (defSort ? fetch(`https://62792bd2d00bded55ae56077.mockapi.io/airbrush`)
            : fetch(`https://62792bd2d00bded55ae56077.mockapi.io/airbrush?sortBy=${item}${filterOrder ? "&order=desc" : "&order=asc"}`))
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setAirbrush(json);
            });
    };

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
            <div className='Filters'>
                <ul className='sortItems'>
                    <li onClick={() => findItemMenu("")}>Все</li>
                    <li onClick={() => findItemMenu("Sata")}>Sata</li>
                    <li onClick={() => findItemMenu("DeVILBISS")}>DeVILBISS</li>
                    <li onClick={() => findItemMenu("LVLP")}>LVLP</li>
                    <li onClick={() => findItemMenu("HVLP")}>HVLP</li>
                </ul>
                <ul className='filterItems'>
                    <li onClick={() => itemsSort("id", true)}>По умолчанию</li>
                    <li onClick={() => {
                        itemsSort("cost")
                        setFilterOrder(!filterOrder)
                    }}>Цена {filterOrder ? "▼" : "▲"}</li>
                </ul>
            </div>
            {searchInput && <h2>Поиск по: {searchInput}</h2>}
            {Boolean(airbrush.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).length)
                || (loadingReady || <>
                    <img className='emptyCart' src="img\emptyCart.png" alt="emptyCart" />
                    <h1> Ничего не найдено...</h1>
                </>)}

            <div className='disFlex'>
                {itemsRender()}
            </div>
        </>
    );
}

export default Main;