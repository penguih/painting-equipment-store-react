import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../hooks/useCart';

function Header({ onClickCart, onChangeSearch, searchInput, findItemMenu, clearSearch }) {
    const { addCart, cartCost } = useCart();

    const [focused, setFocused] = React.useState(false) //для отображения предложений во время поиска
    const onFocus = () => setFocused(true)
    const onBlur = () => setTimeout(() => { setFocused(false) }, 100);

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
                                        <input onChange={onChangeSearch} placeholder='Поиск...' value={searchInput} onFocus={onFocus} onBlur={onBlur} />
                                        {searchInput && <p className={styles.searchClear} onClick={clearSearch}>✖</p>}
                                    </div>
                                </div></li>} />
                        </Routes>
                        <li><Link to="delivery">Доставка и оплата</Link></li>
                    </ul>
                </nav>

                <div className={styles.cart} onClick={onClickCart}>
                    {Boolean(addCart.length) && <div><p>{addCart.length}</p></div>}
                    <img src="img\cart.svg" alt="card" />
                    <p>{cartCost} грн.</p>
                </div>
            </header>
            {focused && //варіанти для пошуку
                <div className={styles.helpSearch}>
                    <p onClick={() => findItemMenu("Sata")}>Sata</p>
                    <p onClick={() => findItemMenu("DeVILBISS")}>DeVILBISS</p>
                    <p onClick={() => findItemMenu("LVLP")}>LVLP</p>
                    <p onClick={() => findItemMenu("HVLP")}>HVLP</p>
                </div>}
        </>
    );
}

export default Header;