import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <Link to="/painting-equipment-react-store/"><img height={24} src="img/logo.svg" alt="Коробка" /></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="delivery">Доставка и оплата</Link></li>
                        <li><Link to="order">Оформить заказ</Link></li>
                        <li><a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Telegram.svg" alt="telegram" /></a></li>
                        <li><a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Viber.svg" alt="viber" /></a></li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default Footer;