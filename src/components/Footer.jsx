import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <Link to="/"><img height={24} src="img/logo.svg" alt="Коробка" /></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/delivery/">Доставка и оплата</Link></li>
                        <li><Link to="/recent-orders/">Последние заказы</Link></li>
                        <li><a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Telegram.svg" alt="telegram" /></a></li>
                        <li><a href="https://t.me/Jabka" target="_blank" rel="noreferrer"><img src="img/Viber.svg" alt="viber" /></a></li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default Footer;