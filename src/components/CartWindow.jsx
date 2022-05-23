import { Link } from 'react-router-dom';
import styles from './CartWindow.module.scss'
import { useCart } from '../hooks/useCart';

function CartWindow({ onRemove, onClickCart }) {
    const { addCart, cartCost } = useCart();

    return (
        <div className={styles.cartBG}>
            <div className={styles.cartWindow}>
                <div className={styles.cartTopBottom}>
                    <h2>Корзина</h2>
                    <p onClick={onClickCart}>✖</p> {/* закрити корзину */}
                </div>
                {addCart.length > 0 ?
                    <>
                        <div className={styles.items}>
                            {addCart.map((obj) => ( //вивід даних товарів доданих в корзину
                                <div key={obj.id} className={styles.cartItem}>
                                    <div className="d-flex">
                                        <div className={styles.imgWrap}>
                                            <img height={100} src={obj.imgUrl} alt={obj.id} />
                                        </div>
                                        <div>
                                            <p>{obj.title}</p>
                                            <h6>{obj.cost} грн.</h6>
                                        </div>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className={styles.delete} src="img\basket.svg" alt="delete" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.cartTopBottom}>
                            <ul>
                                <li>Цена доставки: {Math.round(cartCost / 100 * 2 + 20)} грн.</li>
                            </ul>
                            <Link to="/order" onClick={onClickCart}><button>Оформить заказ</button></Link>
                        </div>
                    </>
                    : <>
                        <img className='emptyCart' src="img\emptyCart.png" alt="emptyCart" />
                        <h1 > Ваша корзина пуста...</h1>
                    </>}
            </div>
        </div >
    );
}

export default CartWindow;