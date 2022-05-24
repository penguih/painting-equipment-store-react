import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../hooks/useCart';

function Header({ onClickCart, onChangeSearch, searchInput, clearSearch }) {
    const { addCart, cartCost } = useCart();

    return (
        <>
            <header>
                <div>
                    <Link to="/"><img height={24} src="img\logo.svg" alt="Коробка" /></Link>
                </div>
                <nav>
                    <ul>
                        <Routes>
                            <Route exact path='delivery' element={<li><Link to="/">Главная</Link></li>} />
                            <Route exact path='order' element={<li><Link to="/">Главная</Link></li>} />
                            <Route path='*' element={<li><Link to="/">Главная</Link></li>} />
                            <Route exact path="/" element={ // увімкнути пошук тільки на головній сторінці
                                <li><div className='d-flex'>
                                    <div className={styles.search}>
                                        <img height={18} src="img\search.svg" alt="search" />
                                        <input onChange={onChangeSearch} placeholder='Поиск...' value={searchInput} />
                                        {searchInput && <p className={styles.searchClear} onClick={clearSearch}>✖</p>}
                                    </div>
                                </div></li>} />
                        </Routes>
                        <li><Link to="delivery">Доставка и оплата</Link></li>
                        <li><Link to="about">О нас</Link></li>
                    </ul>
                </nav>

                <div className={styles.cart} onClick={onClickCart}>
                    {Boolean(addCart.length) && <div><p>{addCart.length}</p></div>}
                    <img src="img\cart.svg" alt="card" />
                    <p>{cartCost} грн.</p>
                </div>
            </header>
        </>
    );
}

export default Header;