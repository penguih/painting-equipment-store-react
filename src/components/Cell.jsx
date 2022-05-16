import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Cell.module.scss';
import StoreContext from '../hooks/useContext';

function Cell({ id, title, cost, imgUrl, handleClickAdd }) {
    const { loadingReady, isItemAdded } = React.useContext(StoreContext);
    // isItemAdded - зміна стилю та тексту кнопки при додаванні до корзини, змінення на сторінці та в корзині

    const addCartClick = () => {
        handleClickAdd({ id, title, cost, imgUrl });
    }

    return (
        <div className={styles.Cell}>
            {loadingReady ? //якщо товари з БД не завантажилась то відображати пусті картки
                <ContentLoader
                    speed={3}
                    width={240}
                    height={330}
                    viewBox="0 0 240 330"
                    backgroundColor="#C0C0C0"
                    foregroundColor="#F2F2F2"
                >
                    <rect x="10" y="10" rx="0" ry="0" width="200" height="200" />
                    <rect x="5" y="220" rx="0" ry="0" width="210" height="20" />
                    <rect x="5" y="245" rx="0" ry="0" width="180" height="20" />
                    <rect x="5" y="290" rx="0" ry="0" width="130" height="28" />
                    <rect x="164" y="278" rx="0" ry="0" width="50" height="50" />
                </ContentLoader>
                : <>
                    <div className={styles.imgWrap}>
                        <img height='220px' src={imgUrl} alt={id} />
                    </div>
                    <p>{title}</p>
                    <div className={styles.price}>
                        <p>{cost} грн.</p>
                        {handleClickAdd && <button className={isItemAdded(id) ? styles.addCart : styles.addCartChecked}
                            onClick={addCartClick}>{isItemAdded(id) ? '+' : '🗸'}</button>}
                    </div>

                </>}
        </div>
    );
}

export default Cell;
